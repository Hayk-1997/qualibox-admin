import { createSlice } from "@reduxjs/toolkit";
import { TUserData } from "@/types/user";
import { setUserToken } from "@/helpers/auth";

type TInitialState = {
  user: null | TUserData;
  userLoading: boolean;

  errorMessage: string;

  userLogOutSuccess: boolean;
  userLogOutError: boolean;
};

const initialState: TInitialState = {
  user: null,
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
  },
});

export const { setUserRequest, setUserRequestSuccess, setUserRequestError } =
  authSlice.actions;

export default authSlice.reducer;
