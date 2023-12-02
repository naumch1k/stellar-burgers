import { useParams } from 'react-router'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientThumbnail } from '../ui/IngredientThumbnail'
import { useSelector } from 'react-redux'
import { selectIngredientById } from '../../store/ingredients/ingredients.selectors'
import { IRootState } from '../../store/store'
import useOrderDetails from '../../hooks/useOrderDetails'
import styles from './OrderDetailsIngredient.module.css'

interface IOrderDetailsIngredientProps {
  id: string;
}

export const OrderDetailsIngredient = ({ id }: IOrderDetailsIngredientProps) => {
  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, id))
  const { id: orderId } = useParams()
  const { ingredients } = useOrderDetails(orderId!)

  const getIngredientQty = (id: string) => {
    let counter = 0

    ingredients.forEach(item => {
      if (item._id === id) counter += 1
    })

    return counter
  }

  return (
    <li className={styles.root}>
      <IngredientThumbnail id={ingredient!._id}/>
      <p className={`${styles.name} text text_type_main-default ml-4`}>
        {ingredient!.name}
      </p>
      <p className={`${styles.price} text text_type_digits-default`}>
        {getIngredientQty(id)} x {ingredient!.price}
        {' '}
        <CurrencyIcon type='primary' />
      </p>
    </li>
  )
}
