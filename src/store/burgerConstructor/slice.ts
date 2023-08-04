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
    fillingMoved(state, action) {
      const { fromIndex, toIndex } = action.payload

      const reorderedFillings = [...state.fillings]
      const [movedItem] = reorderedFillings.splice(fromIndex, 1)
      reorderedFillings.splice(toIndex, 0, movedItem)

      state.fillings = reorderedFillings
    },
    fillingDeleted(state, action) {
      state.fillings = state.fillings.filter((_, index) => index !== action.payload)
    },
    ingredientsCleared(state) {
      state.bun = initialState.bun
      state.fillings = initialState.fillings
    }
  },
})

export const { reducer, actions } = burgerConstructorSlice
