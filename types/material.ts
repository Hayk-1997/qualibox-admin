export interface TMaterial {
  id: number;
  price: number;
  cost: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type TMaterialsData = {
  data: TMaterial[];
  total: number;
};

export type TUpdateMaterialForm = {
  name: string;
  price: string;
  cost: string;
};

export type TCreateMaterialForm = TUpdateMaterialForm;

export type TUpdateMaterialFormRequest = {
  id: number;
} & TUpdateMaterialForm;
