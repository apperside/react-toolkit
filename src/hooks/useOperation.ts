import { ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { useOperationStatus } from "./reducers/selectors";


export type OperationStatus = "idle" | "loading" | "success" | "error"
export type OperationInfo = { status: "idle" } | { status: "loading" } | { status: "success", data: any } | { status: "error", error: any };
export interface OperationsState {
  [key: string]: OperationInfo
}

/**
 * Hook used to fire an async thunk action
 * it provides loading and error state
 * 
 */
export function useOperation<A extends any[], T>(
  fn: (...args: A) => ThunkAction<Promise<T>, any, unknown, any>, simulateDelay?: boolean
) {

  const operationState = useOperationStatus(fn.name);
  console.log("operationState", operationState)
  const dispatch = useDispatch();
  const isLoading = operationState.status === "loading";
  const isIdle = operationState.status === "idle";

  const execute = async (...params: Parameters<(...args: A) => Promise<T>>) => {
    dispatch({ type: "operationsState/operationStatusChange", payload: { operationType: fn.name, status: "loading" } })
    // console.log('set loading true');
    try {
      const result = await dispatch(fn(...params));
      dispatch({ type: "operationsState/operationStatusChange", payload: { operationType: fn.name, status: "success", data: result } })
      return result;
    } catch (err: any) {
      console.warn("sideEfect execution error " + fn.name, err, JSON.stringify(err));
      dispatch({ type: "operationsState/operationStatusChange", payload: { operationType: fn.name, status: "error", error: err } })
      throw err;
    }
  };
  return { status: operationState.status, isIdle, data: (operationState.status as any).data as T, isLoading, execute, error: (operationState.status as any).data };
}

