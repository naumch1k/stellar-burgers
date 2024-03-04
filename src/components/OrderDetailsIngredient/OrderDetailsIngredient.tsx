import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientThumbnail } from 'components/ui/IngredientThumbnail'
import { IRootState } from 'store/store'
import { selectIngredientById } from 'store/ingredients/ingredients.selectors'
import useOrderDetails from 'hooks/useOrderDetails'
import useIngredientCount from 'hooks/useIngredientCount'
import styles from './OrderDetailsIngredient.module.css'

interface IOrderDetailsIngredientProps {
  id: string;
}

export const OrderDetailsIngredient = ({ id }: IOrderDetailsIngredientProps) => {
  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, id))
  const { id: orderId } = useParams()
  const { ingredients } = useOrderDetails(orderId!)
  const { ingredientCount } = useIngredientCount({
    ingredients,
    ingredientId: id,
  })

  return (
    <li className={styles.root}>
      <IngredientThumbnail id={ingredient!._id}/>
      <p className={`${styles.name} text text_type_main-default ml-4`}>
        {ingredient!.name}
      </p>
      <p className={`${styles.price} text text_type_digits-default`}>
        {ingredientCount} x {ingredient!.price}
        {' '}
        <CurrencyIcon type='primary' />
      </p>
    </li>
  )
}
