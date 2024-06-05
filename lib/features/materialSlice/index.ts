import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  deleteMaterialSuccess: boolean;
  deleteMaterialError: boolean;

  updateMaterialSuccess: boolean;
  updateMaterialError: boolean;

  createMaterialSuccess: boolean;
  createMaterialError: boolean;
};

const initialState: TInitialState = {
  updateMaterialSuccess: false,
  updateMaterialError: false,

  deleteMaterialSuccess: false,
  deleteMaterialError: false,

  createMaterialSuccess: false,
  createMaterialError: false,
};

export const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    setUpdateMaterialRequest: (state) => {
      state.updateMaterialSuccess = false;
      state.updateMaterialError = false;
    },
    setUpdateMaterialRequestSuccess: (state) => {
      state.updateMaterialSuccess = true;
      state.updateMaterialError = false;
    },
    setUpdateMaterialError: (state) => {
      state.updateMaterialSuccess = false;
      state.updateMaterialError = true;
    },
    setDeleteMaterialRequest: (state) => {
      state.deleteMaterialSuccess = false;
      state.deleteMaterialError = false;
    },
    setDeleteMaterialRequestSuccess: (state) => {
      state.deleteMaterialSuccess = true;
      state.deleteMaterialError = false;
    },
    setDeleteMaterialRequestError: (state) => {
      state.deleteMaterialSuccess = false;
      state.deleteMaterialError = true;
    },
    setCreateMaterialRequest: (state) => {
      state.createMaterialSuccess = false;
      state.createMaterialError = false;
    },
    setCreateMaterialRequestSuccess: (state) => {
      state.createMaterialSuccess = true;
      state.createMaterialError = false;
    },
    setCreateMaterialRequestError: (state) => {
      state.createMaterialSuccess = false;
      state.createMaterialError = true;
    },

    setRevalidateMaterialSlice: (state) => {
      state.deleteMaterialSuccess = false;
      state.deleteMaterialError = false;
      state.updateMaterialSuccess = false;
      state.updateMaterialError = false;
      state.createMaterialSuccess = false;
      state.createMaterialError = false;
    },
  },
});

export const {
  setUpdateMaterialRequest,
  setUpdateMaterialRequestSuccess,
  setUpdateMaterialError,

  setDeleteMaterialRequest,
  setDeleteMaterialRequestSuccess,
  setDeleteMaterialRequestError,

  setCreateMaterialRequest,
  setCreateMaterialRequestSuccess,
  setCreateMaterialRequestError,

  setRevalidateMaterialSlice,
} = materialSlice.actions;

export default materialSlice.reducer;
