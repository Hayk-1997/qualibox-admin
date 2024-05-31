import { createSlice } from "@reduxjs/toolkit";
import { TCategoriesData } from "@/types/category";

type TInitialState = {
  categories: TCategoriesData | null;
  categoriesRequestLoading: boolean;
};

const initialState: TInitialState = {
  categories: null,
  categoriesRequestLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
