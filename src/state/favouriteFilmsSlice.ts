import { createSlice } from "@reduxjs/toolkit";
import { IFilmsList } from "./filmListSlice";

const initialState: IFilmsList[] = [];

export const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    addfavouriteFilm: (state, action) => {
      state.push(action.payload);
    },
    removeFavouriteFilm: (state, action) => {
      state.splice(
        state.findIndex((el) => el?.id === action.payload),
        1
      );
    },
  },
});

export const { addfavouriteFilm, removeFavouriteFilm } =
  favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;
