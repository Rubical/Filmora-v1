import { createSlice } from "@reduxjs/toolkit";

interface IActiveBtn {
  activeCategoryBtn: number;
  activeTypeBtn: number;
}

const initialState: IActiveBtn = {
  activeCategoryBtn: 1,
  activeTypeBtn: 1,
};

export const activeBtnsSlice = createSlice({
  name: "activeBtns",
  initialState,
  reducers: {
    setActiveCategoryBtn: (state, action) => {
      state.activeCategoryBtn = action.payload;
    },
    setActiveTypeBtn: (state, action) => {
      state.activeTypeBtn = action.payload;
    },
  },
});

export const { setActiveCategoryBtn, setActiveTypeBtn } =
  activeBtnsSlice.actions;
export default activeBtnsSlice.reducer;
