import { createSlice } from "@reduxjs/toolkit";
import { register } from "../services/register";
import { login } from "../services/login";
import { logout } from "../services/logout";

const initialState = {
  token: JSON.parse(localStorage.getItem("token")) || null,
  isLoaing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ========== Register ============== //
    builder.addCase(register.pending, (state) => {
      state.isLoaing = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoaing = false;
      state.error = false;
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      }
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoaing = false;
      state.error = action.payload;
    });
    // ========== Login ============== //
    builder.addCase(login.pending, (state) => {
      state.isLoaing = true;
      state.error = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoaing = false;
      state.error = false;
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoaing = false;
      state.error = action.payload;
    });
    // ========== Logout ============== //
    builder.addCase(logout.pending, (state) => {
      state.isLoaing = true;
      state.error = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoaing = false;
      state.error = false;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoaing = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
