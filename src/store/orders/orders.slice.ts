import { createSlice } from '@reduxjs/toolkit'
import { IOrder } from 'shared/types'
import { userOrdersRequest } from './orders.operations'

export interface IOrdersSliceState {
  isFetching: boolean;
  error: string | null;
  entities: IOrder[];
  total: number | null;
  totalToday: number | null;
}

const initialState: IOrdersSliceState = {
  isFetching: false,
  error: null,
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
  extraReducers: builder => {
    builder
      .addCase(userOrdersRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(userOrdersRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.entities = action.payload.orders
      })
      .addCase(userOrdersRequest.rejected, (state, action) => {
        state.isFetching = false

         if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
  },
})

export const { setOrders, clearOrders } = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer
