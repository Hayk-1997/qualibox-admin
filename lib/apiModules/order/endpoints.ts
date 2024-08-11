import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import {
  TOrderData,
  TSoldProductsChart,
  TUpdateOrderFormRequest,
} from "@/types/order";

export const orderEndpoint = (builder: ApiEndpointBuilder) => ({
  getOrders: builder.query<TOrderData | null, unknown>({
    query: (query: string) => `order/all?${query}`,
    providesTags: ["Order"],
  }),
  updateOrder: builder.mutation<number, unknown>({
    query: (payload: TUpdateOrderFormRequest) => ({
      url: `order/${payload.id}/update`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Order"],
  }),
  getAllOrdersSalesCount: builder.query<number | null, unknown>({
    query: () => `order/get-all-sales-count`,
  }),
  getAllCustomersCount: builder.query<number | null, unknown>({
    query: () => `order/get-all-customers-count`,
  }),
  getSoldProductsChart: builder.query<TSoldProductsChart[] | null, unknown>({
    query: (params) => ({
      url: "order/get-sold-products-chart",
      method: "GET",
      params,
    }),
  }),
});
