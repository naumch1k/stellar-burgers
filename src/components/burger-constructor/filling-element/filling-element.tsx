import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import store from '../../../store/store'
import { fillingMoved, fillingDeleted } from '../../../store/burgerConstructor/operations'
import { IIngredient } from '../../../shared/types/ingredient'
import styles from './filling-element.module.css'

interface IFillingElementProps {
  index: number;
  ingredient: IIngredient;
}

interface IDraggedItem {
  index: number;
}

export const FillingElement = ({ index, ingredient }: IFillingElementProps) => {
  const { name, price, image } = ingredient

  const [, dragRef] = useDrag({
    type: 'addedIngredient',
    item: () => {
      return { index }
    },
  })

  const [{ isHovered }, dropRef] = useDrop({
    accept: 'addedIngredient',
    collect: monitor => ({
      isHovered: monitor.isOver(),
    }),
    drop: (item: IDraggedItem) => {
      if (item.index === index) return

      store.dispatch(fillingMoved({ fromIndex: item.index, toIndex: index }))
    },
  })

  const onDelete = () => store.dispatch(fillingDeleted(index))


  const ref = useRef<HTMLLIElement>(null)
  dragRef(dropRef(ref))

  return (
    <li
      ref={ref}
      className={`${styles.root} ${isHovered ? `${styles.isHovered}` : ''} mt-4 mb-4`}
    >
      <DragIcon type="primary"/>
      <ConstructorElement
        text={name}
        thumbnail={image}
        price={price}
        handleClose={onDelete}
      />
    </li>
  )
}
