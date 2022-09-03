import { createSlice } from "@reduxjs/toolkit";

const initStore = {
  stores: [],
};

export const stores = createSlice({
  name: "stores",
  initialState: initStore,
  reducers: {
    initStorate: (state, action) => {
      state.stores.push(...action.payload);
    },
  },
});

export const { initStorate } = stores.actions;

export default stores.reducer;
