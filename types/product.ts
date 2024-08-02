export type TProductUploads = {
  materialId: number;
  files: {
    id: number;
    uploadId: number;
    name: string;
    path: string;
  }[];
};

export type TStaticProduct = {
  categoryIds: number[];
  materialIds: number[];
  id: number;
  name: string;
  price: number;
  cost: number | null;
  description: string | null;
  isDynamicSize: boolean;
  hasDepth: boolean;
  uploads: TProductUploads[];
  createdAt: string;
  updatedAt: string;
};

export type TDynamicProduct = {
  id: number;
  name: string;
  categoryIds: number[];
  materialIds: number[];
  isDynamicSize: boolean;
  hasDepth: boolean;
  description: string | null;
  price: number;
  cost: number | null;
  createdAt: string;
  updatedAt: string;
  properties: TDynamicProductProperties[];
};

export type TCreateStaticProductForm = {
  name: string;
  categoryIds: number;
  properties: TStaticProductProperties[];
};

export type TCreateStaticProductRequest = {
  name: string;
  categoryIds: number[];
  properties: TStaticProductProperties[];
};

export type TUpdateStaticProductForm = {
  id: number;
} & TUpdateStaticProductRequest;

export type TUpdateStaticProductRequest = {
  id: number;
  name: string;
  categoryIds: number;
  hasDepth: boolean;
  isDynamicSize: boolean;
  properties: TStaticProductProperties[];
};

export type TCreateDynamicProductForm = {
  name: string;
  categoryIds: string;
  hasDepth: boolean;
  isDynamicSize: boolean;
  materialIds: string[];
  properties: TDynamicProductProperties[];
};

export type TCreateDynamicProductRequest = {
  name: string;
  categoryIds: number[];
  materialIds: number[];
  hasDepth: boolean;
  isDynamicSize: boolean;
  properties: TDynamicProductProperties[];
};

export type TUpdateDynamicProductRequest = {
  id: number;
} & TCreateDynamicProductForm;

export type TUpdateDynamicProductForm = {
  id: number;
  name: string;
  categoryIds: number[];
  materialIds: number[];
  properties: TDynamicProductProperties[];
  hasDepth: boolean;
  isDynamicSize: boolean;
};

export type TDynamicProductProperties = {
  minWidth: string;
  maxWidth: string;
  minHeight: string;
  maxHeight: string;
  minDepth: string;
  maxDepth: string;
  referenceId: string;
};

export type TStaticProductProperties = {
  width: string;
  height: string;
  depth: string;
  price: string;
  cost: string;
  referenceId: string;
  materialId: string;
};
