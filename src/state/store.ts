import { configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./actorsSlice";
import filmsReducer from "./filmListSlice";
import filmReducer from "./filmSlice";
import filmVideoReducer from "./filmVideoSlice";
import postersReducer from "./postersSlice";
import similarMoviesReducer from "./similarMoviesSlice";
import paginationReducer from "./paginationSlice";
import categoryReducer from "./categorySlice";
import activeBtnsReducer from "./activeBtnsSlice";
import favouriteFilmsReducer from "./favouriteFilmsSlice";
import favFilmsCardsShowReducer from "./favFilmsCardsShow";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    actors: actorsReducer,
    filmVideo: filmVideoReducer,
    posters: postersReducer,
    similarMovies: similarMoviesReducer,
    pagination: paginationReducer,
    category: categoryReducer,
    activeBtns: activeBtnsReducer,
    favouriteFilms: favouriteFilmsReducer,
    favFilmsCardsShow: favFilmsCardsShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
