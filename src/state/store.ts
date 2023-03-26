import { configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./actorsSlice";
import filmsReducer from "./filmListSlice";
import filmReducer from "./filmSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    actors: actorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
