import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userId: string;
  role: string;
}
interface State {
  isLoading: boolean;
  signInError: boolean;
  isRenewing: boolean;
  errorMessage: string;
  signInSuccess: boolean;
  user: User | null;
}

interface SignInSuccess {
  userId: string;
  role: string;
}

interface SignInError {
  errorMessage: string;
}

const initialState: State = {
  isLoading: false,
  isRenewing: false,
  signInError: false,
  signInSuccess: false,
  errorMessage: "",
  user: null,
};

const signInSlice = createSlice({
  name: "SignIn",
  initialState: initialState,
  reducers: {
    signInRequest: (state) => {
      state.signInError = false;
      state.signInSuccess = false;
      state.isLoading = true;
    },
    signInSuccess: (state, action: PayloadAction<SignInSuccess>) => {
      state.isLoading = false;
      state.signInSuccess = true;
      state.user = { ...action.payload };
    },
    signInError: (state, action: PayloadAction<SignInError>) => {
      state.isLoading = false;
      state.signInError = true;
      state.errorMessage = action.payload.errorMessage;
      state.user = null;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

const { actions } = signInSlice;

export const { signInError, signInRequest, signInSuccess, signOut } = actions;

export const signInReducer = signInSlice.reducer;
