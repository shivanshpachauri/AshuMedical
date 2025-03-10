import { configureStore } from "@reduxjs/toolkit";
import editcustomermodal from "./editcustomerslice.js";
export const store = configureStore({
  reducer: { editcustomermodal: editcustomermodal.reducer },
});
