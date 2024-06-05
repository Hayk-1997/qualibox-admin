import { AppDispatch } from "@/lib/store";
import ApiInstance from "@/lib/axios";
import {
  setCreateMaterialRequest,
  setCreateMaterialRequestError,
  setCreateMaterialRequestSuccess,
  setDeleteMaterialRequest,
  setDeleteMaterialRequestError,
  setDeleteMaterialRequestSuccess,
  setUpdateMaterialError,
  setUpdateMaterialRequest,
  setUpdateMaterialRequestSuccess,
} from "@/lib/features/materialSlice/index";
import { TCreateMaterialForm, TUpdateMaterialFormRequest } from "@/types/material";

export const makeUpdateMaterialRequest = (data: TUpdateMaterialFormRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUpdateMaterialRequest());
      await ApiInstance.post(`material/${data.id}/update`, {
        ...data,
      });
      dispatch(setUpdateMaterialRequestSuccess());
    } catch (e: unknown) {
      dispatch(setUpdateMaterialError());
    }
  };
};

export const makeDeleteMaterialRequest = (materialId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteMaterialRequest());
      await ApiInstance.delete(`material/${materialId}`);
      dispatch(setDeleteMaterialRequestSuccess());
    } catch (e: unknown) {
      dispatch(setDeleteMaterialRequestError());
    }
  };
};

export const makeCreateMaterialRequest = (data: TCreateMaterialForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateMaterialRequest());
      await ApiInstance.post(`material/create`, {
        ...data,
      });
      dispatch(setCreateMaterialRequestSuccess());
    } catch (e: unknown) {
      dispatch(setCreateMaterialRequestError());
    }
  };
};
