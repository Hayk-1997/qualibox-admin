import { TCategory } from "@/types/category";
import { TSelectOptions } from "@/types/common";

export const bindParentCategoriesSelectOption = (
  categories: TCategory[],
): TSelectOptions[] => {
  return categories.reduce((acc, item) => {
    if (!item.parentId) {
      return [
        ...acc,
        {
          label: item.name,
          value: item.id,
        },
      ];
    }
    return acc;
  }, []);
};
