import { createSlice } from '@reduxjs/toolkit'
import { IOrder } from '../../shared/types/order'

export interface IOrdersSliceState {
  entities: IOrder[];
  total: number | null;
  totalToday: number | null;
}

const initialState: IOrdersSliceState = {
  entities: [],
  total: null,
  totalToday: null,
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      const { orders, total, totalToday } = action.payload
      state.entities = orders
      state.total = total
      state.totalToday = totalToday
    },
    clearOrders() {
      return initialState
    },
  },
})

export const { setOrders, clearOrders } = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer
