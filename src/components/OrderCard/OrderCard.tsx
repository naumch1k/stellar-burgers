import { Link } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientThumbnail } from 'components/ui/IngredientThumbnail'
import { FormattedDate } from 'components/ui/FormattedDate'
import useOrderDetails from 'hooks/useOrderDetails'
import styles from './OrderCard.module.css'

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
    uniqueIngredients,
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
          <h3 className={`${styles.name} text text_type_main-medium`}>{name}</h3>
          <p className={`${styles.status} ${status === 'done' ? 'text_color_success' : ''} text text_type_main-default mt-2`}>{status}</p>
        </div>
        <footer className={styles.footer}>
          <ul className={styles.ingredients}>
            {uniqueIngredients.map((ingredient, i) => {
              if (i < ingredientsToRender) {
                return (
                  <li
                    key={ingredient._id}
                    className={styles.ingredient}
                    style={{zIndex: `calc(${ingredientsToRender} - ${i})`}}
                  >
                    <IngredientThumbnail id={ingredient._id}/>
                  </li>
                )
              } else if (i === ingredientsToRender) {
                return (
                  <li
                    key={ingredient._id}
                    className={styles.ingredient}
                    style={{zIndex: `calc(${ingredientsToRender} - ${i})`}}
                  >
                    <IngredientThumbnail
                      id={ingredient._id}
                      closingIngredient
                      restIngredientsCount={uniqueIngredients.length - i}
                    />
                  </li>
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
