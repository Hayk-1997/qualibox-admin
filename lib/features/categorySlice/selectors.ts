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

export const useSelectCreateCategoryRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.category.createCategorySuccess,
  error: state.category.createCategoryError,
});

export const useSelectUpdateCategoryRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.category.updateCategorySuccess,
  error: state.category.updateCategoryError,
});
