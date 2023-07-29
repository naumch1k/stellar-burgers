import { useState, useEffect, useContext } from 'react'
import { useDrop } from 'react-dnd'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import { ConstructorRow } from '../constructor-row'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/button'
import { Modal } from '../modal'
import { OrderDetails } from '../order-details'
import { IIngredient } from '../../shared/types/ingredient'
import { placeOrder } from '../../shared/utils/main-api'
import styles from './burger-constructor.module.css'

export const BurgerConstructor = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([])
  const { setOrderDetails } = useContext(OrderDetailsContext)

  const [totalPrice, setTotalPrice] = useState(0)
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false)

  const [{ isHovered }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHovered: monitor.isOver()
    }),
    drop: (item: IIngredient) => {
      handleDrop(item)
    },
  })

  const handleDrop = (item: IIngredient) => {
    setIngredients(ingredients => [...ingredients, item])
  }

  useEffect(() => {
    const sum = ingredients.reduce((prev: number, ingredient: IIngredient) => {
      return prev + ingredient.price
    }, 0)

    setTotalPrice(sum)
  }, [ingredients])

  const handlePlaceOrderClick = () => {
    placeOrder(ingredients)
      .then(res => {
        setOrderDetails(res)
        setIsOrderDetailsModalOpen(true)
      })
}

const handleModalClose = () => setIsOrderDetailsModalOpen(false)

return (
  <section className={`${styles.root} pt-25 pb-10`}>
    {/* <ConstructorRow
      isLocked
      type='top'
      ingredient={ingredients[0]}
    /> */}
    <ul
      ref={dropRef}
      className={`${styles.list} ${isHovered ? `${styles.isHovered}` : ''} custom-scroll`}
    >
      {ingredients.map((ingredient: IIngredient) => (
        <ConstructorRow
          key={ingredient._id}
          ingredient={ingredient}
        />
      ))}
    </ul>
    {/* <ConstructorRow
      isLocked
      type='bottom'
      ingredient={ingredients[0]}
    /> */}
    <div className={`${styles.submitGroup} mt-10 pr-4 pl-4`}>
      <span className='text text_type_digits-medium mr-10'>
        {totalPrice}
        {' '}
        <CurrencyIcon type='primary' />
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
        <OrderDetails/>
      </Modal>
    }
  </section>
)
}
