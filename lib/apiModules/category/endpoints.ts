import { TCategoriesData, TParentCategory } from "@/types/category";
import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";

export const categoryEndpoint = (builder: ApiEndpointBuilder) => ({
  getCategories: builder.query<TCategoriesData, string>({
    query: (query: string) => {
      return `category/all?${query}`;
    },
    providesTags: ["Category"],
  }),
  getParentCategories: builder.query<TParentCategory[], string>({
    query: () => {
      return `category/parents`;
    },
  }),
});
