import { useDrop } from 'react-dnd'
import { BunElement } from './BunElement'
import { FillingList } from './FillingList'
import { SubmitGroup } from './SubmitGroup'
import { useAppDispatch } from 'store/store'
import { addBun, addFilling } from 'store/burgerConstructor/burgerConstructor.slice'
import { IIngredient } from 'shared/types'
import styles from './BurgerConstructor.module.css'

export const BurgerConstructor = () => {
  const dispatch = useAppDispatch()

  const [{ isHovered }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHovered: monitor.isOver()
    }),
    drop: (item: IIngredient) => {
      handleDrop(item)
    },
  })

  const handleDrop = (ingredient: IIngredient) => {
    if (ingredient.type === 'bun') {
      dispatch(addBun(ingredient))
    } else {
      dispatch(addFilling(ingredient))
    }
  }

  return (
    <section className={`${styles.root} pt-25 pb-10`}>
      <div ref={dropRef} className={isHovered ? `${styles.isHovered}` : ''}>
        <BunElement type='top'/>
        <FillingList/>
        <BunElement type='bottom'/>
      </div>
      <SubmitGroup/>
    </section>
  )
}
