import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { IngredientList } from '../ingredient-list'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalize-first-letter'
import { selectIngredientIdsByType } from '../../store/ingredients/selectors'
import { IRootState } from '../../store/store'

interface IngredientGroupProps {
  type: string;
}

export const IngredientGroup = forwardRef<HTMLHeadingElement, IngredientGroupProps>(
  ({ type }, ref) => {

  const ingredientIds = useSelector((state: IRootState) => selectIngredientIdsByType(state, type))

  return (
    <li>
      <h2 ref={ref} className='text text_type_main-medium mt-10 mb-6'>{capitalizeFirstLetter(type)}</h2>
      <IngredientList
        ingredientIds={ingredientIds}
      />
    </li>
  )
})
