import { createSelector } from '@reduxjs/toolkit'
import type { IRootState } from '../store'

const selectFillingEntities = (state: IRootState) => state.burgerConstructor.fillings

const selectFillings = createSelector(
  selectFillingEntities,
  entities => Object.values(entities)
)

const selectBun = (state: IRootState) => state.burgerConstructor.bun

export {
  selectFillingEntities,
  selectFillings,
  selectBun,
}
