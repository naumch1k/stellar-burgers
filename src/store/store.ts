import { configureStore } from '@reduxjs/toolkit'

import ingredients, { IIngredientsSliceState } from './ingredients'

export interface IRootState {
  ingredients: IIngredientsSliceState,
}

const store = configureStore({
  reducer: {
    ingredients,
  }
})

export default store

export type AppDispatch = typeof store.dispatch
