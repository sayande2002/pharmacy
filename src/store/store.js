import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import homeProductsReducer from "./home-Products-Slice";
import searchReducer from "./search-Products-Slice";
import cartReducer from "./add-to-cart-Slice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    homeProducts: homeProductsReducer,
    searchProducts: searchReducer,
    cart: cartReducer,
  },
});
