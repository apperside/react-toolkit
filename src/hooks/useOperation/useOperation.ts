import { ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { apiRequest } from "src/networking/httpManager";
import { useOperationStatus } from "./reducers/selectors";
import objHash from "object-hash";
import { useState } from "react";

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
  fn: (...args: A) => ThunkAction<Promise<T>, any, unknown, any>, options?: { name: string, simulateDelay?: boolean }
) {

  const actionName = options?.name ?? fn.name

  const [hashKey, setHashKey] = useState<string>()
  const operationState = useOperationStatus(hashKey);
  console.log("operationState", operationState)
  const dispatch = useDispatch();
  const isLoading = operationState.status === "loading";
  const isIdle = operationState.status === "idle";

  const execute = async (...params: Parameters<(...args: A) => Promise<T>>) => {
    const toBeHashed = { ...params, "__taskName__": actionName };
    const hashed = objHash(toBeHashed, { unorderedObjects: true, unorderedArrays: true, unorderedSets: true });
    console.log("hashed", toBeHashed, hashed)
    setHashKey(hashed)
    dispatch({ type: "operationsState/operationStatusChange", payload: { operationHash: hashed, status: "loading" } })
    // console.log('set loading true');
    try {
      const result = await dispatch(fn(...params));
      dispatch({ type: "operationsState/operationStatusChange", payload: { operationHash: hashed, status: "success", data: result } })
      return result;
    } catch (err: any) {
      console.warn("sideEfect execution error " + hashed, err, JSON.stringify(err));
      dispatch({ type: "operationsState/operationStatusChange", payload: { operationHash: hashed, status: "error", error: err } })
      throw err;
    }
  };
  return { status: operationState.status, isIdle, data: (operationState.status as any).data as T, isLoading, execute, error: (operationState.status as any).data };
}

