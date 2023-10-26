import { createSlice } from "@reduxjs/toolkit";
import { textToImage } from "../services/textToImage";
import { imageToImage } from "../services/imageToImage";
import { aiImages } from "../services/aiImages";
import { aiModels } from "../services/aiModels";

const initialState = {
  isLoading: false,
  textToImageResluts: null,
  imageToImageResluts: null,
  askAiImages: null,
  models: null,
  error: null,
  isError: null,
};

const AIResultsSlice = createSlice({
  name: "AIResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ============ Text 2 Image ===========
    builder.addCase(textToImage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.textToImageResluts = null;
    });
    builder.addCase(textToImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.textToImageResluts = action.payload.output;
      state.isError = action.payload;
    });
    builder.addCase(textToImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isError = null;
      state.textToImageResluts = null;
    });
    // ============ Image 2 Image ===========
    builder.addCase(imageToImage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.imageToImageResluts = null;
    });
    builder.addCase(imageToImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.imageToImageResluts = action.payload.output;
      state.isError = action.payload;
    });
    builder.addCase(imageToImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isError = null;
      state.imageToImageResluts = null;
    });
    // ============ Ask Ai Images ===========
    builder.addCase(aiImages.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.askAiImages = null;
    });
    builder.addCase(aiImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.askAiImages = action.payload.data;
      state.isError = action.payload;
    });
    builder.addCase(aiImages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.response.data.error;
      state.isError = null;
      state.askAiImages = null;
    });
    // ============ Ask Ai Models ===========
    builder.addCase(aiModels.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.models = null;
    });
    builder.addCase(aiModels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.models = action.payload?.choices.map(
        (choice) => choice?.message?.content
      );
      state.isError = action.payload;
    });
    builder.addCase(aiModels.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.response?.data?.error;
      state.isError = null;
      state.models = null;
      console.log(action.payload);
    });
  },
});

export default AIResultsSlice.reducer;
