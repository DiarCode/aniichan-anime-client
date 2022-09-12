import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "..";
import { IUser } from "../../types/user";

interface IAuthSlice {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: IAuthSlice = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;

export const selectIsAuth = (state: AppState) => state.auth.isAuth;
export const selectUser = (state: AppState) => state.auth.user;

export default authSlice.reducer;
