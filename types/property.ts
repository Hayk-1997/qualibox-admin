type Property = {
  value: string;
  unitName: string;
  materialId?: number;
  referenceId: string;
  propertyUnit: number;
};

export type TStaticProperties = {
  width: Property;
  height: Property;
  depth: Property;
  price: Property;
  cost: Property;
  material: {
    id: number;
    name: string;
    parentMaterialId: number;
    parentMaterialName: string;
    path: string;
    price: number;
  };
};

export type TDynamicProperties = {
  depth: string;
  height: string;
  width: string;
  material: {
    id: number;
    name: string;
    parentMaterialId: number;
    parentMaterialName: string;
    path: string;
    price: number;
  };
};
