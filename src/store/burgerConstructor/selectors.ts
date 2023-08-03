import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectFillingEntities = (state: IRootState) => state.burgerConstructor.fillings

const selectFillings = createSelector(
  selectFillingEntities,
  entities => Object.values(entities)
)

const selectBun = (state: IRootState) => state.burgerConstructor.bun

const selectAllIngredients = (state: IRootState) =>
  [state.burgerConstructor.bun, ...state.burgerConstructor.fillings]

const selectIngredientCount = createSelector(
  [selectAllIngredients, (_, id: number) => id],
  (ingredients, id) => {
    const count = ingredients.reduce((count, ingredient) => {
      if (ingredient?.id === id) {
        return count + (ingredient.type === 'bun' ? 2 : 1)
      }
      return count
    }, 0)
    return count
  }
)

export {
  selectFillingEntities,
  selectFillings,
  selectBun,
  selectAllIngredients,
  selectIngredientCount,
}
