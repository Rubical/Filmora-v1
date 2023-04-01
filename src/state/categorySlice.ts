import { createSlice } from "@reduxjs/toolkit";

interface IState {
  type: string;
  category: string;
}

const initialState: IState = {
  type: "movie",
  category: "popular",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setType, setCategory } = categorySlice.actions;
export default categorySlice.reducer;
