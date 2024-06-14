import { RootState } from "@/lib/store";
import { TUserData } from "@/types/user";

export const useSelectUser = (
  state: RootState,
): {
  user: TUserData | null;
  userLoading: boolean;
} => ({
  user: state.auth.user,
  userLoading: state.auth.userLoading,
});
