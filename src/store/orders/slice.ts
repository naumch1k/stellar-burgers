import { createSlice } from '@reduxjs/toolkit'

export interface IOrdersSliceState {
  orders: [];
  total: number | null;
  totalToday: number | null;
}

const initialState: IOrdersSliceState = {
  orders: [],
  total: null,
  totalToday: null,
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      const { orders, total, totalToday } = action.payload
      state.orders = orders
      state.total = total
      state.totalToday = totalToday
    },
    clearOrders() {
      return initialState
    },
  },
})

export const { reducer, actions } = ordersSlice

