import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";
const extraWords = "in 8 words maximum each descripe a four scenes and return it in a form exactly like the format in the brackets without the brackets (1. Scene 1: scene1_text_here. 2. Scene 2: scene2_text_here. 3. Scene 3: scene3_text_here. 4. Scene 4: scene4_text_here.) where the four scenes include ";

export const aiModels = createAsyncThunk(
  "AIResults/aiModels",
  async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const content = `${form.prompt} ${Array.from(extraWords).join(" ")}`;

    try {
      const { data } = await axios.post(
        `${config.OPEN_AI_URL}/v1/chat/completions`,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: content }],
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
