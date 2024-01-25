import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from 'components/Loader'
import { IngredientList } from 'components/IngredientList'
import {
  selectIsFetching,
  selectIngredientIdsByType,
} from 'store/ingredients/ingredients.selectors'
import { IRootState } from 'store/store'
import { IIngredientGroup } from 'shared/types'

export const IngredientGroup = forwardRef<HTMLHeadingElement, IIngredientGroup>(
  ({ type, label }, ref) => {

  const isFetching = useSelector(selectIsFetching)
  const ingredientIds = useSelector((state: IRootState) => selectIngredientIdsByType(state, type))

  if (isFetching) return <Loader/>

  return (
    <li>
      <h2 ref={ref} className='text text_type_main-medium mb-6'>{label}</h2>
      <IngredientList ingredientIds={ingredientIds}/>
    </li>
  )
})
