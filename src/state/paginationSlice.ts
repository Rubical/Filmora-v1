import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
