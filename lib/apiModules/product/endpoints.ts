import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TCreateCabinetFormRequest } from "@/types/product";

export const productEndpoint = (builder: ApiEndpointBuilder) => ({
  getProducts: builder.query<never | null, string>({
    query: (query: string) => `product/all?${query}`,
    providesTags: ["Product"],
  }),
  createCabinet: builder.mutation({
    query: (payload: TCreateCabinetFormRequest) => {
      return {
        url: `product/create-cabinet`,
        method: "POST",
        body: payload,
      };
    },
    invalidatesTags: ["Product"],
  }),
});
