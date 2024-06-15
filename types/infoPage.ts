export type TInfoPage = {
  id: number;
  name: string;
  type: string;
  content: string;
};

export type TInfoPagesData = {
  data: TInfoPage[];
  total: number;
};
