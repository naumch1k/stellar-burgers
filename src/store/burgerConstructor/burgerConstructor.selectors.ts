import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectFillingEntities = (state: IRootState) => state.burgerConstructor.fillings

export const selectFillings = createSelector(
  selectFillingEntities,
  entities => Object.values(entities)
)

export const selectBun = (state: IRootState) => state.burgerConstructor.bun

export const selectAllIngredients = createSelector(
  selectBun,
  selectFillings,
  (bun, fillings) => [bun, ...fillings]
)
