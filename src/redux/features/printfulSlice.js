import { createSlice } from "@reduxjs/toolkit";
import { printfulAuth } from "../services/printfulAuth";
import { getPrintfulproduct } from "../services/getPrintfulProducts";

const initialState = {
  access_token:
    JSON.parse(localStorage.getItem("printful_access_token")) || null,
  loading: true,
  error: false,
  products: null,
};

const printful = createSlice({
  name: "printful",
  initialState,
  extraReducers: (builder) => {
    // === printful auth ==== //
    builder.addCase(printfulAuth.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(printfulAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload.access_token) {
        state.access_token = action.payload.access_token;
        localStorage.setItem(
          "printful_access_token",
          JSON.stringify(action.payload.access_token)
        );
      }
    });
    builder.addCase(printfulAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // === get all product ==== //
    builder.addCase(getPrintfulproduct.pending, (state) => {
      state.loading = true;
      state.error = true;
      state.products = null;
    });
    builder.addCase(getPrintfulproduct.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.products = action.payload.result;
    });
    builder.addCase(getPrintfulproduct.rejected, (state, action) => {
      state.loading = false;
      state.products = null;
      state.error = action.payload;
    });
  },
});

export default printful.reducer;
