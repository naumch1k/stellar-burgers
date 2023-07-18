import { useState, useEffect, useContext } from 'react'
import { IngredientsContext } from '../../contexts/ingredients-context'
import { ConstructorRow } from '../constructor-row'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/button'
import { Modal } from '../modal'
import { OrderDetails } from '../order-details'
import { IIngredient } from '../../shared/types/ingredient'
import styles from './burger-constructor.module.css'

export const BurgerConstructor = () => {
  const { ingredients } = useContext(IngredientsContext)

  const [totalPrice, setTotalPrice] = useState(0)
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false)

  useEffect(() => {
    const sum = ingredients.reduce((prev: number, ingredient: IIngredient) => {
      return prev + ingredient.price
    }, 0)

    setTotalPrice(sum)
  }, [ingredients])

  const handlePlaceOrderClick = () => setIsOrderDetailsModalOpen(true)
  const handleModalClose = () => setIsOrderDetailsModalOpen(false)

  return (
    <section className={`${styles.root} pt-25 pb-10`}>
      <ConstructorRow
        isLocked
        type='top'
        ingredient={ingredients[0]}
      />
      <ul className={`${styles.list} custom-scroll`}>
        {ingredients.map((ingredient: IIngredient) => (
          <ConstructorRow
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
      </ul>
      <ConstructorRow
        isLocked
        type='bottom'
        ingredient={ingredients[0]}
      />
      <div className={`${styles.submitGroup} mt-10 pr-4 pl-4`}>
        <span className='text text_type_digits-medium mr-10'>
          {totalPrice}
          {' '}
          <CurrencyIcon type='primary'/>
        </span>
        <Button
          type='primary'
          size='large'
          htmlType='button'
          onClick={handlePlaceOrderClick}
        >
          Place an order
        </Button>
      </div>
      {isOrderDetailsModalOpen &&
        <Modal
          isOpen={isOrderDetailsModalOpen}
          onClose={handleModalClose}
        >
          <OrderDetails
            orderNumber='034536'
          />
        </Modal>
      }
    </section>
  )
}
