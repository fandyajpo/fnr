import { createSlice } from "@reduxjs/toolkit";

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
      const itemId = state.bag.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemId >= 0) {
        state.bag[itemId].quantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.bag.push(tempProduct);
      }
    },
    addQuantity: (state, action) => {
      const itemId = state.bag.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.bag[itemId].quantity > 0) {
        state.bag[itemId].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = state.bag.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.bag[itemId].quantity > 1) {
        state.bag[itemId].quantity -= 1;
      } else if (state.bag[itemId].quantity === 1) {
        state.bag = state.bag.filter((order) => order.id !== action.payload.id);
      }
    },
    removeOrder: (state, action) => {
      state.bag = state.bag.filter((order) => order.id !== action.payload.id);
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
  },
});

export const {
  addBag,
  removeOrder,
  orderPrice,
  addQuantity,
  decreaseQuantity,
} = bag.actions;

export default bag.reducer;
