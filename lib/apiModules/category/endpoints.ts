import {
  TCategoriesData,
  TCreateCategoryFormRequest,
  TNonParentCategory,
  TParentCategory,
  TUpdateCategoryFormRequest,
} from "@/types/category";
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
    providesTags: ["ParentCategory"],
  }),
  deleteCategory: builder.mutation({
    query: (id: number) => ({
      url: `category/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Category", "ParentCategory"],
  }),
  updateCategory: builder.mutation({
    query: (payload: TUpdateCategoryFormRequest) => ({
      url: `category/${payload.id}/update`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Category", "ParentCategory"],
  }),
  createCategory: builder.mutation({
    query: (payload: TCreateCategoryFormRequest) => ({
      url: `category/create`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Category", "ParentCategory"],
  }),
  getNonParentCategories: builder.query<TNonParentCategory[], string>({
    query: () => {
      return `category/non-parents`;
    },
    providesTags: ["Category"],
  }),
});
