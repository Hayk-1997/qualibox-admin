import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TCreateTagForm, TTag, TTagData, TUpdateTagForm } from "@/types/tag";

export const tagEndpoint = (builder: ApiEndpointBuilder) => ({
  getTags: builder.query<TTagData | null, unknown>({
    query: (query) => `tag/all?${query}`,
    providesTags: ["Tag"],
  }),
  getTagsSelections: builder.query<TTag[] | null, unknown>({
    query: () => `tag/all-selections`,
    providesTags: ["Tag"],
  }),
  removeTag: builder.mutation<number, null | unknown>({
    query: (id: number) => ({
      url: `tag/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Tag"],
  }),
  updateTag: builder.mutation<TTag | null, unknown>({
    query: (payload: TUpdateTagForm) => ({
      url: `tag/update/${payload.id}`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Tag"],
  }),
  createTag: builder.mutation<TTag | null, unknown>({
    query: (payload: TCreateTagForm) => ({
      url: `tag/create`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Tag"],
  }),
});
