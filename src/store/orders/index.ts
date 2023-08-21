import * as ordersOperations from './operations'
import * as ordersSelectors from './selectors'
import { reducer } from './slice'

export type { IOrdersSliceState } from './slice'
export { ordersOperations, ordersSelectors }
export default reducer
