import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config";
import axios from "axios";
// Assuming you're using Axios in your React frontend



// Define your Django backend URL for the text to image endpoint
const TEXT_TO_IMAGE_URL = 'https://https://animadebackenpppd-main-production.up.railway.app/api/text_to_image/';

export const textToImage = createAsyncThunk(
  'AIResults/textToImage',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: `${config.STABLE_KEY}`,
        prompt: data.prompt,
        negative_prompt: data.prompt,
        width: '512',
        height: '512',
        samples: data.samples,
        num_inference_steps: '20',
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      });

      const res = await axios.post(TEXT_TO_IMAGE_URL, jsone, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
