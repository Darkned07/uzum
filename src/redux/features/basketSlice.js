import { createSlice } from "@reduxjs/toolkit";
import products from "../../data";

const initialState = {
  products,
  amount: 0,
  prices: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incrementProducts: (state, { payload }) => {
      const item = state.products.find((state) => state.id === payload);
      item.amount -= 1;
    },
    decrementProducts: (state, { payload }) => {
      const item = state.products.find((state) => state.id === payload);
      item.amount += 1;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((s) => s.id !== payload);
    },
    total: (state, { payload }) => {
      let allPrice = 0;
      let allAmount = 0;
      state.products.forEach((pro) => {
        allPrice += pro.amount * pro.price;
        allAmount += pro.amount;
      });
      state.amount = allAmount;
      state.price = allPrice;
    },
  },
});

export const { incrementProducts, decrementProducts, total, removeItem } =
  basketSlice.actions;
export default basketSlice.reducer;
