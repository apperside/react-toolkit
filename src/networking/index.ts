export * from "./restManager"
export * from "./httpManager"

type BasePath<T extends string | unknown = unknown> = `${T extends string ? T : ""}${T extends string ? "/" : ""}`
type AllRoutes<S extends string, Prefix extends string | unknown = unknown> =
  `${BasePath<Prefix>}${S}` |
  `${BasePath<Prefix>}${S}/:id`
  | `${BasePath<Prefix>}${S}/bulk`

export interface User {

}
export interface RouteModelMapping {
  user: User
}
export type ModelMapping<T extends keyof RouteModelMapping, BasePath extends string | unknown = unknown> = {
  [key in AllRoutes<T, BasePath>]: RouteModelMapping[T]
}


export interface ModelsDef { }


export type CrudRoutes = {
  // eslint-disable-next-line max-len
  [key in keyof ModelsDef]:
  key extends `${string}/bulk` ?
  { dataType: { data: never }, payloadType: { data: ModelsDef[key][] } } :
  key extends `${string}/:id` ?
  { dataType: { data: ModelsDef[key] }, payloadType: ModelsDef[key] } :
  key extends `${string}` ?
  { dataType: { data: ModelsDef[key][] }, payloadType: never } :
  unknown
}

export interface MainApi extends CrudRoutes {
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
  P extends undefined ? Partial<D> : P extends null ? never : Partial<P>
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


