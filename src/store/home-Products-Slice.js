import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "lib/axios";
const initialState = {
  products: [],
  isLoading: false,
};

export const getHomeProducts = createAsyncThunk(
  "homeProducts/fetchProducts",
  async () => {
    try {
      const { data } = await request("", {
        params: {},
      });
      return data.products;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const homeProductsSlice = createSlice({
  name: "homeProducts",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getHomeProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHomeProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getHomeProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default homeProductsSlice.reducer;
