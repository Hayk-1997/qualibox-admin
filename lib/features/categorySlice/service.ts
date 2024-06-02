import { AppDispatch } from "@/lib/store";
import {
  setUpdateCategoryError,
  setUpdateCategoryRequest,
  setUpdateCategoryRequestSuccess,
} from "@/lib/features/categorySlice/index";
import ApiInstance from "@/lib/axios";

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
