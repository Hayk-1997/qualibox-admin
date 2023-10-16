import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';
import authSlice from './slices/authSlice';

export const makeStore = (): ToolkitStore => {
	return configureStore({
		reducer: {
			auth: authSlice,
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;