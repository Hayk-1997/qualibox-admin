import { createApi } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import { createBaseApi } from "@/lib/apiModules/baseApi";
import { UnknownAction } from "redux";

export const orderApi = createBaseApi((options) =>
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

export const { useGetOrdersQuery } = orderApi;
