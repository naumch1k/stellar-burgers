import * as burgerConstructorOperations from './operations'
import * as burgerConstructorSelectors from './selectors'
import { reducer } from './slice'

export type { IBurgerConstructorSliceState } from './slice'
export { burgerConstructorOperations, burgerConstructorSelectors }
export default reducer
