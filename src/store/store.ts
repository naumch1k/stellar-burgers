import { configureStore } from '@reduxjs/toolkit'

import ingredients, { IIngredientsSliceState } from './ingredients'
import burgerConstructor, { IBurgerConstructorSliceState } from './burgerConstructor'

export interface IRootState {
  ingredients: IIngredientsSliceState,
  burgerConstructor: IBurgerConstructorSliceState
}

const store = configureStore({
  reducer: {
    ingredients,
    burgerConstructor,
  }
})

export default store

export type AppDispatch = typeof store.dispatch
