import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TOrderData, TUpdateOrderFormRequest } from "@/types/order";

export const orderEndpoint = (builder: ApiEndpointBuilder) => ({
  getOrders: builder.query<TOrderData | null, string>({
    query: (query: string) => `order/all?${query}`,
    providesTags: ["Order"],
  }),
  updateOrder: builder.mutation<number>({
    query: (payload: TUpdateOrderFormRequest) => {
      return {
        url: `order/${payload.id}/update`,
        method: "POST",
        body: payload,
      };
    },
    invalidatesTags: ["Order"],
  }),
});
