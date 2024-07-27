export type TProductUploads = {
  materialId: number;
  files: {
    id: number;
    uploadId: number;
    name: string;
    path: string;
  }[];
};

export type TCabinet = {
  categoryIds: number[];
  materialIds: number[];
  id: number;
  name: string;
  price: number;
  cost: number | null;
  isDynamicSize: boolean;
  description: string | null;
  hasMaterials: boolean;
  hasDepth: boolean;
  uploads: TProductUploads[];
  createdAt: string;
  updatedAt: string;
};

export type TUpdateCabinetFormRequest = {
  categoryIds: string;
  properties: TCabinetProperties[];
} & TCabinet;

export type TCreateCabinetFormSchema = {
  name: string;
  categoryIds: string;
  properties: TCabinetProperties[];
};

export type TCreateCabinetFormRequest = {
  name: string;
  categoryIds: Array<number>;
  properties: TCabinetProperties[];
};

export type TCabinetProperties = {
  width: string;
  height: string;
  depth: string;
  price: string;
  cost: string;
  referenceId: string;
  materialId: string;
};
