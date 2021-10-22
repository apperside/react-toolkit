import { createSelector } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { OperationInfo, OperationsState } from "./reducer";

const operationsStatusSlice = (state: any) => {
	return state.operationsState ?? {}
};

export const operationStatusSelector = createSelector(
	operationsStatusSlice,
	slice => slice
)

export const operationStatusSelectors = {
	operationStatusSelector
}

export const useOperationStatus = (operationKey: keyof OperationsState) => {
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