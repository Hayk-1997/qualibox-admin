import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';
import authSlice from './slices/authSlice';
import materialsSlice from './slices/materialsSlice';

export const makeStore = () => {
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
export type AppGetState = typeof store.getState;

export default store;