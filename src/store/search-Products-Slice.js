import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "lib/axios";
const initialState = {
  searchProducts: [],
  isLoading: false,
};

export const getSearchedProducts = createAsyncThunk(
  "searchProducts/fetchVideo",
  async (search) => {
    try {
      const { data } = await request("/search", {
        params: {
          q: search,
        },
      });
      return data.products;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getSearchedProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchProducts = action.payload;
      })
      .addCase(getSearchedProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default searchSlice.reducer;
