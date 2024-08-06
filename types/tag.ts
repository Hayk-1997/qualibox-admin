export type TTag = {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type TTagData = {
  data: TTag[];
  total: number;
};

export type TUpdateTagForm = {
  id: number;
  name: string;
  color: string;
};

export type TCreateTagForm = {
  name: string;
  color: string;
};
