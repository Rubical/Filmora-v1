import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFilm } from "./filmSlice";
import { useAppSelector } from "../hooks/reduxHooks";

export interface IFilmsList {
  id: number;
  adult?: boolean;
  original_title?: "string";
  backdrop_path: string;
  release_date?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  genre_ids?: number[];
  first_air_date?: string;
  name?: string;
  poster_path?: string;
}

interface IFilmsState {
  filmsList: IFilmsList[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

const initialState: IFilmsState = {
  filmsList: [],
  loading: true,
  error: null,
  page: 1,
  totalPages: 1,
};

export const fetchFilms = createAsyncThunk(
  "filmsList/fetchPopularFilms",
  async (__, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const page = state.films.page;
    const type = state.category.type;
    const category =
      state.category.category !== "coming"
        ? state.category.category
        : type === "tv"
        ? "on_the_air"
        : "upcoming";
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${category}?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=${page}`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data;
  }
);

export const filmListSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    changeFilmListPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.filmsList = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.loading = false;
      });
  },
});
export const { changeFilmListPage } = filmListSlice.actions;
export default filmListSlice.reducer;
