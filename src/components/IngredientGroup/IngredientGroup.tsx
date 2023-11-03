import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { IngredientList } from '../IngredientList'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalize-first-letter'
import { selectIsFetching, selectIngredientIdsByType } from '../../store/ingredients/selectors'
import { IRootState } from '../../store/store'

interface IngredientGroupProps {
  type: string;
}

export const IngredientGroup = forwardRef<HTMLHeadingElement, IngredientGroupProps>(
  ({ type }, ref) => {

  const isFetching = useSelector(selectIsFetching)
  const ingredientIds = useSelector((state: IRootState) => selectIngredientIdsByType(state, type))

  if (isFetching) return <Loader/>

  return (
    <li>
      <h2 ref={ref} className='text text_type_main-medium mb-6'>{capitalizeFirstLetter(type)}</h2>
      <IngredientList
        ingredientIds={ingredientIds}
      />
    </li>
  )
})
