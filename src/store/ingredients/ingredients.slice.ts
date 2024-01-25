import { createSlice } from '@reduxjs/toolkit'
import { IIngredient } from 'shared/types'
import { ingredientsRequest } from './ingredients.operations'

export interface IIngredientsSliceState {
  isFetching: boolean;
  error: string | null;
  entities: Record<number, IIngredient>;
  previewedIngredientId: string | undefined;
}

const initialState: IIngredientsSliceState = {
  isFetching: false,
  error: null,
  entities: {},
  previewedIngredientId: undefined,
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setPreviewedIngredientId(state, action) {
      state.previewedIngredientId = action.payload
    },
    clearPreviewedIngredientId(state) {
      state.previewedIngredientId = initialState.previewedIngredientId
    },
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

export const { setPreviewedIngredientId, clearPreviewedIngredientId } = ingredientsSlice.actions
export const ingredientsReducer = ingredientsSlice.reducer
