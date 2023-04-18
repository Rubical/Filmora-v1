import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFilm {
  id?: string;
  filmType?: string;
}

const initialState = {
  filmVideo: [],
  loading: true,
  error: null,
};

export const fetchVideo = createAsyncThunk(
  "filmVideo/fetchVideo",
  async (payload: IFilm, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const type = state.category.type;
    const response = await fetch(
      `https://api.themoviedb.org/3/${payload.filmType || type}/${
        payload.id
      }/videos?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data.results;
  }
);

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
      });
  },
});

export default filmVideoSlice.reducer;
