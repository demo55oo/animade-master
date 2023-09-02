import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const addCreatedDesign = createAsyncThunk(
  "createdDesigns/addCreatedDesign",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const token = getState().auth.token;

      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      // Make the API call using the provided data
      const response = await api.post("/createddesign/add/", data, {
        headers: headers,
      });

      // Return the response data
      return response.data;
    } catch (error) {
      // Return the error value to handle it in the Redux store
      return rejectWithValue(error.message);
    }
  }
);
