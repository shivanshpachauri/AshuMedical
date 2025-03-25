import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  price: "",
  name: "",
  description: "",
  image: `https://picsum.photos/200`,
  shopping: [],
};

export const cartslice = createSlice({
  name: "aislice",
  initialState,
  reducers: {
    setcart(state, action) {
      //   return { ...state, ...action.payload };
      state.id = action.payload.id || state.id || "";
      state.price = action.payload.price || state.price || "";
      state.name = action.payload.name || state.name || "";
      state.description = action.payload.description || state.description || "";
      state.image = action.payload.image || state.image || "";
    },
  },
});

export const cartActions = cartslice.actions;
export default cartslice;
