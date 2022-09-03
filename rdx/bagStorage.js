import { createSlice } from "@reduxjs/toolkit";
// if (itemId >= 0 && (state.bag[itemId].color.name === payload.color.name >= 0 || state.bag[itemId].size === payload.size >= 0))
const initState = {
  bag: [],
  orderQuantity: 0,
  orderTotal: 0,
};

export const bag = createSlice({
  name: "bag",
  initialState: initState,
  reducers: {
    mapCheck: (state, action) => {
      state.bag.map((itm, idx) => {
        return console.log("apakah ini sama? : ", idx === 2);
      });
    },
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
      // const mapPrct = () => {
      //   return state.bag.map((itm, idx) => {
      //     return idx;
      //   });
      // };

      // const itemIdChecker = state.bag.map((itm, idx) => {
      //   return {
      //     id: idx
      //   }
      // });

      // if (itemIdChecker) {
      //   state.bag = state.bag.filter((_) => state.id !== action.payload.id);
      // }

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
  mapCheck,
} = bag.actions;

export default bag.reducer;
