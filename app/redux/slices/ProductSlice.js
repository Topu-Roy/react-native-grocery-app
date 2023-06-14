import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
