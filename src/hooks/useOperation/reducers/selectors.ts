import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { OperationInfo, OperationsState } from "./reducer";

const operationsStatusSlice = (state: any) => {
	return state.operationsState ?? {}
};

const taskStatusSlice = (state: any) => {
	return state.taskState ?? {}
};

export const operationStatusSelector = createSelector(
	operationsStatusSlice,
	slice => slice
)

export const operationStatusSelectors = {
	operationStatusSelector
}

export const useOperationStatus = (operationKey?: keyof OperationsState) => {
	if (!operationKey) {
		return {
			status: "idle"
		}
	}
	const operationsStatus = useSelector(operationStatusSelector) ?? {}
	console.log("operation status from selector", operationKey, operationsStatus, operationsStatus[operationKey]?.status)
	const status = useMemo<OperationInfo>(() => {
		console.log(`hook selector memo`, operationKey, operationsStatus[operationKey])
		if (operationsStatus[operationKey]) {
			return operationsStatus[operationKey]
		}
		return {
			status: "idle"
		}
	}, [operationsStatus[operationKey]?.status])

	return status;
}

export const useTaskStatus = (taskKey?: keyof OperationsState) => {
	if (!taskKey) {
		return {
			status: "idle"
		}
	}
	const operationsStatus = useSelector(taskStatusSlice) ?? {}
	console.log("task status from selector", taskKey, operationsStatus, operationsStatus[taskKey]?.status)
	const status = useMemo<OperationInfo>(() => {
		console.log(`task hook selector memo`, taskKey, operationsStatus[taskKey])
		if (operationsStatus[taskKey]) {
			return operationsStatus[taskKey]
		}
		return {
			status: "idle"
		}
	}, [operationsStatus[taskKey]?.status])

	return status;
}