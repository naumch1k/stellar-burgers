import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MAIN_API } from '../../shared/constants/main-api'
import type {
  IngredientsSuccessResponse,
  IIngredientsFailureResponse,
} from '../../services/api'

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IIngredientsFailureResponse>

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
  { rejectValue: IIngredientsFailureResponse }
>(
  'ingredients/ingredientsRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${MAIN_API}/ingredients`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
