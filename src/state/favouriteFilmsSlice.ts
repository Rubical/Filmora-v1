import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

export const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    addfavouriteFilm: (state, action) => {
      state.push(action.payload);
    },
    removeFavouriteFilm: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addfavouriteFilm, removeFavouriteFilm } =
  favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;
