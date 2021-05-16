import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { signInReducer } from "../signIn";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
  devTools: process.env.NODE_ENV !== "development" ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
