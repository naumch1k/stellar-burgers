import { Ingredient } from '../ingredient'
import styles from './ingredient-list.module.css'

interface IngredientListProps {
  ingredientIds: string[];
}

export const IngredientList = ({ ingredientIds }: IngredientListProps) => {
  return (
    <ul className={`${styles.root} pr-4 pb-10 pl-4`}>
      {ingredientIds.map(ingredientId => (
        <Ingredient
          key={ingredientId}
          id={ingredientId}
        />
      ))}
    </ul>
  )
}
