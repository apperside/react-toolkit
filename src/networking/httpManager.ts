import { UseRestOptions } from './../hooks/useAppQuery';
import { ILocalStorage } from './../helpers/localStorageHelper';
import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";
import urljoin from "url-join";
import { ApiScope, RestApiRequestOptions, RoutesMapping } from ".";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type BaseHttpRequestOptions = {
  query?: { [key: string]: string };
  headers?: { [key: string]: string };
  method?: HttpMethod;
  isProtected?: boolean;
  extraRoutePath?: string | string[] | (string | number)[]
  cancelToken?: CancelTokenSource
}

export type HttpRequestOptions<P = any> = BaseHttpRequestOptions & {
  url: string;
  payload?: P;
  apiScope?: ApiScope;
}


export type CustomRequestHandler = (config: AxiosRequestConfig) => any | Promise<any>
export type CustomResponseHandler = (value: AxiosResponse) => any
export type CustomErrorHandler = (error: any, config: HttpRequestOptions) => any

const axiosInstance = axios.create({
  // baseURL: BASE_SERVER_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" }
});

let apiConfig: NetworkingConfig

type NetworkingConfig = {
  requestHandlers?: CustomRequestHandler[];
  responseHandlers?: CustomResponseHandler[];
  errorHandlers?: CustomErrorHandler[];
  localStorage?: ILocalStorage
  servers: {
    [key in ApiScope]: {
      protocol: string,
      port: number,
      serverAddress: string,
      baseUrl: string,
      headers?: { [key: string]: string }
    }
  },
  loggingEnabled?: boolean
}


export const initNetworking = (config: NetworkingConfig) => {
  apiConfig = config;
};


// simple request handler to log the requests with full config object
axiosInstance.interceptors.request.use(
  async config => {
    if (apiConfig.loggingEnabled) {
      console.log(`performing http ${config.method} to ${config.url} with options and token ${config.headers?.["Authorization"]} `, JSON.stringify(config.data), config);
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

async function httpRequest({
  apiScope = "main",
  isProtected = true,
  ...requestOptions
}: HttpRequestOptions) {
  const { method, url: requestUrl, payload } = requestOptions;
  let { headers = {} } = requestOptions;
  headers = { ...headers, ...apiConfig.servers[apiScope].headers }

  // whenever the url we are passing is a full url so we can also call arbitrary enpoints if needed
  const isFullUrl = requestUrl.toLowerCase().startsWith("http") || requestUrl.toLowerCase().startsWith("https");
  if (isProtected) {
    const token = localStorage.getItem("token")
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  const serverInfo = apiConfig.servers[apiScope];
  let finalUrl = requestUrl;
  if (!isFullUrl) {
    finalUrl = `${serverInfo.protocol}://${serverInfo.serverAddress}:${serverInfo.port}`;
    if (serverInfo.baseUrl) {
      finalUrl = urljoin(finalUrl, serverInfo.baseUrl);
    }
    finalUrl = urljoin(finalUrl, requestUrl);
    console.log("final url is", finalUrl);
  }

  try {
    console.log("req");
    const result = await axiosInstance.request({
      url: finalUrl,
      headers: headers,
      data: payload,
      method,
      cancelToken: requestOptions?.cancelToken?.token

    });
    if (apiConfig.loggingEnabled) {
      console.log(`request result for http ${method} to ${finalUrl}`, JSON.stringify(result.data));
    }
    apiConfig.responseHandlers?.forEach((fn) => {
      try {
        fn(result);
      } catch (err) {
        console.warn("error in handler", fn);
      }
    });
    return result.data;
  } catch (error: any) {
    console.error(`error in http request to ${finalUrl}`, {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      stack: error.stack
    });
    apiConfig.errorHandlers?.forEach((fn) => {
      try {
        fn(error, { ...requestOptions, apiScope });
      } catch (err) {
        console.warn("error in handler", fn);
      }
    });
    throw error;
  }
}

export async function httpGet<T>(requestOptions: HttpRequestOptions): Promise<T> {
  return httpRequest({ method: "GET", ...requestOptions });
}

export async function httpPost<T, P = any>(requestOptions: HttpRequestOptions<P>): Promise<T> {
  return httpRequest({ method: "POST", ...requestOptions });
}

export async function httpPut<T>(requestOptions: HttpRequestOptions): Promise<T> {
  return httpRequest({ method: "PUT", ...requestOptions });
}

export async function httpDelete<T>(requestOptions: HttpRequestOptions): Promise<T> {
  return httpRequest(requestOptions);
}

export async function patch<T>(requestOptions: HttpRequestOptions): Promise<T> {
  return httpRequest({ method: "PATCH", ...requestOptions });
}

export function apiRequest<S extends keyof RoutesMapping = "main", T extends keyof RoutesMapping[S] = keyof RoutesMapping[S]>
  (route: T | { scope: S, route: T }, restOptions: RestApiRequestOptions<S, T> & { pathParams?: { [key: string]: any } } = {}) {

  const _route = route
  const finalRoute = (_route as string).split("/")
    .map((part) => {
      if (part.startsWith(":")) {
        return restOptions.pathParams?.[part.substr(1)]
      }
      return part;
    })
    .join("/");

  return httpRequest({
    method: restOptions.method ?? "GET",
    url: finalRoute,
    apiScope: (route as any).scope ?? "main",
    headers: restOptions.headers,
    extraRoutePath: restOptions.extraRoutePath,
    cancelToken: restOptions.cancelToken,
    isProtected: restOptions.isProtected,
    payload: restOptions.payload,
    query: restOptions.query
  });

}