import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import homeProductsReducer from "./home-Products-Slice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    homeProducts: homeProductsReducer,
  },
});
