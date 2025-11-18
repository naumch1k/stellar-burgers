import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../store'

export const selectIsFetching = (state: IRootState) => state.orders.isFetching

const selectOrdersEntities = (state: IRootState) => state.orders.entities

export const selectOrders = createSelector(
  selectOrdersEntities,
  orders => [...orders].reverse()
)

export const selectOrderById = (state: IRootState, orderId: string) => {
  return selectOrders(state).find(order => order._id === orderId)
}
