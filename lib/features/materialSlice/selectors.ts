import { RootState } from "@/lib/store";

export const useSelectDeleteMaterialRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.material.deleteMaterialSuccess,
  error: state.material.deleteMaterialError,
});

export const useSelectCreateMaterialRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.material.createMaterialSuccess,
  error: state.material.createMaterialError,
});

export const useSelectUpdateMaterialRequest = (
  state: RootState,
): {
  success: boolean;
  error: boolean;
} => ({
  success: state.material.updateMaterialSuccess,
  error: state.material.updateMaterialError,
});
