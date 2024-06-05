import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { middleware } from "./middleware";

import { authSlice } from "@/lib/features/authSlice";
import { categoryApi } from "@/lib/apiModules/category/api";
import { categorySlice } from "@/lib/features/categorySlice";
import { materialSlice } from "@/lib/features/materialSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.

const reducers = {
  auth: authSlice.reducer,
  category: categorySlice.reducer,
  material: materialSlice.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
};

const rootReducer = combineSlices(reducers);

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(middleware)
        .concat(categoryApi.middleware);
    },
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
