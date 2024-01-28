import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { itemCategoriesSliceInitialState, IItemCategoriesInitialState } from '@store/initialStates/itemCategoriesSliceInitialState';
import { API_URLS, STORAGE_URL } from '@constants/api.constants';
import Methods from '@enums/api.enums';
import { IItemCategory } from '@types/itemCategories';
import IStandartFilters from '@interfaces/IStandartFilters';
import IStandartSorting from '@interfaces/IStandartSorting';
import { API_URL_ID_REGEX } from '@constants/common.constants';
import dayjs from 'dayjs';
import { mapFilers } from '@utils/common.utils';

export const sliceName = "itemCategories";
export const itemCategoriesSlice = createSlice<IItemCategoriesInitialState>({
	name: sliceName,
	initialState: itemCategoriesSliceInitialState,
	reducers: {
		setLoading: (state: IItemCategoriesInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setSaving: (state: IItemCategoriesInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isSaving = value;
		},
		setItemCategories: (state: IItemCategoriesInitialState, action: PayloadAction<{ data: IItemCategory[], total: number }>) => {
			const { data, total } = action.payload;
			state.data = data;
			state.total = total;
		},
		setItemCategory: (state: IItemCategoriesInitialState, action: PayloadAction<{ data: IItemCategory }>) => {
			const { data } = action.payload;
			state.deepView.main = data;
		},
		setSorting: (state: IItemCategoriesInitialState, action: PayloadAction<IItemCategoriesInitialState["sorting"]>) => {
			state.sorting = action.payload;
		},
		setFilters: (state: IItemCategoriesInitialState, action: PayloadAction<IItemCategoriesInitialState["filters"]>) => {
			state.filters = action.payload;
		}
	},
});

export const { setLoading, setSaving, setItemCategories, setItemCategory, setSorting, setFilters } = itemCategoriesSlice.actions;

export const itemCategoriesSliceReducer = itemCategoriesSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state[sliceName].isLoading;
export const getIsSaving = (state: AppState): boolean => state[sliceName].isSaving;
export const getItemCategories = (state: AppState): IItemCategory[] => state[sliceName].data;
export const getItemCategory = (state: AppState): IItemCategory => state[sliceName].deepView.main;
export const getTotal = (state: AppState): number => state[sliceName].total;
export const getFilters = (state: AppState): IStandartFilters => state[sliceName].filters;
export const getSorting = (state: AppState): IStandartSorting => state[sliceName].sorting;

export const reciveItemCategories = (...args) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IItemCategoriesInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.ITEM_CATEGORIES.ALL,
				method: Methods.Get,
				params: {
					...sliceState.sorting,
					...mapFilers(sliceState.filters)
				}
			});
			dispatch(setItemCategories(response.data))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const reciveItemCategory = (id: IItemCategory["id"]) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IItemCategoriesInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.ITEM_CATEGORIES.DEEP_VIEW.replace(API_URL_ID_REGEX, id),
				method: Methods.Get
			});
			const { data } = response as { data: IItemCategory }
			const mappedItemCategory = {
				...data,
				uploads: (
					data.uploads
						? data.uploads.map(upload => {
							return ({
								uid: upload.id,
								name: upload.path.split("/").at(-1),
								status: 'done',
								url: STORAGE_URL + upload.path.replace("storage", ""),
								thumbUrl: STORAGE_URL + upload.path.replace("storage", ""),
								size: upload.size,
								type: upload.type
							})
						})
						: []
				)
			}
			
			dispatch(setItemCategory({ data: mappedItemCategory }));
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const createItemCategory = (newItemCategory: IItemCategory, onSuccess: null | ((itemCategory: IItemCategory) => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: IItemCategory }>({
				url: API_URLS.ITEM_CATEGORIES.CREATE,
				method: Methods.Post,
				data: newItemCategory
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

export const deleteItemCategory = (id: IItemCategory["id"], onSuccess: null | (() => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.ITEM_CATEGORIES.DELETE.replace(API_URL_ID_REGEX, id),
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

export const saveItemCategory = (itemCategory: IItemCategory) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IItemCategoriesInitialState;
		try {
			dispatch(setSaving({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.ITEM_CATEGORIES.UPDATE.replace(API_URL_ID_REGEX, itemCategory.id),
				method: Methods.Post,
				data: itemCategory
			});
			const { data } = response;
			dispatch(setItemCategory({ data }))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setSaving({ value: false }));
		}
	};
}