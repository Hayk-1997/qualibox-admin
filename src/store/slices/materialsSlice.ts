import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { materialsSliceInitialState, TMaterialsInitialState } from '@store/initialStates/materialsSliceInitialState';
import { API_URLS } from '@constants/api.constants';
import Methods from '@enums/api.enums';
import { TMaterial } from '@types/material';
import IStandartFilters from '@interfaces/IStandartFilters';
import IStandartSorting from '@interfaces/IStandartSorting';

export const sliceName = "materials";
export const materialsSlice = createSlice<TMaterialsInitialState>({
	name: sliceName,
	initialState: materialsSliceInitialState,
	reducers: {
		setLoading: (state, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setMaterials: (state, action: PayloadAction<{ data: TMaterial[] }>) => {
			const { data } = action.payload;
			state.data = data;
		}
	},
});

export const { setLoading, setMaterials } = materialsSlice.actions;

export default materialsSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state.materials.isLoading;
export const getMaterials = (state: AppState): TMaterial[] => state.materials.data;
export const getTotal = (state: AppState): number => state.materials.total;
export const getFilters = (state: AppState): IStandartFilters => state.materials.filters;
export const getSorting = (state: AppState): IStandartSorting => state.materials.sorting;

export const reciveMaterials = (...args) => {

	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as TMaterialsInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.ALL,
				method: Methods.Get,
				params: {
					...sliceState.filters,
					...sliceState.sorting,
				}
			});
			dispatch(setMaterials(response.data))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const createMaterial = (newMaterial: TMaterial, onSuccess: null | (() => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.CREATE,
				method: Methods.Post,
				data: newMaterial
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