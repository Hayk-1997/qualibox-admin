import ApiInstance from "@/lib/axios";
import {
  setUserRequest,
  setUserRequestError,
  setUserRequestSuccess,
} from "@/lib/features/authSlice";
import { AppDispatch } from "@/lib/store";

export const makeUserRequest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUserRequest());
      const response = await ApiInstance.get("me");
      dispatch(setUserRequestSuccess(response.data));
    } catch (e: unknown) {
      dispatch(setUserRequestError());
    }
  };
};
