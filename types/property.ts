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
};
