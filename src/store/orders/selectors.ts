import { IRootState } from '../store'

const selectOrders = (state: IRootState) => [...state.orders.entities].reverse()

const selectOrderById = (state: IRootState, orderId: string) => {
  return selectOrders(state).find(order => order._id === orderId)
}

export {
  selectOrders,
  selectOrderById,
}
