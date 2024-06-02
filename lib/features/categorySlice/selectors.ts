import { RootState } from "@/lib/store";

export const useSelectDeleteCategoryRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.category.deleteCategorySuccess,
  error: state.category.deleteCategoryError,
});
