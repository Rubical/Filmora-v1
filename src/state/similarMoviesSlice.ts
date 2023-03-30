import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFilm } from "./filmSlice";

const initialState = {
  similarMovies: [],
  loading: true,
  error: null,
};

export const fetchSimilarMovies = createAsyncThunk(
  "similarMovies/fetchSimilarMovies",
  async (movie_id: string | undefined) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=1`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data.results;
  }
);

export const similarMoviesSlice = createSlice({
  name: "similarMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
        state.loading = false;
      });
  },
});

export default similarMoviesSlice.reducer;
