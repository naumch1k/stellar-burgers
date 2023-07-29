import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectBurgerConstructorEntities = (state: IRootState) => state.burgerConstructor.entities

const selectBurgerConstructorIngredients = createSelector(
  selectBurgerConstructorEntities,
  entities => Object.values(entities)
)

export {
  selectBurgerConstructorEntities,
  selectBurgerConstructorIngredients,
}
