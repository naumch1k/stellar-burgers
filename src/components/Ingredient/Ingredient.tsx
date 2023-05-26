import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientProps } from '../../shared/types/ingredient'

import styles from './Ingredient.module.css'

export const Ingredient = (props: IngredientProps) => {
  const {
    name,
    image,
    price,
  } = props

  return (
    <li className={styles.root}>
      <img className='mr-4 ml-4' src={image} alt={name} />
      <div className='pt-4'>
        <p className={`${styles.price} text text_type_digits-default`}>
          <span className='mr-2'>{price}</span>
          <CurrencyIcon type='primary' />
        </p>
        <p className={`${styles.name} text text_type_main-default mt-2`}>{name}</p>
      </div>
    </li>
  )
}
