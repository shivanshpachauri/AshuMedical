import { configureStore } from "@reduxjs/toolkit";
import editcustomermodal from "./editcustomerslice.js";
import editinputmodal from "./Editinputcustomerslice.js";
import alertslice from "./alertslice.js";
import aislice from "./aislice.js";
import cartslice from "./cartslice.js";
import authslice from "./authslice.js";
import submitslice from "./submitstate.js";
export const store = configureStore({
  reducer: {
    editcustomermodal: editcustomermodal.reducer,
    editinputmodal: editinputmodal.reducer,
    alertstate: alertslice,
    aislice: aislice.reducer,
    cartslice: cartslice.reducer,
    authslice: authslice,
    submitslice: submitslice,
  },
});
