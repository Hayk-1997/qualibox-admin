import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import {
  TUpdateStaticProductRequest,
  TUpdateDynamicProductRequest,
  TCreateStaticProductRequest,
  TCreateDynamicProductRequest,
} from "@/types/product";

export const productEndpoint = (builder: ApiEndpointBuilder) => ({
  getProducts: builder.query<never | null, string>({
    query: (query: string) => `product/all?${query}`,
    providesTags: ["Product"],
  }),
  createStaticProduct: builder.mutation({
    query: (payload: TCreateStaticProductRequest) => ({
      url: "product/create-static-product",
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Product"],
  }),
  updateStaticProduct: builder.mutation({
    query: (payload: TUpdateStaticProductRequest) => ({
      url: `product/update-static-product/${payload.id}`,
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Product"],
  }),
  createDynamicProduct: builder.mutation({
    query: (payload: TCreateDynamicProductRequest) => ({
      url: "product/create-dynamic-product",
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["Product"],
  }),
  updateDynamicProduct: builder.mutation({
    query: (payload: TUpdateDynamicProductRequest) => ({
      url: `product/update-dynamic-product/${payload.id}`,
      method: "POST",
      body: payload,
    }),
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
    query: (payload: { file: File; materialId: number; productId: number }) => {
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
