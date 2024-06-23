import { TMaterialsData } from "@/types/material";
import { TSelectOptions } from "@/types/common";

export const bindMaterialSelectOption = (
  materials: TMaterialsData[],
): TSelectOptions[] => {
  return materials.map((material) => ({
    value: material.id,
    label: material.name,
  }));
};
