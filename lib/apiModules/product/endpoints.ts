import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";

export const productEndpoint = (builder: ApiEndpointBuilder) => ({
  getProducts: builder.query<never | null, string>({
    query: (query: string) => `product/all?${query}`,
    providesTags: ["Product"],
  }),
});
