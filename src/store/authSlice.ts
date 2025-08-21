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
    storeLogin: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    storeLogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { storeLogin, storeLogout } = authSlice.actions;

export default authSlice.reducer;
