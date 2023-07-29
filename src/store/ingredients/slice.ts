import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IIngredient } from '../../shared/types/ingredient'

export interface IIngredientsSliceState {
  status: 'idle' | 'loading';
  entities: Record<number, IIngredient>;
}

const initialState = {
  status: 'idle',
  entities: {},
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    ingredientsLoading(state) {
      state.status = 'loading'
    },
    ingredientsLoaded(state, { payload: ingredients }: PayloadAction<IIngredient[]>) {
      const newEntities: Record<number, IIngredient> = {}
      ingredients.forEach((ingredient: IIngredient) => {
        newEntities[ingredient.id] = ingredient
      })
      state.status = 'idle'
      state.entities = newEntities
    },
  },
})

export const { reducer, actions } = ingredientsSlice
