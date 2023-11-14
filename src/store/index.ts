import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';
import authSlice from './slices/authSlice';
import materialsSlice from './slices/materialsSlice';

export const makeStore = (): ToolkitStore => {
	return configureStore({
		reducer: {
			auth: authSlice,
			materials: materialsSlice,
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = () => AppState;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;