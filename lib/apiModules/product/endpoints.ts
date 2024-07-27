import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import {
  TCreateCabinetFormRequest,
  TUpdateCabinetFormRequest,
} from "@/types/product";

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
  updateCabinet: builder.mutation({
    query: (payload: TUpdateCabinetFormRequest) => {
      return {
        url: `product/update-cabinet/${payload.id}`,
        method: "POST",
        body: payload,
      };
    },
    invalidatesTags: ["Product"],
  }),
  removeProduct: builder.mutation({
    query: (id: number) => ({
      url: `product/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Product"],
  }),
  uploadProductFile: builder.mutation({
    query: (payload: number) => {
      const formData = new FormData();
      formData.append("file", payload.file);
      formData.append("materialId", payload.materialId);

      return {
        url: `product/${payload.productId}/upload-files`,
        method: "POST",
        body: formData,
      };
    },
    invalidatesTags: ["Product"],
  }),
  updateProductFileMaterial: builder.mutation({
    query: (payload: {
      productId: number;
      materialId: number;
      oldMaterialId: number;
    }) => ({
      url: `product/${payload.productId}/uploaded-file/${payload.materialId}`,
      method: "POST",
      body: { oldMaterialId: payload.oldMaterialId },
    }),
    invalidatesTags: ["Product"],
  }),
  removeProductFile: builder.mutation({
    query: (payload: { productId: number; uploadId: number }) => ({
      url: `product/${payload.productId}/upload-files/${payload.uploadId}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Product"],
  }),
});
