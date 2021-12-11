import { ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { apiRequest } from "src/networking/httpManager";
import { useOperationStatus } from ".";
import objHash from "object-hash";
import { useCallback, useRef, useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const [data, setData] = useState<T>();
  const [error, setError] = useState()
  const execute = useCallback(async (...params: Parameters<(...args: A) => Promise<T>>) => {
    const toBeHashed = { ...params, "__taskName__": taskName };
    const hashed = objHash(toBeHashed, { unorderedObjects: true, unorderedArrays: true, unorderedSets: true });
    console.log("hashed", toBeHashed, hashed)
    // setHashKey(hashed)
    setStatus("loading");

    // dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "loading" } })
    // console.log('set loading true');
    try {
      const result = await fn?.(...params);
      setData(result);
      setStatus("success");
      // dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "success", data: result } })
      return result;
    } catch (err: any) {
      // setStatus("error");
      setError(err);
      console.warn("sideEfect execution error " + taskName, err, JSON.stringify(err));
      // dispatch({ type: "operationsState/taskStatusChange", payload: { taskHash: hashed, status: "error", error: err } })
      throw err;
    }

  }, [fn, options]);
  return { status, isIdle: status === "idle", data: data as T, isLoading: status === "loading", execute, error };
}

