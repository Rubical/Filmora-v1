import { createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "./filmVideo.actions";
import { IVideo } from "../types/video.types";

interface IVideoSlice {
  filmVideo: IVideo[];
  loading: boolean;
  error: null | string;
}

const initialState: IVideoSlice = {
  filmVideo: [],
  loading: true,
  error: null,
};

export const filmVideoSlice = createSlice({
  name: "filmVideo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.filmVideo = action.payload;
        state.loading = false;
      })
      .addCase(fetchVideo.rejected, (state) => {
        state.filmVideo = [];
        state.loading = false;
      });
  },
});

export default filmVideoSlice.reducer;
