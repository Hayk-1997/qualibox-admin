import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';

type TInitialState = {
	user?: TUser;
	isLoading: boolean
};

const initialState: TInitialState = {
	user: null,
	isLoading: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
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

export default authSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state.auth.isLoading;
export const getUser = (state: AppState): TUser => state.auth.user;

export const login = (data: TLoginForm) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const requestBody = { ...data };
			const response = await ApiInstance.post('/login', requestBody);
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
			await ApiInstance.post('/logout');
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			tokenStorageUtils.remove();
			dispatch(setUser(null))
			dispatch(setLoading({ value: false }));
		}
	};
};
