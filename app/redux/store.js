import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});

export default store;
