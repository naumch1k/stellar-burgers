import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { IOrder } from 'shared/types'
import { allOrdersRequest, userOrdersRequest } from './orders.operations'

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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(allOrdersRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.entities = action.payload.orders
        state.total = action.payload.total
        state.totalToday = action.payload.totalToday
      })
      .addCase(userOrdersRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.entities = [...action.payload.orders].reverse()
      })
      .addMatcher(
        isAnyOf(
          allOrdersRequest.pending,
          userOrdersRequest.pending,
        ),
        state => {
          state.isFetching = true
        }
      )
      .addMatcher(
        isAnyOf(
          allOrdersRequest.rejected,
          userOrdersRequest.rejected,
        ),
        (state, action) => {
          state.isFetching = false

          if (action.payload) {
            state.error = action.payload.message
          } else {
            state.error = 'An unknown error occurred'
          }
        }
      )
  },
})

export const ordersReducer = ordersSlice.reducer
