import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../store';
import ApiInstance from '../services/axios';
import { TAdminLoginForm, TAdmin } from '../types/auth/admin';
import { setUserToken } from '../helpers/auth';

type TInitialState = {
  admin: TAdmin;
  loginSuccess: boolean;
  loginError: boolean;
  loading: boolean;
};

const initialState: TInitialState = {
  admin: {} as TAdmin,
  loginSuccess: false,
  loginError: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdminLoginRequest: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
    setAdminLoginRequestSuccess: (
      state,
      action: { payload: { token: string; admin: TAdmin } }
    ) => {
      const { token, admin } = action.payload;
      setUserToken(token);
      state.admin = admin;
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
} = authSlice.actions;

export default authSlice.reducer;

export const useSelectLoginSuccess = (state: AppState): boolean =>
  state.adminAuth.loginSuccess;

export const useSelectLoginError = (state: AppState): boolean =>
  state.adminAuth.loginError;

export const adminLoginRequest = (data: TAdminLoginForm) => {
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
