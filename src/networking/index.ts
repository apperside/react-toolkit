export * from "./restManager"
export * from "./httpManager"

export interface MainApi {
  // "auth/login": { dataType: { result: boolean, token: string }, payloadType: { email: string, password: string } }
}

// interface IApiConfig { [key: string]: { [key: string]: { dataType: any, payloadType?: any } } }
export interface RoutesMapping {
  main: MainApi
}

export type ApiScope = keyof RoutesMapping;

export type RestApiRoute<S extends ApiScope = "main"> = keyof RoutesMapping[S]

export type RestResponseType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> =
  RoutesMapping[S][T] extends { dataType: infer D, payloadType?: infer P } ?
  RoutesMapping[S][T] extends { dataType: infer D } ?
  D
  : { never: string }
  : { never: boolean };

// export type MyResponseType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> = RoutesMapping[S][T]["dataType"]
export type RestPayloadType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> =
  RoutesMapping[S][T] extends { dataType: infer D, payloadType?: infer P } ?
  P extends undefined ? Partial<D> : Partial<P>
  : never;


/**
 * Change accordingly to the the server response shape
 */
export type RestApiGetResponse<T = any> = {
  count: number
  rows: T[];
}

/**
 * Change accordingly to the the server response shape
 */
export type RestApiPostResponse<T = any> = T;
// {
//   result: boolean
//   data: T
// }

/**
 * Change accordingly to the the server response shape
 */
export type RestApiDeleteResponse = {
  result: boolean
}


