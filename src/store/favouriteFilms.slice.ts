import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";

interface IFavouriteFilm {
  film: IFilm;
  type: string;
}

const initialState: IFavouriteFilm[] = [];

export const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    addfavouriteFilm: (state, action: PayloadAction<IFavouriteFilm>) => {
      state.push(action.payload);
    },
    removeFavouriteFilm: (state, action: PayloadAction<number>) => {
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
