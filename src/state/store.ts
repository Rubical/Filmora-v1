import { configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./actorsSlice";
import filmsReducer from "./filmListSlice";
import filmReducer from "./filmSlice";
import filmVideoReducer from "./filmVideoSlice";
import postersReducer from "./postersSlice";
import similarMoviesReducer from "./similarMoviesSlice";
import categoryReducer from "./categorySlice";
import activeBtnsReducer from "./activeBtnsSlice";
import favouriteFilmsReducer from "./favouriteFilmsSlice";
import favFilmsCardsShowReducer from "./favFilmsCardsShow";
import searchFilmReducer from "./searchFilmSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    actors: actorsReducer,
    filmVideo: filmVideoReducer,
    posters: postersReducer,
    similarMovies: similarMoviesReducer,
    category: categoryReducer,
    activeBtns: activeBtnsReducer,
    favouriteFilms: favouriteFilmsReducer,
    favFilmsCardsShow: favFilmsCardsShowReducer,
    searchFilm: searchFilmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
