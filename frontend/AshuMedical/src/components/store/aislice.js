import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  body: "",
};

export const aislice = createSlice({
  name: "aislice",
  initialState,
  reducers: {
    setaislice(state, action) {
      //   return { ...state, ...action.payload };
      state.id = action.payload.id || state.id || "";
      state.title = action.payload.title || state.title || "";
      state.body = action.payload.body || state.body || "";
    },
  },
});

export const aiActions = aislice.actions;
export default aislice;
