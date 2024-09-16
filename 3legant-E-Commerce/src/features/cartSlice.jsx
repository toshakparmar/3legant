import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);
      if (itemToUpdate) itemToUpdate.amount = amount;
    },
    setShipping: (state, action) => {
      state.shippingOption = action.payload.shippingOption;
    },
   setMethod: (state, action) => {
      state.paymentMethod = action.payload.paymentMethod;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setShipping,
  setMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
