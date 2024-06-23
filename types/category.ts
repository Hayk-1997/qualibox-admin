import { TUserLoginFormRequest } from "@/types/user";

export type TCategory = {
  id: number;
  name: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
};

export type TNonParentCategory = {
  id: number;
  name: string;
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

export type TCreateCategoryFormRequest = Pick<
  TUserLoginFormRequest,
  "name" | "parentId"
>;

export type TUpdateCategoryFormRequest = {
  id: number;
  name: string;
  parentId: number | null;
};
