import { useSelector } from 'react-redux'
import { selectBun } from '../../../store/burgerConstructor/selectors'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './bun-element.module.css'

interface IBunElementProps {
  type: 'top' | 'bottom';
}

export const BunElement = ({ type }: IBunElementProps) => {
  const bun = useSelector(selectBun)

  return (
    <div className={`${styles.root} ml-8 pr-4`}>
      <ConstructorElement
        type={type}
        text={bun ? `${bun.name} ${type === 'top' ? '(top)' : 'bottom'}` : 'Choose your bun'}
        price={bun ? bun.price : 0}
        thumbnail={bun ? bun.image : 'https://stellarburgers.nomoreparties.site/static/media/loading.89540200.svg'}
        isLocked
      />
    </div>
  )
}
