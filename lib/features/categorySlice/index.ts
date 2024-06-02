import { createSlice } from "@reduxjs/toolkit";
import { TCategoriesData } from "@/types/category";

type TInitialState = {
  categories: TCategoriesData | null;
  categoriesRequestLoading: boolean;

  deleteCategorySuccess: boolean;
  deleteCategoryError: boolean;
};

const initialState: TInitialState = {
  categories: null,
  categoriesRequestLoading: false,

  deleteCategorySuccess: false,
  deleteCategoryError: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setUpdateCategoryRequest: (state) => {
      state.updateCategorySuccess = false;
      state.updateCategoryError = false;
    },
    setUpdateCategoryRequestSuccess: (state) => {
      state.updateCategorySuccess = true;
      state.updateCategoryError = false;
    },
    setUpdateCategoryError: (state) => {
      state.updateCategorySuccess = false;
      state.updateCategoryError = true;
    },
    setDeleteCategoryRequest: (state) => {
      state.deleteCategorySuccess = false;
      state.deleteCategoryError = false;
    },
    setDeleteCategoryRequestSuccess: (state) => {
      state.deleteCategorySuccess = true;
      state.deleteCategoryError = false;
    },
    setDeleteCategoryRequestError: (state) => {
      state.deleteCategorySuccess = false;
      state.deleteCategoryError = true;
    },
  },
});

export const {
  setUpdateCategoryRequest,
  setUpdateCategoryRequestSuccess,
  setUpdateCategoryError,

  setDeleteCategoryRequest,
  setDeleteCategoryRequestSuccess,
  setDeleteCategoryRequestError,
} = categorySlice.actions;

export default categorySlice.reducer;
