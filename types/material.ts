import { TUpload } from "@/types/upload";

export interface TMaterial {
  id: number;
  price: number;
  cost: number;
  name: string;
  uploads: TMaterialUpload[];
  createdAt: string;
  updatedAt: string;
}

export type TMaterialUpload = {
  name: string;
  description: string | null;
} & TUpload;

export type TMaterialsData = {
  data: TMaterial[];
  total: number;
};

export type TMaterialUploads = {
  id: number;
  name: string;
  description: string | null;
  materialId: number;
  uploadId: number;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type TMaterialUploadsData = {
  data: TMaterialUploads[];
  total: number;
};

export type TUpdateMaterialForm = {
  name: string;
  price: string;
  cost: string;
};

export type TCreateMaterialFormRequest = TUpdateMaterialForm;

export type TUpdateMaterialFormRequest = {
  id: number;
} & TCreateMaterialFormRequest;

export type TCreateMaterialUploadFormRequest = {
  name: string;
  description: string;
  file: File;
  materialId: number;
};
