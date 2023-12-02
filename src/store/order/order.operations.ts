import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi } from '../../services/api'
import type {
  IPlaceOrderRequest,
  IPlaceOrderSuccessResponse,
  IMainApiFailureResponse,
} from '../../services/api'

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IMainApiFailureResponse>

    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
      return { message: axiosError.response.data.message }
    }

    return { message: error.message }
  }

  return { message: 'An unknown error occurred' }
}

export const placeOrderRequest = createAsyncThunk<
  IPlaceOrderSuccessResponse,
  IPlaceOrderRequest,
  { rejectValue: IMainApiFailureResponse }
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
