import { CategoryEndpointBuilder } from "@/lib/apiModules/category/api";
import { TCategoriesData, TParentCategory } from "@/types/category";

export const categoryEndpoint = (builder: CategoryEndpointBuilder) => ({
  getCategories: builder.query<TCategoriesData, string>({
    query: (query: string) => {
      return `category/all?${query}`;
    },
  }),
  getParentCategories: builder.query<TParentCategory[], string>({
    query: () => {
      return `category/parents`;
    },
  }),
});
