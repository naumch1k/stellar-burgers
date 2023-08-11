import * as orderOperations from './operations'
import * as orderSelectors from './selectors'
import { reducer } from './slice'

export type { IOrderSliceState } from './slice'
export { orderOperations, orderSelectors }
export default reducer
