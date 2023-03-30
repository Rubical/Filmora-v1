import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFilm } from "./filmSlice";

const initialState = {
  posters: [],
  loading: true,
  error: null,
};

export const fetchPosters = createAsyncThunk(
  "posters/fetchPosters",
  async (movie_id: string | undefined) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=b053e4b701c01a664de1a144e1ab9f7f`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data.posters;
  }
);

export const postersSlice = createSlice({
  name: "posters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosters.fulfilled, (state, action) => {
        state.posters = action.payload;
        state.loading = false;
      });
  },
});

export default postersSlice.reducer;
