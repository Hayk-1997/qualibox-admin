export type TCategory = {
  id: number;
  name: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
};

export type TParentCategory = {
  id: number;
  name: string;
};

export type TCategoriesData = {
  data: TCategory[];
  total: number;
};

export type TUpdateCategoryFormRequest = {
  name: string;
  parentId: number | null;
};

export type TCreateCategoryFormRequest = TUpdateCategoryFormRequest;
