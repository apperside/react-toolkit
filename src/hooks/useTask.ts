import { ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { apiRequest } from "src/networking/httpManager";
import { useOperationStatus } from ".";
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
export function useTask<A extends any[], T>(
  fn?: (...args: A) => T, options?: { name: string, simulateDelay?: boolean }
) {

  const taskName = options?.name ?? fn?.name
  const [hashKey, setHashKey] = useState<string>()
  const taskState = useOperationStatus(hashKey);
  console.log("taskState", taskName, hashKey, taskState)
  const dispatch = useDispatch();
  const isLoading = taskState.status === "loading";
  const isIdle = taskState.status === "idle";

  const execute = async (...params: Parameters<(...args: A) => Promise<T>>) => {
    const toBeHashed = { ...params, "__taskName__": taskName };
    const hashed = objHash(toBeHashed, { unorderedObjects: true, unorderedArrays: true, unorderedSets: true });
    console.log("hashed", toBeHashed, hashed)
    setHashKey(hashed)

    dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "loading" } })
    // console.log('set loading true');
    try {
      const result = await fn?.(...params);
      dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "success", data: result } })
      return result;
    } catch (err: any) {
      console.warn("sideEfect execution error " + taskName, err, JSON.stringify(err));
      dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "error", error: err } })
      throw err;
    }
  };
  return { status: taskState.status, isIdle, data: (taskState.status as any).data as T, isLoading, execute, error: (taskState.status as any).data };
}

