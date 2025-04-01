import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopping: [
    {
      id: "",
      price: "",
      name: "",
      description: "",
      quantity: "",
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
      const newItem = action.payload;
      const existingItem = state.shopping.find(
        (item) => item.name === newItem.name
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.shopping.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          description: newItem.description,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      //   return { ...state, ...action.payload };
    },
  },
});

export const cartActions = cartslice.actions;
export default cartslice;
