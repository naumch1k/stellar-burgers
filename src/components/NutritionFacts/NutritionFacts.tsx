import { IIngredient } from 'shared/types/ingredient'
import styles from './NutritionFacts.module.css'

export const NutritionFacts = (props: IIngredient) => {
  const {
    name,
    calories,
    carbohydrates,
    fat,
    proteins,
    image_large,
  } = props

  const descriptionTermClasses = 'mb-2 text text_type_main-default text_color_inactive'
  const descriptionDetailsClasses = 'mb-2 text text_type_digits-default text_color_inactive'

  return (
    <div className={`${styles.root} pt-10 pr-10 pb-15 pl-10`}>
      <h2 className={`${styles.heading} mt-4 mb-4 text text_type_main-large`}>Nutrition Facts</h2>
      <img className={styles.image} src={image_large} alt={name}/>
      <p className='mt-4 mb-8 text text_type_main-medium'>{name}</p>
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
