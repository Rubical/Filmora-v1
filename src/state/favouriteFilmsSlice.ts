import { createSlice } from "@reduxjs/toolkit";
import { IFilmsList } from "./filmListSlice";

interface IFavouriteFilms {
  film: IFilmsList;
  type: string;
}

const initialState: IFavouriteFilms[] = [];

export const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    addfavouriteFilm: (state, action) => {
      state.push(action.payload);
    },
    removeFavouriteFilm: (state, action) => {
      state.splice(
        state.findIndex((el) => el?.film?.id === action.payload),
        1
      );
    },
  },
});

export const { addfavouriteFilm, removeFavouriteFilm } =
  favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;
