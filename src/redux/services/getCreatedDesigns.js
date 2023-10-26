

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getCreatedDesigns = createAsyncThunk(
    "user/getCreatedDesigns",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        // Retrieve the user's token from the Redux store state
        const token = thunkAPI.getState().auth.token;
  
        // Make a GET request to the user's created designs endpoint
        const response = await api.get("/users/createddesigns/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        
        const createdDesigns = response.data.map((item) => ({
          id: item.id,
          desc: item.desc,
          number: item.number,
          image: item.image,
          user: item.user,
        }));
        // Extract the data from the response and return it
        return createdDesigns;
      } catch (error) {
        // Return the error value to handle it in the Redux store
        return rejectWithValue(error);
      }
    }
  );
  