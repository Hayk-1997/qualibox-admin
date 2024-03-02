import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState, AppState } from '@store';
import ApiInstance from '@services/axios';
import { TLoginForm, TUser } from '@types/auth';
import { message } from 'antd';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { IFAQsInitialState, faqsSliceInitialState } from '@store/initialStates/faqsSliceInitialState';
import { API_URLS, STORAGE_URL } from '@constants/api.constants';
import Methods from '@enums/api.enums';
import { IFAQ, IFAQContent, IFAQContent } from '@types/FAQ';
import IStandartFilters from '@interfaces/IStandartFilters';
import IStandartSorting from '@interfaces/IStandartSorting';
import { API_URL_ID_REGEX } from '@constants/common.constants';
import dayjs from 'dayjs';
import { mapFilters } from '@utils/common.utils';

export const sliceName = "FAQ";
export const faqsSlice = createSlice<IFAQsInitialState>({
	name: sliceName,
	initialState: faqsSliceInitialState,
	reducers: {
		setLoading: (state: IFAQsInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isLoading = value;
		},
		setSaving: (state: IFAQsInitialState, action: PayloadAction<{ value: boolean }>) => {
			const { value } = action.payload;
			state.isSaving = value;
		},
		setFAQs: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQ[], total: number }>) => {
			const { data, total } = action.payload;
			state.data = data;
			state.total = total;
		},
		setFAQ: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQ }>) => {
			const { data } = action.payload;
			state.deepView.main = data;
		},
		updateFAQ: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQ }>) => {
			const { data } = action.payload;
			state.deepView.main = { ...state.deepView.main, ...data };
		},
		addFAQContent: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQContent }>) => {
			const { data } = action.payload;
			state.deepView.main = {
				...state.deepView.main,
				contents: [
					...state.deepView.main.contents,
					data
				]
			};
		},
		updateFAQContent: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQContent }>) => {
			const { data } = action.payload;
			state.deepView.main = {
				...state.deepView.main,
				contents: state.deepView.main.contents.map(content => {
					if (content.id === data.id) {
						return { ...content, ...data }
					}

					return content
				})
			};
		},
		removeFAQContent: (state: IFAQsInitialState, action: PayloadAction<{ data: IFAQContent["id"] }>) => {
			const { data } = action.payload;
			state.deepView.main = {
				...state.deepView.main,
				contents: state.deepView.main.contents.filter(content => {
					return content.id !== data
				})
			};
		},
		setSorting: (state: IFAQsInitialState, action: PayloadAction<IFAQsInitialState["sorting"]>) => {
			state.sorting = action.payload;
		},
		setFilters: (state: IFAQsInitialState, action: PayloadAction<IFAQsInitialState["filters"]>) => {
			state.filters = action.payload;
		}
	}
});

export const { setLoading, setSaving, setFAQs, setFAQ, updateFAQ, addFAQContent, updateFAQContent, removeFAQContent, setSorting, setFilters } = faqsSlice.actions;

export const faqsSliceReducer = faqsSlice.reducer;

export const getIsLoading = (state: AppState): boolean => state[sliceName].isLoading;
export const getIsSaving = (state: AppState): boolean => state[sliceName].isSaving;
export const getFAQs = (state: AppState): IFAQ[] => state[sliceName].data;
export const getFAQ = (state: AppState): IFAQ => state[sliceName].deepView.main;
export const getTotal = (state: AppState): number => state[sliceName].total;
export const getFilters = (state: AppState): IStandartFilters => state[sliceName].filters;
export const getSorting = (state: AppState): IStandartSorting => state[sliceName].sorting;

export const reciveFAQs = (...args) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IFAQsInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.FAQS.ALL,
				method: Methods.Get,
				params: {
					...sliceState.sorting,
					...mapFilters(sliceState.filters)
				}
			});
			const { data, total } = response.data;
			dispatch(setFAQs({ data, total }))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const reciveFAQ = (id: IFAQ["id"]) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IFAQsInitialState;
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.FAQS.DEEP_VIEW.replace(API_URL_ID_REGEX, id),
				method: Methods.Get
			});
			const { data } = response as { data: IFAQ }
			const mappedFAQ = { ...data }
			dispatch(setFAQ({ data: mappedFAQ }));
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const createFAQ = (newFAQ: IFAQ, onSuccess: null | ((faq: IFAQ) => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: IFAQ }>({
				url: API_URLS.FAQS.CREATE_HEADER,
				method: Methods.Post,
				data: newFAQ
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

export const deleteFAQ = (id: IFAQ["id"], onSuccess: null | (() => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.FAQS.DELETE.replace(API_URL_ID_REGEX, id),
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

export const saveFAQHeader = (faq: IFAQ) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		const state = getState();
		const sliceState = state[sliceName] as IFAQsInitialState;
		try {
			dispatch(setSaving({ value: true }));
			const response = await ApiInstance({
				url: API_URLS.FAQS.UPDATE_HEADER.replace(API_URL_ID_REGEX, faq.id),
				method: Methods.Post,
				data: { header: faq.header }
			});
			const { data } = response;
			dispatch(updateFAQ({ data }))
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setSaving({ value: false }));
		}
	};
}

export const createFAQContent = (newFAQContent: IFAQContent, onSuccess: null | ((faqContent: IFAQContent) => void)) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: IFAQContent }>({
				url: API_URLS.FAQS.CREATE_CONTENT,
				method: Methods.Post,
				data: newFAQContent
			});
			const { data } = response;
			dispatch(addFAQContent({ data }))
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

export const updateFAQContents = (newFAQContents: IFAQContent[]) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));

			console.log("newFAQContents: ", newFAQContents);
			

			const settledResponses = await Promise.allSettled(
				newFAQContents.map(newFAQContent => {
					return ApiInstance<{ data: IFAQContent }>({
						url: API_URLS.FAQS.UPDATE_CONTENT.replace(API_URL_ID_REGEX, newFAQContent.id),
						method: Methods.Post,
						data: { ...newFAQContent }
					})
				})
			)

			// console.log(settledResponses);

			// settledResponses.forEach(settledResponse => {
			// 	if (settledResponse.status === "rejected") {
			// 		return
			// 	}

			// 	const { data } =  settledResponse.value;

			// 	dispatch(updateFAQContent({ data }))
			// })

			
			
			
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};

export const deleteFAQContent = (id: IFAQContent["id"]) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading({ value: true }));
			const response = await ApiInstance<{ data: IFAQContent }>({
				url: API_URLS.FAQS.DELETE_CONTENT.replace(API_URL_ID_REGEX, id),
				method: Methods.Delete
			});

			dispatch(removeFAQContent({ data: id }))
		
		} catch (e) {
			message.error("Error: " + e.message)
		} finally {
			dispatch(setLoading({ value: false }));
		}
	};
};