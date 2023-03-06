import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface IFilmsList {
  id: number;
  adult: boolean;
  backdrop_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

interface IFilmsState {
  films: IFilmsList[];
  loading: boolean;
  error: string | null;
}

const initialState: IFilmsState = {
  films: [],
  loading: false,
  error: null,
};

export const fetchPopularFilms = createAsyncThunk<
  IFilmsList[],
  undefined,
  { rejectValue: string }
>("films/fetchfPopularFilms", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=1"
  );
  if (!response.ok) {
    console.log("Server Error!");
  }
  const data = await response.json();
  return data.results;
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export default filmsSlice.reducer;
