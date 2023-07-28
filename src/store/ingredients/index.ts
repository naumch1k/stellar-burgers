import * as ingredientsOperations from './operations'
import * as ingredientsSelectors from './selectors'
import { reducer } from './slice'

export type { IIngredientsSliceState } from './slice'
export { ingredientsOperations, ingredientsSelectors }
export default reducer
