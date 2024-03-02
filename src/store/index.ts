import { configureStore } from '@reduxjs/toolkit';
import { authSliceReducer, sliceName as authSliceName } from './slices/authSlice';
import { materialsSliceReducer, sliceName as materialSliceName } from './slices/materialsSlice';
import { itemCategoriesSliceReducer, sliceName as itemCategoriesSliceName } from './slices/itemCategoriesSlice';
import { productsSliceReducer, sliceName as productsSliceName } from './slices/productsSlice';
import { faqsSliceReducer, sliceName as faqsSliceName } from './slices/faqsSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			[authSliceName]: authSliceReducer,
			[materialSliceName]: materialsSliceReducer,
			[itemCategoriesSliceName]: itemCategoriesSliceReducer,
			[productsSliceName]: productsSliceReducer,
			[faqsSliceName]: faqsSliceReducer
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;

export default store;