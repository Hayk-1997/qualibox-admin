import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TOrderData } from "@/types/order";

export const orderEndpoint = (builder: ApiEndpointBuilder) => ({
  getOrders: builder.query<TOrderData | null, string>({
    query: () => `order/all`,
    providesTags: ["Order"],
  }),
  updateOrder: builder.mutation({
    query: (payload: { type: string; content: string }) => {
      return {
        url: `static-page/${payload.type}/update`,
        method: "POST",
        body: { content: payload.content },
      };
    },
    invalidatesTags: ["updateOrder"],
  }),
});
