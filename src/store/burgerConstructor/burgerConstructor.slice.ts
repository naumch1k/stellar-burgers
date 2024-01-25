import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IIngredient } from 'shared/types'

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
    addBun(state, action: PayloadAction<IIngredient>) {
      state.bun = action.payload
    },
    addFilling(state, action: PayloadAction<IIngredient>) {
      const ingredient = action.payload
      state.fillings.push(ingredient)
    },
    moveFilling(state, action) {
      const { fromIndex, toIndex } = action.payload

      const reorderedFillings = [...state.fillings]
      const [movedItem] = reorderedFillings.splice(fromIndex, 1)
      reorderedFillings.splice(toIndex, 0, movedItem)

      state.fillings = reorderedFillings
    },
    removeFilling(state, action) {
      state.fillings = state.fillings.filter((_, index) => index !== action.payload)
    },
    clearIngredients(state) {
      state.bun = initialState.bun
      state.fillings = initialState.fillings
    }
  },
})

export const {
  addBun,
  addFilling,
  moveFilling,
  removeFilling,
  clearIngredients,
} = burgerConstructorSlice.actions

export const burgerConstructorReducer = burgerConstructorSlice.reducer
