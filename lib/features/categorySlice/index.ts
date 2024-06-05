import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  deleteCategorySuccess: boolean;
  deleteCategoryError: boolean;

  updateCategorySuccess: boolean;
  updateCategoryError: boolean;

  createCategorySuccess: boolean;
  createCategoryError: boolean;
};

const initialState: TInitialState = {
  updateCategorySuccess: false,
  updateCategoryError: false,

  deleteCategorySuccess: false,
  deleteCategoryError: false,

  createCategorySuccess: false,
  createCategoryError: false,
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
    setCreateCategoryRequest: (state) => {
      state.createCategorySuccess = false;
      state.createCategoryError = false;
    },
    setCreateCategoryRequestSuccess: (state) => {
      state.createCategorySuccess = true;
      state.createCategoryError = false;
    },
    setCreateCategoryRequestError: (state) => {
      state.createCategorySuccess = false;
      state.createCategoryError = true;
    },
    setRevalidateCategorySlice: (state) => {
      state.deleteCategorySuccess = false;
      state.deleteCategoryError = false;
      state.updateCategorySuccess = false;
      state.updateCategoryError = false;
      state.createCategorySuccess = false;
      state.createCategoryError = false;
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
  setRevalidateCategorySlice,

  setCreateCategoryRequest,
  setCreateCategoryRequestSuccess,
  setCreateCategoryRequestError,
} = categorySlice.actions;

export default categorySlice.reducer;
