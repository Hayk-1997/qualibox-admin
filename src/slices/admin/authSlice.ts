import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TUser, TUserLogin } from '../../type/web/auth';
import { setUserToken } from '../../helpers/auth';

type TInitialState = {
  user: TUser;
  loginSuccess: boolean;
  loginError: boolean;
};

const initialState: TInitialState = {
  user: {} as TUser,
  loginSuccess: false,
  loginError: false,
};

export const adminAuthSlice = createSlice({
  name: 'admin/auth',
  initialState,
  reducers: {
    setAdminLoginRequest: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
    setAdminLoginRequestSuccess: (
      state,
      action: { payload: { token: string; user: TUser } }
    ) => {
      const { token, user } = action.payload;
      setUserToken(token);
      state.user = user;
      state.loginSuccess = true;
      state.loginError = false;
    },
    setAdminLoginRequestError: (state) => {
      state.loginSuccess = false;
      state.loginError = true;
    },
    clearAdminLoginRequestStatus: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
  },
});

export const {
  setAdminLoginRequest,
  setAdminLoginRequestSuccess,
  setAdminLoginRequestError,
  clearAdminLoginRequestStatus,
} = adminAuthSlice.actions;

export default adminAuthSlice.reducer;

export const useSelectAdminLoginSuccess = (state: AppState): boolean =>
  state.adminAuth.loginSuccess;

export const useSelectAdminLoginError = (state: AppState): boolean =>
  state.adminAuth.loginError;

export const adminLoginRequest = (data: TUserLogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setAdminLoginRequest());
      const response = await ApiInstance.post('auth/admin-login', {
        ...data,
      });
      dispatch(setAdminLoginRequestSuccess(response.data));
    } catch (e) {
      dispatch(setAdminLoginRequestError());
    }
  };
};
