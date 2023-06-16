import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      let temp = state.data;
      temp.push(action.payload);
      state.data = temp;
      console.log(state.data);
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
