import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { authSliceInitialState } from '@store/initialStates/authSliceInitialState';
import { API_URLS } from '@constants/api.constants';
import Methods from '@enums/api.enums';

export const sliceName = "auth"
export const authSlice = createSlice({
	name: sliceName,
	initialState: authSliceInitialState,
	reducers: {
		setLoading: (state, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setUser: (state, action: PayloadAction<TUser | null>) => {
			state.user = action.payload;
		}
	},
});

export const { setLoading, setUser } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state[sliceName].isLoading;
export const getUser = (state: AppState): TUser => state[sliceName].user;

export const login = (data: TLoginForm) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const requestBody = { ...data };
			const response = await ApiInstance({
				url: API_URLS.AUTH.LOGIN,
				method: Methods.Post,
				data: requestBody
			});
			const { token, refreshToken } = response.data;
			tokenStorageUtils.set({ token, refreshToken })
			delete requestBody.password;
			dispatch(setUser(requestBody));
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const logout = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			await ApiInstance({
				url: API_URLS.AUTH.LOGOUT,
				method: Methods.Post
			});
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			tokenStorageUtils.remove();
			dispatch(setUser(null))
			dispatch(setLoading({ value: false }));
		}
	};
};
