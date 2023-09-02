import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const printfulAuth = createAsyncThunk(
  "printful/printfulAuth",
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const clientId = process.env.REACT_APP_PRINTFUL__CLIENT__ID;
    const clientSecret = process.env.REACT_APP_PRINTFUL__SECRET__ID;
    try {
      const { data } = await axios.post(
        `https://www.printful.com/oauth/token`,
        {
          grant_type: "authorization_code",
          client_id: clientId,
          client_secret: clientSecret,
          code: token,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
