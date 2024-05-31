import { createApi } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { createBaseApi } from "@/lib/apiModules/baseApi";
import { UnknownAction } from "redux";

export type CategoryEndpointBuilder = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    object,
    FetchBaseQueryMeta
  >,
  never,
  "api"
>;

export const categoryApi = createBaseApi((options) =>
  createApi({
    ...options,
    extractRehydrationInfo(action: UnknownAction, { reducerPath }) {
      if (action.type === REHYDRATE) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return action.payload[reducerPath];
      }
    },
  }),
);

export const { useGetCategoriesQuery } = categoryApi;
