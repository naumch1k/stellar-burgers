import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IIngredient } from '../../shared/types/ingredient'

export interface IBurgerConstructorSliceState {
  bun: IIngredient | undefined;
  fillings: IIngredient[];
}

const initialState: IBurgerConstructorSliceState = {
  bun: undefined,
  fillings: [],
}

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    bunAdded(state, action: PayloadAction<IIngredient>) {
      state.bun = action.payload
    },
    fillingAdded(state, action: PayloadAction<IIngredient>) {
      const ingredient = action.payload
      state.fillings.push(ingredient)
    },
  },
})

export const { reducer, actions } = burgerConstructorSlice
