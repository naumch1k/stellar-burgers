import { useSelector } from 'react-redux'
import { FillingListItem } from './Item'
import { selectFillings } from 'store/burgerConstructor/burgerConstructor.selectors'
import { IIngredient } from 'shared/types'
import styles from './FillingList.module.css'

export const FillingList = () => {
  const fillings = useSelector(selectFillings)

  return (
    <ul className={`${styles.root} custom-scroll`}>
      {fillings.map((ingredient: IIngredient, i) => (
        <FillingListItem
          key={i}
          index={i}
          ingredient={ingredient}
        />
      ))}
    </ul>
  )
}
