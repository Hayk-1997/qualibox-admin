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
