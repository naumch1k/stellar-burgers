import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi, handleAxiosError } from 'services/api'
import type {
  IOrdersSuccessResponse,
  IApiFailureResponse,
} from 'services/api'

// TODO: Practice a generic thunk factory
export const allOrdersRequest = createAsyncThunk<
  IOrdersSuccessResponse,
  void,
  { rejectValue: IApiFailureResponse }
>(
  'orders/allOrdersRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mainApi.getAllOrders()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const userOrdersRequest = createAsyncThunk<
  IOrdersSuccessResponse,
  void,
  { rejectValue: IApiFailureResponse }
>(
  'orders/userOrdersRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mainApi.getUserOrders()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
