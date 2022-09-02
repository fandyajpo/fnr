import { createSlice } from "@reduxjs/toolkit";
import { trimSpace } from "./func";
const initState = {
  bag: [],
  orderQuantity: 0,
  orderTotal: 0,
};

export const bag = createSlice({
  name: "bag",
  initialState: initState,
  reducers: {
    addBag: (state, action) => {
      const itemKey = state.bag.find((item) => item.key === action.payload.key);
      const itemColor = state.bag.find(
        (item) => item.color.name === action.payload.color.name
      );
      const itemSize = state.bag.find(
        (item) => item.size.size === action.payload.size.size
      );
      if (itemKey >= 0 && itemColor >= 0 && itemSize >= 0) {
        state.bag[itemKey] = quantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.bag.push(tempProduct);
      }
    },
  },
  addQuantity: () => {},
  decreaseQuantity: (state, action) => {},
  removeOrder: (state, action) => {
    state.bag = state.bag.filter((order) => order.key !== action.payload.key);
  },
  orderPrice: (state, action) => {
    let { total, quantity } = state.bag.reduce(
      (bagTotal, bagItem) => {
        const { price, quantity } = bagItem;
        const prcTotal = price * quantity;

        bagTotal.total += prcTotal;
        bagTotal.quantity += quantity;

        return bagTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    state.orderQuantity = quantity;
    state.orderTotal = total;
  },
});

export const { addBag, removeOrder, orderPrice } = bag.actions;

export default bag.reducer;
