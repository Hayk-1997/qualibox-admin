import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';
import { authSliceReducer, sliceName as authSliceName } from './slices/authSlice';
import { materialsSliceReducer, sliceName as materialSliceName } from './slices/materialsSlice';
import { itemCategoriesSliceReducer, sliceName as itemCategoriesSliceName } from './slices/itemCategoriesSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			[authSliceName]: authSliceReducer,
			[materialSliceName]: materialsSliceReducer,
			[itemCategoriesSliceName]: itemCategoriesSliceReducer
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;

export default store;