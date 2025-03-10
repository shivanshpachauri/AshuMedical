import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalstate: false,
};

export const editcustomermodal = createSlice({
  name: "CustomerEditModal",
  initialState,
  reducers: {
    toggle(state) {
      state.modalstate = !state.modalstate;
    },
  },
});

export const modalActions = editcustomermodal.actions;
export default editcustomermodal;
