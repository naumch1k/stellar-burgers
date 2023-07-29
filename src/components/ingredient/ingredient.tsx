import { useState, useEffect, useContext } from 'react'
import { useDrag } from 'react-dnd'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../shared/types/ingredient'
import { Modal } from '../modal'
import { NutritionFacts } from '../nutrition-facts'
import styles from './ingredient.module.css'

export const Ingredient = (ingredient: IIngredient) => {
  const {
    id,
    name,
    image,
    price,
  } = ingredient

  const { orderDetails } = useContext(OrderDetailsContext)
  const [count, setCount] = useState(0)
  const [isNutritionFactsModalOpen, setIsNutritionFactsModalOpen] = useState(false)

  const [{ beingDragged }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      beingDragged: monitor.isDragging(),
    }),
  })

  const handleIngredientClick = () => {
    setIsNutritionFactsModalOpen(true)
  }

  const handleModalClose = () => setIsNutritionFactsModalOpen(false)

  useEffect(() => {
    let ingredientCount = 0

    if (orderDetails?.ingredients) {
      orderDetails.ingredients.forEach((ingredient: IIngredient)  => {
        if (id === ingredient.id){
          ingredientCount += 1
        }
      })
    }

    setCount(ingredientCount)
  }, [orderDetails, id])

  return (
    <>
      <li
        ref={dragRef}
        className={`${styles.root} ${beingDragged ? `${styles.beingDragged}` : ''}`}
        onClick={handleIngredientClick}
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
      {isNutritionFactsModalOpen &&
        <Modal
          isOpen={isNutritionFactsModalOpen}
          onClose={handleModalClose}
        >
          <NutritionFacts
            {...ingredient}
          />
        </Modal>
      }
    </>
  )
}
