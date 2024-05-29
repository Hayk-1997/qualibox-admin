import { RootState } from "@/lib/store";
import { TUserData } from "@/types/user";

export const useSelectUserLogin = (
  state: RootState,
): { success: boolean; error: boolean; errorMessage: string } => ({
  success: state.auth.loginRequestSuccess,
  error: state.auth.loginRequestError,
  errorMessage: state.auth.errorMessage,
});

export const useSelectUser = (
  state: RootState,
): {
  user: TUserData | null;
  userLoading: boolean;
} => ({
  user: state.auth.user,
  userLoading: state.auth.userLoading,
});
