import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  pack_size_label: "",
  quantity: "",
  manufacturer_name: "",
  date: "",
  order_by: "",
  delivered: "",
};

export const editinputmodal = createSlice({
  name: "CustomerEditModal",
  initialState,
  reducers: {
    setdelivery(state, action) {
      //   return { ...state, ...action.payload };
      state.id = action.payload.id || state.id;
      state.name = action.payload.name || state.name;
      state.pack_size_label =
        action.payload.pack_size_label || state.pack_size_label;
      state.quantity = action.payload.quantity || state.quantity; // Corrected from action.payload.name
      state.manufacturer_name =
        action.payload.manufacturer_name || state.manufacturer_name;
      state.date = action.payload.date || state.date;
      state.order_by = action.payload.order_by || state.order_by;
      state.delivered = action.payload.delivered || state.delivered;
    },
  },
});

export const modalInputActions = editinputmodal.actions;
export default editinputmodal;
