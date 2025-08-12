import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: authReducer,
});

export default store;

export type Rootstate = ReturnType<typeof store.getState>;
