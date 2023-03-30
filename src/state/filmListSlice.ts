import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFilm } from "./filmSlice";

export interface IFilmsList {
  id: number;
  adult?: boolean;
  original_title: "string";
  backdrop_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
}

interface IFilmsState {
  filmsList: IFilmsList[];
  loading: boolean;
  error: string | null;
}

const initialState: IFilmsState = {
  filmsList: [],
  loading: true,
  error: null,
};

export const fetchPopularFilms = createAsyncThunk<IFilmsList[]>(
  "filmsList/fetchfPopularFilms",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=1"
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data.results;
  }
);

export const filmListSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularFilms.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.loading = false;
      });
  },
});

export default filmListSlice.reducer;
