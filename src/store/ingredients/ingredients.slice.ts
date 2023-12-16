import { createSlice } from '@reduxjs/toolkit'
import { IIngredient } from 'shared/types/ingredient'
import { ingredientsRequest } from './ingredients.operations'

export interface IIngredientsSliceState {
  isFetching: boolean;
  error: string | null;
  entities: Record<number, IIngredient>;
}

const initialState: IIngredientsSliceState = {
  isFetching: false,
  error: null,
  entities: {},
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(ingredientsRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(ingredientsRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.entities = action.payload
      })
      .addCase(ingredientsRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
  },
})

export const ingredientsReducer = ingredientsSlice.reducer
