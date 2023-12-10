import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi, handleAxiosError } from '../../services/api'
import type {
  IPlaceOrderRequest,
  IPlaceOrderSuccessResponse,
  IApiFailureResponse,
} from '../../services/api'

export const placeOrderRequest = createAsyncThunk<
  IPlaceOrderSuccessResponse,
  IPlaceOrderRequest,
  { rejectValue: IApiFailureResponse }
>(
  'burgerConstructor/placeOrderRequest',
  async (data: IPlaceOrderRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.placeOrder(data)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
