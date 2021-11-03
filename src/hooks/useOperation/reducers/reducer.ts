
export type OperationStatus = "idle" | "loading" | "success" | "error"
export type OperationInfo = { status: "idle" } | { status: "loading" } | { status: "success", data: any } | { status: "error", error: any };
export interface OperationsState {
	[key: string]: OperationInfo
}
// Define the initial state using that type
const initialState: OperationsState = {

}

const reducer = (state: OperationsState = initialState, action: any): OperationsState => {
	console.log("reducer fired new, action is", action, state);
	switch (action.type) {
		case "operationsState/operationStatusChange": {
			if (action.payload) {
				console.log("has payload", action.payload)
				const operationType = action.payload?.operationType;
				console.log("operationType is", operationType)
				if (!operationType) {
					return { ...state }
				}

				return {
					...state,
					[operationType]: action.payload
				}
			}
			return { ...state }
		}
		default: {
			return { ...state ?? {} }
		}
	}
}

export const operationsStatusReducer = reducer;