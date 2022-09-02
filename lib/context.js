import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "lib/redux";

export default configureStore({
  reducer: { bag: bagReducer },
});
