import { IRootState } from '../store'

export const selectOrderState = (state: IRootState) => state.order

export const selectOrderNumber = (state: IRootState) => state.order.number
