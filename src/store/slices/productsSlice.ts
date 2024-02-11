import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { productsSliceInitialState, IProductsSliceInitialState } from '@store/initialStates/productsSliceInitialState';
import { API_URLS, STORAGE_URL } from '@constants/api.constants';
import Methods from '@enums/api.enums';
import { IProduct } from '@types/product';
import IStandartFilters from '@interfaces/IStandartFilters';
import IStandartSorting from '@interfaces/IStandartSorting';
import { API_URL_ID_REGEX } from '@constants/common.constants';
import dayjs from 'dayjs';
import { mapFilters } from '@utils/common.utils';

export const sliceName = "products";
export const productsSlice = createSlice<IProductsSliceInitialState>({
	name: sliceName,
	initialState: productsSliceInitialState,
	reducers: {
		setLoading: (state: IProductsSliceInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setSaving: (state: IProductsSliceInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isSaving = value;
		},
		setProducts: (state: IProductsSliceInitialState, action: PayloadAction<{ data: IProduct[], total: number }>) => {
			const { data, total } = action.payload;
			state.data = data;
			state.total = total;
		},
		setProduct: (state: IProductsSliceInitialState, action: PayloadAction<{ data: IProduct }>) => {
			const { data } = action.payload;
			state.deepView.main = data;
		},
		setSorting: (state: IProductsSliceInitialState, action: PayloadAction<IProductsSliceInitialState["sorting"]>) => {
			state.sorting = action.payload;
		},
		setFilters: (state: IProductsSliceInitialState, action: PayloadAction<IProductsSliceInitialState["filters"]>) => {
			state.filters = action.payload;
		}
	},
});

export const { setLoading, setSaving, setProducts, setProduct, setSorting, setFilters } = productsSlice.actions;

export const productsSliceReducer = productsSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state[sliceName].isLoading;
export const getIsSaving = (state: AppState): boolean => state[sliceName].isSaving;
export const getProducts = (state: AppState): IProduct[] => state[sliceName].data;
export const getProduct = (state: AppState): IProduct => state[sliceName].deepView.main;
export const getTotal = (state: AppState): number => state[sliceName].total;
export const getFilters = (state: AppState): IStandartFilters => state[sliceName].filters;
export const getSorting = (state: AppState): IStandartSorting => state[sliceName].sorting;

export const reciveProducts = (...args) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IProductsSliceInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.PRODUCTS.ALL,
				method: Methods.Get,
				params: {
					...sliceState.sorting,
					...mapFilters(sliceState.filters)
				}
			});
			dispatch(setProducts(response.data))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const reciveProduct = (id: IProduct["id"]) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IProductsSliceInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.PRODUCTS.DEEP_VIEW.replace(API_URL_ID_REGEX, id),
				method: Methods.Get
			});
			const { data } = response as { data: IProduct }
			const mappedProducts = { ...data };
			dispatch(setProduct({ data: mappedProducts }));
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const createProduct = (newProduct: IProduct, onSuccess: null | ((product: IProduct) => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: IProduct }>({
				url: API_URLS.PRODUCTS.CREATE,
				method: Methods.Post,
				data: newProduct
			});
			if (typeof onSuccess === "function") {
				onSuccess(response.data)
			}
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const deleteProduct = (id: IProduct["id"], onSuccess: null | (() => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.PRODUCTS.DELETE.replace(API_URL_ID_REGEX, id),
				method: Methods.Delete,
				params: { id }
			});
			if (typeof onSuccess === "function") {
				onSuccess()
			}
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const saveProduct = (product: IProduct) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IProductsSliceInitialState;
		try {
			dispatch(setSaving({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.PRODUCTS.UPDATE.replace(API_URL_ID_REGEX, product.id),
				method: Methods.Post,
				data: product
			});
			const { data } = response;
			dispatch(setProduct({ data }))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setSaving({ value: false }));
		}
	};
}