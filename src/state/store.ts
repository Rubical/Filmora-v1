import { configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./actorsSlice";
import filmsReducer from "./filmListSlice";
import filmReducer from "./filmSlice";
import filmVideoReducer from "./filmVideoSlice";
import postersReducer from "./postersSlice";
import similarMoviesReducer from "./similarMoviesSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    actors: actorsReducer,
    filmVideo: filmVideoReducer,
    posters: postersReducer,
    similarMovies: similarMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
