import { createAsyncThunk } from '@reduxjs/toolkit'
import { ingredientsApi } from '../../services/api/ingredients-api'
import { handleAxiosError } from '../../services/api'
import type {
  IngredientsSuccessResponse,
  IApiFailureResponse,
} from '../../services/api'

export const ingredientsRequest = createAsyncThunk<
  IngredientsSuccessResponse,
  void,
  { rejectValue: IApiFailureResponse }
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
