// In your auth slice (using Redux Toolkit)
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: localStorage.getItem("loggedin") ? true : false,
    // other auth-related state
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("loggedin", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("loggedin");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
