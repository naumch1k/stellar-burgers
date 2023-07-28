import { actions } from './slice'
import { AppDispatch } from '../store'
import { getIngredients } from '../../shared/utils/main-api'

const {
  ingredientsLoading,
  ingredientsLoaded,
} = actions

export const fetchIngredients = () => async (dispatch: AppDispatch) => {
  dispatch(ingredientsLoading())
  const response = await getIngredients()
  dispatch(ingredientsLoaded(response))
}
