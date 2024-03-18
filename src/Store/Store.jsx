import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import ProductReducer from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    userReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
});
