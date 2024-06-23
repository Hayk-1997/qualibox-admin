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
