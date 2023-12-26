import { createSlice } from '@reduxjs/toolkit'
import { placeOrderRequest } from './order.operations'

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
    clearOrderNumber(state) {
      state.number = initialState.number
    },
    clearError(state) {
      state.error = null
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

export const { clearOrderNumber, clearError } = orderSlice.actions
export const orderReducer = orderSlice.reducer
