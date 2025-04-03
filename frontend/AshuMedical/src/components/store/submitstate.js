import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitstate: false,
};

const submitstate = createSlice({
  name: "submitstate",
  initialState,
  reducers: {
    toggle(state) {
      state.submitstate = !state.submitstate;
    },
  },
});

export const { toggle } = submitstate.actions;

export default submitstate.reducer;
