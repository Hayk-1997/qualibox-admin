import {
  TCreateMaterialFormRequest,
  TCreateMaterialUploadFormRequest,
  TMaterialsData,
  TUpdateMaterialFormRequest,
} from "@/types/material";
import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";

export const materialEndpoint = (builder: ApiEndpointBuilder) => ({
  getMaterials: builder.query<TMaterialsData | null, string>({
    query: (query: string) => `material/all?${query}`,
    providesTags: ["Material"],
  }),
  removeMaterial: builder.mutation({
    query: (id: number) => ({
      url: `material/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Material"],
  }),
  createMaterial: builder.mutation({
    query: (payload: TCreateMaterialFormRequest) => {
      return {
        url: `material/create`,
        method: "POST",
        body: payload,
      };
    },
    invalidatesTags: ["Material"],
  }),
  updateMaterial: builder.mutation({
    query: (payload: TUpdateMaterialFormRequest) => {
      return {
        url: `material/${payload.id}/update`,
        method: "POST",
        body: payload,
      };
    },
    invalidatesTags: ["Material"],
  }),
  removeMaterialUpload: builder.mutation({
    query: (id: number) => ({
      url: `material/upload-files/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Material"],
  }),
  createMaterialUpload: builder.mutation({
    query: (payload: TCreateMaterialUploadFormRequest) => {
      const formData = new FormData();
      formData.append("file", payload.file);
      formData.append("name", payload.name);
      formData.append("description", payload.description);
      formData.append("materialId", payload.materialId);

      return {
        url: `material/${payload.materialId}/upload-files`,
        method: "POST",
        body: formData,
      };
    },
    invalidatesTags: ["Material"],
  }),
});
