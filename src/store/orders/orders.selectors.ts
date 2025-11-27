import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../store'

export const selectIsFetching = (state: IRootState) => state.orders.isFetching

export const selectOrders = (state: IRootState) => state.orders.entities

export const selectOrderById = (state: IRootState, orderId: string) => {
  return selectOrders(state).find(order => order._id === orderId)
}

export const selectCompletedNumbers = createSelector(
  selectOrders,
  orders =>
    orders
      .filter(order => order.status === 'done')
      .slice(0, 10)
      .map(order => order.number)
)

export const selectPendingNumbers = createSelector(
  selectOrders,
  orders =>
    orders
      .filter(order => order.status === 'pending')
      .slice(0, 10)
      .map(order => order.number)
)

export const selectTotalOrderNumber = (state:IRootState) => state.orders.total
export const selectTotalTodayOrderNumber = (state:IRootState) => state.orders.totalToday
