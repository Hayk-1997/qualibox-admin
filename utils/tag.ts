import { TSelectOptions } from "@/types/common";
import { TTag } from "@/types/tag";

export const bindTagSelectOption = (tags: TTag[]): TSelectOptions[] => {
  return tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));
};
