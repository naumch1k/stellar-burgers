import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectFillingEntities = (state: IRootState) => state.burgerConstructor.fillings

export const selectFillings = createSelector(
  selectFillingEntities,
  entities => Object.values(entities)
)

export const selectBun = (state: IRootState) => state.burgerConstructor.bun

const selectAllIngredients = (state: IRootState) =>
  [state.burgerConstructor.bun, ...state.burgerConstructor.fillings]

export const selectIngredientCount = createSelector(
  [selectAllIngredients, (_, id: string) => id],
  (ingredients, id) => {
    const count = ingredients.reduce((count, ingredient) => {
      if (ingredient?._id === id) {
        return count + (ingredient.type === 'bun' ? 2 : 1)
      }
      return count
    }, 0)
    return count
  }
)
