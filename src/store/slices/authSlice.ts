import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { setUserToken } from '@helpers/auth';
import { message } from 'antd';

type TInitialState = {
	user?: TUser;
	isLoading: boolean
};

const initialState: TInitialState = {
	user: null as TUser,
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
		saveUserToken: (state, action: PayloadAction<{ token: string }>) => {
			const { token } = action.payload;
			setUserToken(token);
		},
		setUser: (state, action: PayloadAction<{ email: string }>) => {
			state.user = { ...action.payload } as TUser;
		}
	},
});

export const {
	setLoading,
	saveUserToken,
	setUser
} = authSlice.actions;

export default authSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state.auth.isLoading;
export const getUser = (state: AppState): boolean => state.auth.user;
export const login = (data: TLoginForm) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading(true));
			const requestBody = { ...data };
			const response = await ApiInstance.post('/login', requestBody);
			dispatch(saveUserToken(response.data));
			delete requestBody.password;
			dispatch(setUser(requestBody));
		} catch (e) {
			message.error("Error: ", e.message)
		} finally {
			dispatch(setLoading(false));
		}
	};
};
