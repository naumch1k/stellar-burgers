import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectIsFetching = (state: IRootState) => state.ingredients.isFetching

const selectIngredientEntities = (state: IRootState) => state.ingredients.entities

const selectIngredients = createSelector(
  selectIngredientEntities,
  entities => Object.values(entities)
)

const selectIngredientIds = createSelector(
  selectIngredients,
  ingredients => ingredients.map(ingredient => ingredient.id)
)

const selectIngredientById = (state: IRootState, ingredientId: number) => {
  return selectIngredientEntities(state)[ingredientId]
}

const selectIngredientIdsByType = createSelector(
  [selectIngredients, (_, type: string) => type],
  (ingredients, type) =>
    ingredients
      .filter(ingredient => ingredient.type === type)
      .map(ingredient => ingredient.id)
)

export {
  selectIsFetching,
  selectIngredientEntities,
  selectIngredients,
  selectIngredientIds,
  selectIngredientById,
  selectIngredientIdsByType,
}
