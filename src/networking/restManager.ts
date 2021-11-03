import { ApiScope, RestApiDeleteResponse, RestResponseType, RoutesMapping } from ".";
import apiUtils from "./apiUtils";
import {
  BaseHttpRequestOptions,
  httpDelete, httpGet,
  httpPost,
  httpPut
} from "./httpManager";
import { RestPayloadType } from './index';

export type RestApiRequestOptions<S extends ApiScope = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]> = {
  apiScope?: S
  payload?: RestPayloadType<S, T>
} & BaseHttpRequestOptions

export function restGet<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>(
  route: T,
  options?: RestApiRequestOptions<S, T>
): Promise<RestResponseType<S, T>> {
  const url = apiUtils.buildUrl(route as any, options)
  return httpGet({
    url,
    ...options
  });
}

export function restPost<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>(
  route: T,
  options?: RestApiRequestOptions<S, T>
): Promise<RestResponseType<S, T>> {
  const url = apiUtils.buildUrl(route as string, options)
  return httpPost({
    url,
    ...options
  });
}

export function restPut<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>(
  route: T,
  options?: RestApiRequestOptions<S, T>
): Promise<RestResponseType<S, T>> {
  const url = apiUtils.buildUrl(route as string, options)
  return httpPut({
    url,
    ...options
  });
}

export function restDelete<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>(
  route: T,
  options?: RestApiRequestOptions): Promise<RestApiDeleteResponse> {
  const url = apiUtils.buildUrl(route as string, options)
  return httpDelete({
    url,
    ...options
  });
}
