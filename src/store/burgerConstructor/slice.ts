import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IIngredient } from '../../shared/types/ingredient'

export interface IBurgerConstructorSliceState {
  entities: IIngredient[];
}

const initialState: IBurgerConstructorSliceState = {
  entities: [],
}

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    selectIngredient(state, action: PayloadAction<IIngredient>) {
      const ingredient = action.payload
      state.entities.push(ingredient)
    }
  },
})

export const { reducer, actions } = burgerConstructorSlice
