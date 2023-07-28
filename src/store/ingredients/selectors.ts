import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectIngredientEntities = (state: IRootState) => state.ingredients.entities

const selectIngredients = createSelector(
  selectIngredientEntities,
  entities => Object.values(entities)
)

export {
  selectIngredientEntities,
  selectIngredients,
}
