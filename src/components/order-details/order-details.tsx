import { useParams } from 'react-router'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { OrderDetailsIngredient } from '../order-details-ingredient'
import { FormattedDate } from '../ui/formatted-date'
import useOrderDetails from '../../hooks/use-order-details'
import styles from './order-details.module.css'

export const OrderDetails = () => {
  const { id } = useParams()

  const {
    number,
    createdAt,
    name,
    status,
    price,
    uniqueIngredients,
  } = useOrderDetails(id!)

  return (
    <div className={styles.container}>
      <p className={`${styles.number} text text_type_digits-default`}>#{number}</p>
      <h3 className='text text_type_main-medium mt-10'>{name}</h3>
      <p className={`
        ${styles.status}
        ${status === 'done' ? 'text_color_success' : ''}
        text text_type_main-default mt-3
      `}>
        {status}
      </p>
      <ul className={`${styles.list} custom-scroll`}>
        {uniqueIngredients.map((ingredient, i) => {
          return (
            <OrderDetailsIngredient id={ingredient._id} key={i}/>
          )
        })}
      </ul>
      <footer className={`${styles.footer} mt-10`}>
          <FormattedDate
            date={createdAt}
            className='text text_type_main-default text_color_inactive'
          />
          <p className={`${styles.price} text text_type_digits-default`}>
            {price}
            {' '}
            <CurrencyIcon type='primary' />
          </p>
      </footer>
    </div>
  )
}
