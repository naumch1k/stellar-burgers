import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

export const selectIsFetching = (state: IRootState) => state.ingredients.isFetching

const selectIngredientEntities = (state: IRootState) => state.ingredients.entities

export const selectIngredients = createSelector(
  selectIngredientEntities,
  entities => Object.values(entities)
)

export const selectIngredientIds = createSelector(
  selectIngredients,
  ingredients => ingredients.map(ingredient => ingredient._id)
)

export const selectIngredientById = createSelector(
  [selectIngredients, (_, id: string) => id],
  (ingredients, id) =>
    ingredients
      .find(ingredient => ingredient._id === id)
)


export const selectIngredientIdsByType = createSelector(
  [selectIngredients, (_, type: string) => type],
  (ingredients, type) =>
    ingredients
      .filter(ingredient => ingredient.type === type)
      .map(ingredient => ingredient._id)
)
