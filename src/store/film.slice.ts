import { createSlice } from "@reduxjs/toolkit";
import { fetchFilm } from "./film.actions";
import { IFilm } from "../types/film.types";

interface IFilmSlice {
  film: IFilm | {};
  loading: boolean;
  error: null | string;
}

const initialState: IFilmSlice = {
  film: {},
  loading: true,
  error: null,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.film = {};
        state.loading = false;
      });
  },
});

export default filmSlice.reducer;
