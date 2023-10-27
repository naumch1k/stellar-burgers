import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { BunElement } from './BunElement'
import { FillingElement } from './FillingElement'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/button'
import { Loader } from '../Loader'
import { Modal } from '../Modal'
import { OrderConfirmation } from '../OrderConfirmation'
import { selectBun, selectFillings } from '../../store/burgerConstructor/selectors'
import { selectOrderState } from '../../store/order/selectors'
import {
  bunAdded,
  fillingAdded,
  ingredientsCleared,
} from '../../store/burgerConstructor/operations'
import { placeOrderRequest } from '../../store/order/operations'
import { orderNumberCleared } from '../../store/order/operations'
import { IIngredient } from '../../shared/types/ingredient'
import { useAppDispatch } from '../../store/store'
import styles from './BurgerConstructor.module.css'

export const BurgerConstructor = () => {
  const dispatch = useAppDispatch()
  const bun = useSelector(selectBun)
  const fillings = useSelector(selectFillings)
  const { isFetching } = useSelector(selectOrderState)
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

  const handleDrop = (ingredient: IIngredient) => {
    if (ingredient.type === 'bun') {
      dispatch(bunAdded(ingredient))
    } else {
      dispatch(fillingAdded(ingredient))
    }
  }

  const bunsPrice = useMemo(() => bun ? bun.price * 2 : 0, [bun])
  const fillingsPrice = useMemo(() => fillings.reduce((prev: number, filling: IIngredient) => prev + filling.price, 0), [fillings])
  const totalPrice = bunsPrice + fillingsPrice

  const handlePlaceOrderClick = () => {
    if (bun && fillings.length) {

      const ingredients = [bun, ...fillings, bun]
        .map((ingredient: IIngredient) => ingredient._id)

      dispatch(placeOrderRequest({ ingredients }))
        .then(() => setIsOrderDetailsModalOpen(true))

    }
  }

  const handleModalClose = () => {
    dispatch(orderNumberCleared())
    dispatch(ingredientsCleared())
    setIsOrderDetailsModalOpen(false)
  }

  return (
    <section className={`${styles.root} pt-25 pb-10`}>
      <div ref={dropRef} className={isHovered ? `${styles.isHovered}` : ''}>
        <BunElement type='top'/>
        <ul className={`${styles.list} custom-scroll`}>
          {fillings.map((ingredient: IIngredient, i) => (
            <FillingElement
              key={i}
              index={i}
              ingredient={ingredient}
            />
          ))}
        </ul>
        <BunElement type='bottom'/>
      </div>
      <div className={`${styles.submitGroup} mt-10 pr-4 pl-4`}>
        <span className='text text_type_digits-medium mr-10'>
          {totalPrice}
          {' '}
          <CurrencyIcon type='primary' />
        </span>
        <div className={styles.submitButton}>
          <Button
            type='primary'
            size='large'
            htmlType='button'
            onClick={handlePlaceOrderClick}
            disabled={!bun || !fillings.length}
          >
            Place an order
          </Button>
          {isFetching && <Loader/>}
        </div>
      </div>
      {isOrderDetailsModalOpen &&
        <Modal
          isOpen={isOrderDetailsModalOpen}
          onClose={handleModalClose}
        >
          <OrderConfirmation/>
        </Modal>
      }
      {/* TODO: notify user if there is an error sending order */}
    </section>
  )
}
