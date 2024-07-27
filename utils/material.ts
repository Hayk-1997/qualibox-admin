import { TMaterial, TMaterialsData, TMaterialUploads } from "@/types/material";
import { TSelectOptions } from "@/types/common";

export const bindMaterialSelectOption = (
  materials: TMaterialsData[],
): TSelectOptions[] => {
  return materials.map((material) => ({
    value: material.id,
    label: material.name,
  }));
};

export const bindMaterialUploadsSelectOption = (
  materialUploads: TMaterialUploads[],
  parentMaterialIds: number[],
  parentMaterials: TMaterial[],
): TSelectOptions[] => {
  return materialUploads.reduce((acc, item) => {
    if (parentMaterialIds.includes(item.materialId)) {
      return [
        ...acc,
        {
          value: item.id,
          label: `<strong>${parentMaterials.find((parent) => parent.id === item.materialId)?.name ?? ""}</strong> ${item.name}`,
        },
      ];
    }
    return acc;
  }, []);
};
