import { useSelector } from 'react-redux'
import { IRootState } from 'store/store'
import { selectIngredientById } from 'store/ingredients/ingredients.selectors'
import styles from './IngredientThumbnail.module.css'

interface IIngredientThumbnailProps {
  id: string;
  closingIngredient?: boolean;
  restIngredientsCount?: number;
}

export const IngredientThumbnail = (props: IIngredientThumbnailProps) => {
  const {
    id,
    closingIngredient,
    restIngredientsCount,
  } = props

  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, id))

  return(
    <div className={`${styles.imageWrapper} ${closingIngredient ? `${styles.closingIngredient}` : ''}`}>
      <img
        src={ingredient!.image}
        className={styles.image}
        alt={ingredient!.name}
      />
      {closingIngredient && (
        <span className={`${styles.text} text text_type_digits-default`}>
          +{restIngredientsCount}
        </span>
      )}
    </div>
  )
}
