export type TCategory = {
  id: number;
  name: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
};

export type TParentCategory = {
  id: number;
  parentId: number | null;
};

export type TCategoriesData = {
  data: TCategory[];
  total: number;
};

export type TUpdateCategoryForm = {
  name: string;
  parentId: number | null;
};

export type TCreateCategoryForm = TUpdateCategoryForm;
