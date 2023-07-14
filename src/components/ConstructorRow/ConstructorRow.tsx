import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { IngredientProps } from '../../shared/types/ingredient'
import styles from './ConstructorRow.module.css'

interface ConstructorRowProps {
  isLocked?: boolean;
  type?: 'top' | 'bottom';
  ingredient: IngredientProps;
}

export const ConstructorRow = (props: ConstructorRowProps) => {
  const {
    isLocked,
    type,
    ingredient,
  } = props

  return (
    isLocked
      ? <div className={`${styles.lockedItem} ml-8 pr-4`}>
          <ConstructorElement
          type={type}
          text={`${ingredient.name} ${type === 'top' ? '(top)' : 'bottom'}`}
          price={ingredient.price}
          thumbnail={ingredient.image}
          isLocked
        />
      </div>
      : <li
          key={ingredient._id}
          className={`${styles.listItem} mt-4 mb-4`}>
          <DragIcon type="primary"/>
          <ConstructorElement
            text={ingredient.name}
            thumbnail={ingredient.image}
            price={ingredient.price}
          />
        </li>
  )
}
