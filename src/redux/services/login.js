import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAlert } from "../../utils/alert";

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/login/`,
        JSON.stringify({
          username: formData.username,
          // email: formData.email,
          password: formData.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          redirect: "follow",
        }
      );
      customAlert("Welcome to Animade!", "success");
      return res.data;
    } catch (error) {
      customAlert(
        error?.response?.data?.non_field_errors &&
          error?.response?.data?.non_field_errors[0],
        "error"
      );
      return rejectWithValue(error);
    }
  }
);
