import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { materialsSliceInitialState, TMaterialsInitialState } from '@store/initialStates/materialsSliceInitialState';
import { API_URLS, STORAGE_URL } from '@constants/api.constants';
import Methods from '@enums/api.enums';
import { TMaterial } from '@types/material';
import IStandartFilters from '@interfaces/IStandartFilters';
import IStandartSorting from '@interfaces/IStandartSorting';
import { API_URL_ID_REGEX } from '@constants/common.constants';
import dayjs from 'dayjs';
import { mapFilers } from '@utils/common.utils';

export const sliceName = "materials";
export const materialsSlice = createSlice<TMaterialsInitialState>({
	name: sliceName,
	initialState: materialsSliceInitialState,
	reducers: {
		setLoading: (state: TMaterialsInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setSaving: (state: TMaterialsInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isSaving = value;
		},
		setMaterials: (state: TMaterialsInitialState, action: PayloadAction<{ data: TMaterial[], total: number }>) => {
			const { data, total } = action.payload;
			state.data = data;
			state.total = total;
		},
		setMaterial: (state: TMaterialsInitialState, action: PayloadAction<{ data: TMaterial }>) => {
			const { data } = action.payload;
			state.deepView.main = data;
		},
		setSorting: (state: TMaterialsInitialState, action: PayloadAction<TMaterialsInitialState["sorting"]>) => {
			state.sorting = action.payload;
		},
		setFilters: (state: TMaterialsInitialState, action: PayloadAction<TMaterialsInitialState["filters"]>) => {
			state.filters = action.payload;
		}
	},
});

export const { setLoading, setSaving, setMaterials, setMaterial, setSorting, setFilters } = materialsSlice.actions;

export const materialsSliceReducer = materialsSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state.materials.isLoading;
export const getIsSaving = (state: AppState): boolean => state.materials.isSaving;
export const getMaterials = (state: AppState): TMaterial[] => state.materials.data;
export const getMaterial = (state: AppState): TMaterial => state.materials.deepView.main;
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
					...sliceState.sorting,
					...mapFilers(sliceState.filters)
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

export const reciveMaterial = (id: TMaterial["id"]) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as TMaterialsInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.DEEP_VIEW.replace(API_URL_ID_REGEX, id),
				method: Methods.Get
			});
			const { data } = response as { data: TMaterial }
			const mappedMaterial = {
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
			
			dispatch(setMaterial({ data: mappedMaterial }));
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const createMaterial = (newMaterial: TMaterial, onSuccess: null | ((material: TMaterial) => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: TMaterial }>({
				url: API_URLS.MATERIALS.CREATE,
				method: Methods.Post,
				data: newMaterial
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

export const deleteMaterial = (id: TMaterial["id"], onSuccess: null | (() => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.DELETE.replace(API_URL_ID_REGEX, id),
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

export const saveMaterial = (material: TMaterial) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as TMaterialsInitialState;
		try {
			dispatch(setSaving({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.UPDATE.replace(API_URL_ID_REGEX, material.id),
				method: Methods.Post,
				data: material
			});
			const { data } = response;
			dispatch(setMaterial({ data }))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setSaving({ value: false }));
		}
	};
}

export const uploadMaterialImage = (img) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const state = getState();
			const sliceState = state[sliceName] as TMaterialsInitialState;
			const formData = new FormData();
			formData.append("files[]", img);
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.UPLOAD_IMG.replace(API_URL_ID_REGEX, sliceState.deepView.main.id),
				method: Methods.Post,
				headers: {
					'Content-Type':'multipart/form-data'
				},
				data: formData
			});

			const { data: uploads } = response

			dispatch(
				setMaterial(
					{
						data: {
							...sliceState.deepView.main,
							uploads: (
								uploads
									? uploads.map(upload => {
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
					}
				)
			);

		} catch (e) {
			message.error("Error: " + e.message)
		}
	}
}

export const removeMaterialImage = (imgId) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const response = await ApiInstance({
				url: API_URLS.MATERIALS.REMOVE_IMG.replace(API_URL_ID_REGEX, imgId),
				method: Methods.Delete
			});
			if (response.status === 200) {
				const state = getState();
				const sliceState = state[sliceName] as TMaterialsInitialState;
				const filtered = sliceState.deepView.main.uploads.filter(upload => {
					return upload.uid !== imgId
				})
				dispatch(
					setMaterial(
						{
							data: {
								...sliceState.deepView.main,
								uploads: filtered
							}
						}
					)
				);
			}
			

		} catch (e) {
			message.error("Error: " + e.message)
		}
	}
}