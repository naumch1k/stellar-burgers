import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { IIngredient } from '../../../shared/types/ingredient'
import styles from './filling-element.module.css'

interface IFillingElementProps {
  ingredient?: IIngredient;
}

export const FillingElement = ({ ingredient }: IFillingElementProps) => {

  return (
    <li className={`${styles.root} mt-4 mb-4`}>
      <DragIcon type="primary"/>
      <ConstructorElement
        text={ingredient!.name}
        thumbnail={ingredient!.image}
        price={ingredient!.price}
      />
    </li>
  )
}
