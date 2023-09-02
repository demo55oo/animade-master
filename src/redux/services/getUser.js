import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const token = thunkAPI.getState().auth.token;
  try {
    const { data } = await api.get("/auth/user/", {
      headers: {
        Authorization: `Token ${token}`,
        "content-type": "application/json",
      },
    });
    return data;
    // =====================
  } catch (error) {
    return rejectWithValue(error);
  }
});
