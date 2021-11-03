import { MutationKey, useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { ApiScope, RestApiRequestOptions, RestApiRoute, RestPayloadType as RestPayloadType, restPost, RestResponseType as RestResponseType } from "../networking";

export type UseRestOptions = {
  pathParams?: { [key: string]: any }
  route?: string
} & Omit<RestApiRequestOptions, "apiScope">

/**
 * TODO: fix to use use-mutation from react-query
 */
export function useAppMutation<S extends ApiScope = "main", T extends RestApiRoute<S> = RestApiRoute<S>>(
  route: T | { scope: S, route: RestApiRoute<S> }, options: UseRestOptions = {
  },
  mutationOptions: UseMutationOptions = {}
) {
  const queryClient = useQueryClient();
  const keyForUseQuery: any = [route, { ...options.query }];
  const { extraRoutePath } = options
  if (extraRoutePath) {
    if (typeof extraRoutePath === "object") {
      keyForUseQuery.concat([...extraRoutePath])
    }
    else {
      keyForUseQuery.push(extraRoutePath)
    }
  }

  type RES = RestResponseType<S, T>;
  type PAY = RestPayloadType<S, T>

  return useMutation<RES, any, PAY & { pathParams?: { [key: string]: any } }>(keyForUseQuery as MutationKey, (params) => {
    console.log("options", options)
    console.log("params", params)
    const finalRoute = (route as string).split("/")
      .map((part) => {
        if (part.startsWith(":")) {
          if (options.pathParams?.[part.substr(1)])
            return options.pathParams?.[part.substr(1)]
          return (params.pathParams as any)?.[part.substr(1)]
        }
        return part;
      })
      .join("/");
    return restPost(finalRoute as any, { payload: params, apiScope: (route as any).scope ?? "main", ...options }) as Promise<RES>

  }, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    onSuccess: (data: any, variables: any, context: any) => {
      queryClient.invalidateQueries(keyForUseQuery);
      mutationOptions.onSuccess?.(data, variables, context)
      // return true;
    },
    ...mutationOptions,
  });

}

