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
export type ModelRoutes<T extends keyof RouteModelMapping, BasePath extends string | unknown = unknown> = {
  [key in AllRoutes<T, BasePath>]: RouteModelMapping[T]
}


export interface ModelsDef { }

type GetAllResponse<T> = {
  rows: T[];
  count: number
  page: number
}
export type CrudRoutes = {
  // eslint-disable-next-line max-len
  [key in keyof ModelsDef]:
  key extends `${string}/bulk` ?
  { responseType: { data: never }, payloadType: { data: ModelsDef[key][] } } :
  key extends `${string}/:id` ?
  { responseType: { data: ModelsDef[key] }, payloadType: ModelsDef[key] } :
  key extends `${string}` ?
  { responseType: { data: ModelsDef[key][] }, payloadType: never } :
  unknown
}

export interface MainApi extends CrudRoutes {
}

// interface IApiConfig { [key: string]: { [key: string]: { responseType: any, payloadType?: any } } }
export interface RoutesMapping {
  main: MainApi
}

export type ApiScope = keyof RoutesMapping;

export type RestApiRoute<S extends ApiScope = "main"> = keyof RoutesMapping[S]

export type RestResponseType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> =
  RoutesMapping[S][T] extends { responseType: infer D, payloadType?: infer P } ?
  RoutesMapping[S][T] extends { responseType: infer D } ?
  D
  //@ts-ignore
  : `missing both responseType and payloadType from ${T} in api scope ${S}`
  //@ts-ignore
  : `missing both responseType and payloadType from ${T} in api scope ${S}`;

// export type MyResponseType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> = RoutesMapping[S][T]["responseType"]
export type RestPayloadType<S extends keyof RoutesMapping, T extends keyof RoutesMapping[S]> =
  RoutesMapping[S][T] extends { responseType: infer D, payloadType?: infer P } ?
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


