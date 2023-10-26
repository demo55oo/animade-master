import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrintfulproduct = createAsyncThunk(
  "printful/getPrintfulproduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const globalState = thunkAPI.getState((state) => state);

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_PRINTFUL__API__URL}/store/products`,
        {
          headers: {
            Authorization: `Bearer ${globalState.printful.access_token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
