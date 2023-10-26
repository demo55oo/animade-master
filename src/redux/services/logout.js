import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/logout/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
      },
      redirect: "follow",
    });
    const data = await res.text();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
