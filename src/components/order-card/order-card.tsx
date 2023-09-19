import { Link } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { OrderCardIngredient } from '../order-card-ingredient'
import { FormattedDate } from '../ui/formatted-date'
import useOrderDetails from '../../hooks/use-order-details'
import styles from './order-card.module.css'

const ingredientsToRender = 5;

interface IOrderCardProps {
  id: string;
}

export const OrderCard = ({ id }: IOrderCardProps) => {
  const {
    number,
    createdAt,
    name,
    status,
    price,
    ingredients,
  } = useOrderDetails(id)

  return (
    <Link
      className={`${styles.link}`}
      to={`/profile/orders/${id}`}
    >
      <li className={`${styles.root} pt-6 pr-6 pb-6 pl-6`}>
        <header className={styles.header}>
          <p className='text text_type_digits-default'>#{number}</p>
          <FormattedDate
            date={createdAt}
            className='text text_type_main-default text_color_inactive'
          />
        </header>
        <div>
          <h3 className='text text_type_main-medium'>{name}</h3>
          <p className={`${styles.status} ${status === 'done' ? 'text_color_success' : ''} text text_type_main-default mt-2`}>{status}</p>
        </div>
        <footer className={styles.footer}>
          <ul className={styles.ingredients}>
            {ingredients.map((ingredient, i) => {
              if (i < ingredientsToRender) {
                return (
                  <OrderCardIngredient
                    key={i}
                    id={ingredient._id}
                    index={i}
                  />
                )
              } else if (i === ingredientsToRender) {
                return (
                  <OrderCardIngredient
                    key={i}
                    id={ingredient._id}
                    index={i}
                    closingIngredient
                    restIngredientsCount={`+${ingredients.length - ingredientsToRender}`}
                  />
                )
              }
              return null
            })}
          </ul>
          <p className={`${styles.price} text text_type_digits-default`}>
            {price}
            {' '}
            <CurrencyIcon type='primary' />
          </p>
        </footer>
      </li>
    </Link>
  )
}
