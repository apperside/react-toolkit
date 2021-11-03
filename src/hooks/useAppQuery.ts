import { useQuery, UseQueryOptions } from "react-query";
import { RestApiRequestOptions, restGet, RestResponseType as RestResponseType, RoutesMapping } from "../networking";

export type UseRestOptions = {
  pathParams?: { [key: string]: any }
  route?: string
} & Omit<RestApiRequestOptions, "apiScope">


export function useAppQuery<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>
  (route: T | { scope: S, route: T }, restOptions: UseRestOptions = {}, queryOptions: UseQueryOptions = {}) {

  const keyForUseQuery: any = [route, { ...restOptions.query }];

  const { extraRoutePath, query, pathParams } = restOptions
  if (extraRoutePath) {
    if (typeof extraRoutePath === "object") {
      keyForUseQuery.concat([...extraRoutePath])
    }
    else {
      keyForUseQuery.push(extraRoutePath)
    }
  }
  if (query) {
    keyForUseQuery.push(query)
  }
  if (pathParams) {
    keyForUseQuery.push(pathParams)
  }

  const _route = restOptions.route ?? route
  const finalRoute = (_route as string).split("/")
    .map((part) => {
      if (part.startsWith(":")) {
        return restOptions.pathParams?.[part.substr(1)]
      }
      return part;
    })
    .join("/");

  type RES = RestResponseType<S, T>;
  return useQuery<RES>(keyForUseQuery, (params: any) => {
    return restGet(finalRoute as any, { ...restOptions, apiScope: (route as any).scope ?? "main" }) as Promise<RES>
  }, queryOptions as any);

}
