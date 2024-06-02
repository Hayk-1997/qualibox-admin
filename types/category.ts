export type TCategory = {
  id: number;
  name: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
};

export type TCategoriesData = {
  data: TCategory[];
  total: number;
};

export type TUpdateCategoryForm = {
  name: string;
  parentId: number;
};
