import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface IFilm {

// }

const initialState = {
  film: {},
  loading: false,
  error: null,
};

export const fetchFilm = createAsyncThunk(
  "film/fetchFilm",
  async (id: string | undefined) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
    );
    if (!response.ok) {
      console.log("Server Error!");
    }
    const data = await response.json();
    return data;
  }
);

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
    });
  },
});

export default filmSlice.reducer;
