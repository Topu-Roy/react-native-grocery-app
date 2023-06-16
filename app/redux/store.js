import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductSlice";
import FavoritesReducer from "./slices/FavoritesSlice";
import CartReducer from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    favorites: FavoritesReducer,
    cart: CartReducer,
  },
});

export default store;
