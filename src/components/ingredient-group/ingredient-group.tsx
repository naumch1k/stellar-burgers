import { forwardRef } from 'react'
import { IngredientList } from '../ingredient-list'
import { IIngredient } from '../../shared/types/ingredient'

interface IngredientGroupProps {
  title: string;
  data: IIngredient[];
}

export const IngredientGroup = forwardRef<HTMLHeadingElement, IngredientGroupProps>(
  ({ title, data }, ref) => {

  return (
    <li>
      <h2 ref={ref} className='text text_type_main-medium mt-10 mb-6'>{title}</h2>
      <IngredientList
        data={data}
      />
    </li>
  )
})
