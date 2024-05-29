import ApiInstance from "@/lib/axios";
import { TUserLoginForm } from "@/types/user";
import { AxiosError } from "axios";
import {
  setLoginRequest,
  setLoginRequestError,
  setLoginRequestSuccess,
  setUserRequest,
  setUserRequestError,
  setUserRequestSuccess,
} from "@/lib/features/authSlice";
import { AppDispatch } from "@/lib/store";

export const makeUserLoginRequest = (data: TUserLoginForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoginRequest());
      const response = await ApiInstance.post("login", {
        ...data,
      });
      dispatch(setLoginRequestSuccess(response.data));
    } catch (e: unknown) {
      dispatch(
        setLoginRequestError(
          (e as AxiosError).response!.data as { message: string },
        ),
      );
    }
  };
};

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
