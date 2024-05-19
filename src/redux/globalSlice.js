import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const globalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, loggedIn, loggedOut } = globalSlice.actions;

export default globalSlice.reducer;
