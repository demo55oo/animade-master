import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config";
import axios from "axios";
import api from "../../api"; // Import your API configuration
// Define your Django backend URL for the text to image endpoint
const TEXT_TO_IMAGE_URL = 'https://backednlatestanimade-production.up.railway.app/new_text_to_image/';

export const textToImage1 = createAsyncThunk(
  'AIResults/textToImage',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const tokenWithQuotes = localStorage.getItem("token");
    const token = tokenWithQuotes.replace(/"/g, ""); // Remove quotes

    try {
      // Modify the request data structure as needed
      const requestData = {
        key: `${config.STABLE_KEY}`,
        prompt: data.prompt,
        safety_checker: "yes",
        safety_checker_type	:"blur",
        negative_prompt: data.prompt,
        width: '512',
        height: '512',
        samples: data.samples,
        num_inference_steps: '20',
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      };

      // Make the POST request to the backend with the requestData and token
      const response = await axios.post(TEXT_TO_IMAGE_URL, requestData, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
