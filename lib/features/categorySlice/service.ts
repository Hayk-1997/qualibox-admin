import { AppDispatch } from "@/lib/store";
import {
  setDeleteCategoryRequest,
  setDeleteCategoryRequestError,
  setDeleteCategoryRequestSuccess,
  setUpdateCategoryError,
  setUpdateCategoryRequest,
  setUpdateCategoryRequestSuccess,
  setCreateCategoryRequest,
  setCreateCategoryRequestSuccess,
  setCreateCategoryRequestError,
} from "@/lib/features/categorySlice/index";
import ApiInstance from "@/lib/axios";
import { TCreateCategoryForm } from "@/types/category";

export const makeUpdateCategoryRequest = (data) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUpdateCategoryRequest());
      await ApiInstance.post(`category/${data.id}/update`, {
        ...data,
      });
      dispatch(setUpdateCategoryRequestSuccess());
    } catch (e: unknown) {
      dispatch(setUpdateCategoryError());
    }
  };
};

export const makeDeleteCategoryRequest = (categoryId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteCategoryRequest());
      await ApiInstance.delete(`category/${categoryId}`);
      dispatch(setDeleteCategoryRequestSuccess());
    } catch (e: unknown) {
      dispatch(setDeleteCategoryRequestError());
    }
  };
};

export const makeCreateCategoryRequest = (data: TCreateCategoryForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateCategoryRequest());
      await ApiInstance.post(`category/create`, {
        ...data,
      });
      dispatch(setCreateCategoryRequestSuccess());
    } catch (e: unknown) {
      dispatch(setCreateCategoryRequestError());
    }
  };
};
