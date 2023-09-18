import { useSelector } from 'react-redux'
import { selectIngredientById } from '../../store/ingredients/selectors'
import { IRootState } from '../../store/store'
import styles from './order-card-ingredient.module.css';

interface IOrderCardIngredientProps {
  id: string;
  index: number;
  closingIngredient?: boolean;
  restIngredientsCount?: string;
}

export const OrderCardIngredient = (props: IOrderCardIngredientProps) => {
  const {
    id,
    index,
    closingIngredient = false,
    restIngredientsCount,
  } = props
  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, id))

  return (
    <li
      className={styles.ingredient}
      // TODO: avoid hardcoding '14', replace with ingredientsToRender
      style={{zIndex: `calc(14 - ${index})`}}
    >
      <img
        src={ingredient!.image}
        className={`${styles.image} ${closingIngredient ? `${styles.faded}` : ''}`}
        alt={ingredient!.name}
      />
      {closingIngredient && (
        <span className={`${styles.text} text text_type_digits-default`}>
          {restIngredientsCount}
        </span>
      )}
    </li>
  )
}
