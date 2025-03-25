import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopping: [
    {
      id: "",
      price: "",
      name: "",
      description: "",
      image: `https://picsum.photos/200`,
      price: "",
    },
  ],
};

export const cartslice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    setcart(state, action) {
      state.shopping.push({
        id: action.payload.id || "",
        price: action.payload.price || "",
        name: action.payload.name || "",
        description: action.payload.description || "",
        image: action.payload.image || "",
        price: action.payload.price || "",
      });
      //   return { ...state, ...action.payload };
    },
  },
});

export const cartActions = cartslice.actions;
export default cartslice;
