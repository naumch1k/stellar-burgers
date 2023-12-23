import { useSelector } from 'react-redux'
import { IRootState } from 'store/store'
import { selectIngredientById } from 'store/ingredients/ingredients.selectors'
import styles from './NutritionFacts.module.css'

interface INutritionFactsProps {
  ingredientId: string;
}

export const NutritionFacts = ({ ingredientId }: INutritionFactsProps) => {
  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, ingredientId))
  const {
    name,
    calories,
    carbohydrates,
    fat,
    proteins,
    image_large,
  } = ingredient!

  const descriptionTermClasses = 'mb-2 text text_type_main-default text_color_inactive'
  const descriptionDetailsClasses = 'mb-2 text text_type_digits-default text_color_inactive'

  return (
    <div className={styles.root}>
      <h2 className='text text_type_main-large'>Nutrition Facts</h2>
      <img className={`${styles.image} mt-4`} src={image_large} alt={name}/>
      <p className='mt-4 text text_type_main-medium'>{name}</p>
      <dl className={styles.list}>
        <div className={styles.listItem}>
          <dt className={descriptionTermClasses}>Calories</dt>
          <dd className={descriptionDetailsClasses}>{calories}</dd>
        </div>
        <div className={styles.listItem}>
          <dt className={descriptionTermClasses}>Total Carb.</dt>
          <dd className={descriptionDetailsClasses}>{carbohydrates}</dd>
        </div>
        <div className={styles.listItem}>
          <dt className={descriptionTermClasses}>Total Fat</dt>
          <dd className={descriptionDetailsClasses}>{fat}</dd>
        </div>
        <div className={styles.listItem}>
          <dt className={descriptionTermClasses}>Protein</dt>
          <dd className={descriptionDetailsClasses}>{proteins}</dd>
        </div>
      </dl>
    </div>
  )
}
