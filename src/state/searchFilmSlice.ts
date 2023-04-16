import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IFilmsList } from "./filmListSlice";

interface ISearched {
  filmQuery: string;
  filmsFound: IFilmsList[];
  page: number;
  totalPages: number;
  loading: boolean;
  error: any;
}

const initialState: ISearched = {
  filmQuery: "",
  filmsFound: [],
  loading: true,
  error: null,
  page: 1,
  totalPages: 1,
};

export const fetchSearchedFilms = createAsyncThunk(
  "film/searchFilmSlice",
  async (__, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const searchedFilm = state.searchFilm.filmQuery;
    const page = state.searchFilm.page;
    const type = state.category.type;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${searchedFilm}&api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=${page}&include_adult=false
`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data;
  }
);

export const searchFilmSlice = createSlice({
  name: "searchFilm",
  initialState,
  reducers: {
    changeSearchedQuery: (state, action) => {
      state.filmQuery = action.payload;
    },
    changeSearchedFilmPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchedFilms.fulfilled, (state, action) => {
        state.filmsFound = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.loading = false;
      });
  },
});

export const { changeSearchedQuery, changeSearchedFilmPage } =
  searchFilmSlice.actions;

export default searchFilmSlice.reducer;
