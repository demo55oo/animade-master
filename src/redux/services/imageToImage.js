import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

// Define your Django backend URL
const STABLE_URL = "https://web-production-7a7e.up.railway.app/api/image_to_image/";

export const imageToImage = createAsyncThunk(
  "AIResults/imageToImage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: `${config.STABLE_KEY}`,
        prompt: data.prompt,
        negative_prompt: null,
        init_image: data.init_image,
        width: "512",
        height: "512",
        samples: data.samples,
        num_inference_steps: "30",
        safety_checker: "no",
        enhance_prompt: "yes",
        guidance_scale: 7.5,
        strength: 0.7,
        seed: null,
        webhook: null,
        track_id: null,
      });

      const res = await axios.post(STABLE_URL, jsone, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
