import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../services/getUser";
import { getCreatedDesigns } from "../services/getCreatedDesigns"; // Import the getCreatedDesigns action

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
  createdDesigns: [], // Add this field
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ========== getUser ============== //
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.user = action.payload;
      state.createdDesigns = action.payload.createdDesigns; // Set the createdDesigns field
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // ========== getCreatedDesigns ============== //
    builder.addCase(getCreatedDesigns.fulfilled, (state, action) => {
      state.createdDesigns = action.payload;
    });
  },
});

export default userSlice.reducer;
