import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ingredientsApi } from '../../services/api/ingredients-api'
import type {
  IngredientsSuccessResponse,
  IIngredientsApiFailureResponse,
} from '../../services/api'

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IIngredientsApiFailureResponse>

    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
      return { message: axiosError.response.data.message }
    }

    return { message: error.message }
  }

  return { message: 'An unknown error occurred' }
}

export const ingredientsRequest = createAsyncThunk<
  IngredientsSuccessResponse,
  void,
  { rejectValue: IIngredientsApiFailureResponse }
>(
  'ingredients/ingredientsRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ingredientsApi.getIngredients()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
