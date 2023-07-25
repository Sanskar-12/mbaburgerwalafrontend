import { createReducer } from "@reduxjs/toolkit";

const intialstate = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheeseBurger: {
          quantity: 0,
          price: 200,
        },
        chickenCheeseBurger: {
          quantity: 0,
          price: 1200,
        },
        macWhooperburger: {
          quantity: 0,
          price: 1500,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(intialstate, {
  cheeseBurgerIncrement: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  chickencheeseBurgerIncrement: (state) => {
    state.cartItems.chickenCheeseBurger.quantity += 1;
  },
  macwhooperBurgerIncrement: (state) => {
    state.cartItems.macWhooperburger.quantity += 1;
  },
  cheeseBurgerDecrement: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  chickencheeseBurgerDecrement: (state) => {
    state.cartItems.chickenCheeseBurger.quantity -= 1;
  },
  macwhooperBurgerDecrement: (state) => {
    state.cartItems.macWhooperburger.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.quantity *
        state.cartItems.cheeseBurger.price +
      state.cartItems.chickenCheeseBurger.quantity *
        state.cartItems.chickenCheeseBurger.price +
      state.cartItems.macWhooperburger.quantity *
        state.cartItems.macWhooperburger.price;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      cheeseBurger: {
        quantity: 0,
        price: 200,
      },
      chickenCheeseBurger: {
        quantity: 0,
        price: 1200,
      },
      macWhooperburger: {
        quantity: 0,
        price: 1500,
      },
    };
    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hno: action.payload.hno,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      phoneno: action.payload.phoneno,
      pincode: action.payload.pincode,
    };
  },
});

export const orderReducer = createReducer(
  {},
  {
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createOnlineRequest: (state) => {
      state.loading = true;
    },
    createOnlineSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createOnlineFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
