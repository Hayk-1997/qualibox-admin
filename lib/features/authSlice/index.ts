import { createSlice } from "@reduxjs/toolkit";
import { TUserData } from "@/types/user";
import { setUserToken } from "@/helpers/auth";

type TInitialState = {
  user: null | TUserData;
  userLoading: boolean;

  loginRequestSuccess: boolean;
  loginRequestError: boolean;
  errorMessage: string;

  userLogOutSuccess: boolean;
  userLogOutError: boolean;
};

const initialState: TInitialState = {
  user: null,
  loginRequestSuccess: false,
  loginRequestError: false,
  errorMessage: "",

  userLoading: true,
  userLogOutSuccess: false,
  userLogOutError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRequest: (state) => {
      state.userLoading = true;
    },
    setUserRequestSuccess: (state, action: { payload: TUserData | null }) => {
      state.user = action.payload;
      state.userLoading = false;
    },
    setUserRequestError: (state) => {
      state.user = null;
      state.userLoading = false;
    },
    setLoginRequest: (state) => {
      state.loginRequestSuccess = false;
      state.loginRequestError = false;
      state.errorMessage = "";
    },
    setLoginRequestSuccess: (
      state,
      action: { payload: { user: TUserData; token: string } },
    ) => {
      const { token, user } = action.payload;
      setUserToken(token);
      state.user = user;
      state.loginRequestSuccess = true;
      state.loginRequestError = false;
    },
    setLoginRequestError: (state, action: { payload: { message: string } }) => {
      state.user = null;
      state.loginRequestSuccess = false;
      state.loginRequestError = true;
      state.errorMessage = action.payload.message;
    },
  },
});

export const {
  setLoginRequest,
  setLoginRequestSuccess,
  setLoginRequestError,

  setUserRequest,
  setUserRequestSuccess,
  setUserRequestError,
} = authSlice.actions;

export default authSlice.reducer;
