import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  nickname: string;
  email: string;
  password: string;
  isLogined: boolean;
}

const initialState: IAuthState = {
  nickname: "",
  email: "",
  password: "",
  isLogined: localStorage.getItem("sb-jdcbrbtfhykwfqsuukms-auth-token")
    ? true
    : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
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

export const { changeNickname, changePassword, changeEmail } =
  authSlice.actions;
export default authSlice.reducer;
