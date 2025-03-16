import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
};

const alertslice = createSlice({
  name: "alertslice",
  initialState,
  reducers: {
    seterror(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const { seterror } = alertslice.actions;

export default alertslice.reducer;
