import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import ingredients, { IIngredientsSliceState } from './ingredients'
import burgerConstructor, { IBurgerConstructorSliceState } from './burgerConstructor'
import auth, { IAuthSliceState } from './auth'

export interface IRootState {
  ingredients: IIngredientsSliceState,
  burgerConstructor: IBurgerConstructorSliceState,
  auth: IAuthSliceState,
}

const store = configureStore({
  reducer: {
    ingredients,
    burgerConstructor,
    auth,
  }
})

export default store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
