import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

export const aiImages = createAsyncThunk(
  "AIResults/askAi",
  async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `${config.OPEN_AI_URL}/v1/images/generations`,
        {
          prompt: form.prompt,
          n: form.n,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.OPEN_AI_KEY}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
