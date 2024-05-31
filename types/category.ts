export type TCategory = {
  id: number;
  name: string;
  parent_id: number | null;
  createdAt: string;
  updatedAt: string;
};

export type TCategoriesData = {
  data: TCategory[];
  total: number;
};