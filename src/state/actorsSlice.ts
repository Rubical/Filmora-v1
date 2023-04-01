import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFilm } from "./filmSlice";

const initialState = {
  actors: [],
  loading: true,
  error: null,
};

export const fetchActors = createAsyncThunk(
  "actors/fetchActors",
  async (movie_id: string | undefined, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const type = state.category.type;
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${movie_id}/credits?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data.cast;
  }
);

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActors.fulfilled, (state, action) => {
        state.actors = action.payload;
        state.loading = false;
      });
  },
});

export default actorsSlice.reducer;
