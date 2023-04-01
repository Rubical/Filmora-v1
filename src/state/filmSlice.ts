import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface IFilm {

// }

const initialState = {
  film: {},
  loading: true,
  error: null,
};

export const fetchFilm = createAsyncThunk(
  "film/fetchFilm",
  async (id: string | undefined, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const type = state.category.type;
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
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
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.loading = false;
      });
  },
});

export default filmSlice.reducer;
