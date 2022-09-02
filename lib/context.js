import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "rdx/bagStorage";
import storeReducer from "rdx/productStorage";

export default configureStore({
  reducer: { bag: bagReducer, stores: storeReducer },
});
