import { IRootState } from '../store'

const selectOrderState = (state: IRootState) => state.order

const selectOrderNumber = (state: IRootState) => state.order.number

export {
  selectOrderState,
  selectOrderNumber,
}
