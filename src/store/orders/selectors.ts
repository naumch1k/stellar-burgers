import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../store'

const selectOrdersEntities = (state: IRootState) => state.orders.entities

const selectOrders = createSelector(
  selectOrdersEntities,
  orders => [...orders].reverse()
)

const selectOrderById = (state: IRootState, orderId: string) => {
  return selectOrders(state).find(order => order._id === orderId)
}

export {
  selectOrders,
  selectOrderById,
}
