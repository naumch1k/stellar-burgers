import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { useAppDispatch } from 'store/store'
import { moveFilling, removeFilling } from 'store/burgerConstructor/burgerConstructor.slice'
import { IIngredient } from 'shared/types'
import styles from './FillingListItem.module.css'

interface IFillingListItemProps {
  index: number;
  ingredient: IIngredient;
}

interface IDraggedItem {
  index: number;
}

export const FillingListItem = ({ index, ingredient }: IFillingListItemProps) => {
  const dispatch = useAppDispatch()
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

      dispatch(moveFilling({ fromIndex: item.index, toIndex: index }))
    },
  })

  const handleRemoveFilling = () => dispatch(removeFilling(index))


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
        handleClose={handleRemoveFilling}
      />
    </li>
  )
}
