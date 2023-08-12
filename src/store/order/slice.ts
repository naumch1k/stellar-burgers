import { createSlice } from '@reduxjs/toolkit'
import { placeOrderRequest } from './operations'

export interface IOrderSliceState {
  isFetching: boolean;
  error: string | null;
  number: number | undefined;
}

const initialState: IOrderSliceState = {
  isFetching: false,
  error: null,
  number: undefined,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderNumberCleared(state) {
      state.number = initialState.number
    },
  },
  extraReducers: builder => {
    builder
      .addCase(placeOrderRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(placeOrderRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.number = action.payload.order.number
      })
      .addCase(placeOrderRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
  },
})

export const { reducer, actions } = orderSlice
