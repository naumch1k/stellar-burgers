import { Ingredient } from '../Ingredient'
import styles from './IngredientList.module.css'

interface IngredientListProps {
  ingredientIds: string[];
}

export const IngredientList = ({ ingredientIds }: IngredientListProps) => (
  <ul className={`${styles.root} pr-4 pb-10 pl-4`}>
    {ingredientIds.map(ingredientId => (
      <Ingredient
        key={ingredientId}
        id={ingredientId}
      />
    ))}
  </ul>
)
