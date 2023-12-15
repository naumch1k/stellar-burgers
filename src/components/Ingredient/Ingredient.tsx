import { useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Modal } from '../Modal'
import { NutritionFacts } from '../NutritionFacts'
import { selectIngredientById } from '../../store/ingredients/ingredients.selectors'
import { selectIngredientCount } from '../../store/burgerConstructor/burgerConstructor.selectors'
import { IRootState } from '../../store/store'
import { useModal } from '../../hooks/useModal'
import styles from './Ingredient.module.css'

interface IngredientProps {
  id: string;
}

export const Ingredient = ({ id }: IngredientProps) => {
  const ingredient = useSelector((state: IRootState) => selectIngredientById(state, id))
  const { name, image, price } = ingredient!
  const count = useSelector(state => selectIngredientCount(state, id))
  const {
    isModalOpen,
    openModal,
    closeModal,
    closeByBackdropClick,
  } = useModal()

  const [{ beingDragged }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      beingDragged: monitor.isDragging(),
    }),
  })

  return (
    <>
      <li
        ref={dragRef}
        className={`${styles.root} ${beingDragged ? `${styles.beingDragged}` : ''}`}
        onClick={openModal}
      >
        <img className='mr-4 ml-4' src={image} alt={name}/>
        <div className='pt-2'>
          <p className={`${styles.price} text text_type_digits-default`}>
            <span className='mr-2'>{price}</span>
            <CurrencyIcon type='primary'/>
          </p>
          <p className={`${styles.name} text text_type_main-default mt-2`}>{name}</p>
        </div>
        {count > 0 && <Counter count={count} size='default'/>}
      </li>
      {isModalOpen &&
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onBackdropClick={closeByBackdropClick}
        >
          <NutritionFacts
            {...ingredient!}
          />
        </Modal>
      }
    </>
  )
}
