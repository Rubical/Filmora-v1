import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = true;

export const favFilmsCardsShow = createSlice({
  name: "favFilmsCardsShow",
  initialState,
  reducers: {
    showFavFilmsCards: (state) => {
      return true;
    },
    hideFavFilmsCards: (state) => {
      return false;
    },
  },
});

export const { showFavFilmsCards, hideFavFilmsCards } =
  favFilmsCardsShow.actions;
export default favFilmsCardsShow.reducer;
