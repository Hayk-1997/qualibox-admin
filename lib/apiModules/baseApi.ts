import { ApiModules, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { categoryEndpoint } from "@/lib/apiModules/category/endpoints";
import { materialEndpoint } from "@/lib/apiModules/material/endpoints";
import { getUserToken } from "@/helpers/auth";

type ModuleName = keyof ApiModules<never, never, never, never>;

// Create base API for other endpoints for example` {productApi}
export const createBaseApi = <T extends ModuleName>(createApi: CreateApi<T>) =>
  createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
      prepareHeaders: (headers) => {
        const token = getUserToken();

        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
      },
    }),
    endpoints: (builder) => ({
      ...categoryEndpoint(builder),
      ...materialEndpoint(builder),
    }),
  });
