import { TParentCategory } from "@/types/category";
import { TSelectOptions } from "@/types/common";

export const bindParentCategoriesSelectOption = (
  categories: TParentCategory[],
): TSelectOptions[] => {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
};
