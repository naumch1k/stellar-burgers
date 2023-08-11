import { IRootState } from '../store'

const selectOrderNumber = (state: IRootState) => state.order.number

export {
  selectOrderNumber,
}
