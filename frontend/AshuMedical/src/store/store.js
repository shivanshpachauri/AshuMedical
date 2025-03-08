// const { createStore } = require("redux");
import { createStore } from "redux";

// Define initial state
const initialState = {
  id: 0,
  manufacturer_name: "",
  medicine_name: "",
  pack_size_label: "",
  short_composition1: "",
};

// Define reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "manufacturer":
      return {
        ...state,
        manufacturer_name: state.manufacturer_name.concat(
          action.manufacturer_name
        ),
      };
    case "name":
      return {
        ...state,
        medicine_name: state.medicine_name.concat(action.medicine_name),
      };

    case "pack":
      return {
        ...state,
        pack_size_label: state.pack_size_label.concat(action.pack_size_label),
      };

    case "short":
      return {
        ...state,
        short_composition1: state.short_composition1.concat(
          action.short_composition1
        ),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
// // Define action creators
// const increment = () => ({ type: "INCREMENT" });
// const decrement = () => ({ type: "DECREMENT" });

// // Subscribe to store updates
// store.subscribe(() => {
//   console.log("State updated:", store.getState());
// });

// // Dispatch actions
// store.dispatch(increment());
// store.dispatch(decrement());
