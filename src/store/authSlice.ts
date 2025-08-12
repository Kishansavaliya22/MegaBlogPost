import { createSlice } from "@reduxjs/toolkit";

interface IUserDataA {
  [key: string]: unknown;
}

interface IInitialState {
  status: boolean;
  userData: IUserDataA | null;
}

const initialState: IInitialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
