import { TNonParentCategory, TParentCategory } from "@/types/category";
import { TSelectOptions } from "@/types/common";

export const bindParentCategoriesSelectOption = (
  categories: TParentCategory[],
): TSelectOptions[] => {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
};

export const bindNonParentCategoriesSelectOption = (
  categories: TNonParentCategory[],
) => {
  return categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
};
