import { TCategory } from "@/types/category";
import { TSelectOptions } from "@/types/common";

export const bindParentCategoriesSelectOption = (
  categories: TCategory[],
): TSelectOptions[] => {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
};
