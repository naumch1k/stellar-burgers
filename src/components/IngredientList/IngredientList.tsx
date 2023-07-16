import { Ingredient } from '../Ingredient'

import { IngredientProps } from '../../shared/types/ingredient'

import styles from './IngredientList.module.css'

interface IngredientListProps {
  data: IngredientProps[]
}

export const IngredientList = (props: IngredientListProps) => {
  const { data } = props

  return (
    <ul className={`${styles.root} pr-4 pb-10 pl-4`}>
      {data.map(ingredientData => (
        <Ingredient
          key={ingredientData._id}
          {...ingredientData}
        />
      ))}
    </ul>
  )
}
