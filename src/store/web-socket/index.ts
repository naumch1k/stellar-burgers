import * as webSocketOperations from './operations'
import * as wecSocketSelectors from './selectors'
import { reducer } from './slice'

export type { IWebSocketSliceState } from './slice'
export { webSocketOperations, wecSocketSelectors }
export default reducer
