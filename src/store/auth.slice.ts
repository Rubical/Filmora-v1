import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  name: string;
  email: string;
  password: string;
  isLogined: boolean;
}

const initialState: IAuthState = {
  name: "",
  email: "",
  password: "",
  isLogined:
    localStorage.getItem("sb-jdcbrbtfhykwfqsuukms-auth-token") ||
    localStorage.getItem("log")
      ? true
      : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.isLogined = true;
    },
    logout: (state) => {
      state.isLogined = false;
    },
  },
});

export const { changeName, changePassword, changeEmail } = authSlice.actions;
export default authSlice.reducer;
