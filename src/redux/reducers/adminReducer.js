import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { order: [], users: [] },
  {
    getDashboardRequest: (state) => {
      state.loading = true;
    },
    getDashboardSuccess: (state, action) => {
      state.loading = false;
      state.totalusers = action.payload.totalusers;
      state.ordersCount = action.payload.ordersCount;
      state.totalIncome = action.payload.totalIncome;
    },
    getDashboardFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getadminUserscountRequest: (state) => {
      state.loading = true;
    },
    getadminUserscountSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getadminUserscountFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getadminOrdersRequest: (state) => {
      state.loading = true;
    },
    getadminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getadminOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    processOrdersRequest: (state) => {
      state.loading = true;
    },
    processOrdersSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processOrdersFail: (state, action) => {
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
