import { createSlice } from "@reduxjs/toolkit";
let shoppingFromStorage = [];

try {
  const stored = localStorage.getItem("shopping");
  shoppingFromStorage = stored ? JSON.parse(stored) : [];
} catch (e) {
  shoppingFromStorage = [];
}

const initialState = {
  shopping: shoppingFromStorage,
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
      localStorage.setItem("shopping", JSON.stringify(state.shopping));
    },
    increment(state, action) {
      const newitem = action.payload;
      const existingItem = state.shopping.find(
        (item) => item.name == newitem.name
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrement(state, action) {
      const newitem = action.payload;
      const existingItem = state.shopping.find(
        (item) => item.name == newitem.name
      );
      if (existingItem) {
        existingItem.quantity--;
      }
    },
    removeall(state) {
      localStorage.removeItem("shopping");
      state.shopping = state.shopping.splice(0, state.shopping.length);
    },
  },
});

export const cartActions = cartslice.actions;
export default cartslice;
