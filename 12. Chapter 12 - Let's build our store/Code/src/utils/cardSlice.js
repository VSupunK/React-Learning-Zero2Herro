import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Reducer function
      state.cartItems.push(action.payload);
    },
    removeItem: (state) => {
      state.cartItems.pop();
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});
