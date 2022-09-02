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
    listItem: (state, action) => {
      const list = { ...state.stores };
      state.stores = list;
    },
  },
});

export const { initStorate, listItem } = stores.actions;

export default stores.reducer;
