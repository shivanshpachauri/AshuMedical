import { configureStore } from "@reduxjs/toolkit";
import editcustomermodal from "./editcustomerslice.js";
import editinputmodal from "./Editinputcustomerslice.js";
export const store = configureStore({
  reducer: {
    editcustomermodal: editcustomermodal.reducer,
    editinputmodal: editinputmodal.reducer,
  },
});
