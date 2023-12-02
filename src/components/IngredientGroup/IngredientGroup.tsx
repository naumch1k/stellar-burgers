import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { IngredientList } from '../IngredientList'
import { selectIsFetching, selectIngredientIdsByType } from '../../store/ingredients/ingredients.selectors'
import { IRootState } from '../../store/store'
import styles from './IngredientGroup.module.css'

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
      <h2 ref={ref} className={`${styles.name} text text_type_main-medium mb-6`}>{type}</h2>
      <IngredientList
        ingredientIds={ingredientIds}
      />
    </li>
  )
})
