import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '../../ui/Button'
import { Loader } from '../../Loader'
import { Modal } from '../../Modal'
import { OrderConfirmation } from '../../OrderConfirmation'
import { useAppDispatch } from '../../../store/store'
import { ingredientsCleared } from '../../../store/burgerConstructor/burgerConstructor.slice'
import { selectBun, selectFillings } from '../../../store/burgerConstructor/burgerConstructor.selectors'
import { orderNumberCleared } from '../../../store/order/order.slice'
import { placeOrderRequest } from '../../../store/order/order.operations'
import { selectOrderState } from '../../../store/order/order.selectors'
import { IIngredient } from '../../../shared/types/ingredient'
import styles from './SubmitGroup.module.css'

export const SubmitGroup = () => {
  const dispatch = useAppDispatch()
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false)
  const { isFetching } = useSelector(selectOrderState)
  const bun = useSelector(selectBun)
  const fillings = useSelector(selectFillings)

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
    <>
      <div className={`${styles.root} mt-10 pr-4 pl-4`}>
        <span className='text text_type_digits-medium mr-10'>
          {totalPrice}
          {' '}
          <CurrencyIcon type='primary' />
        </span>
        <div className={styles.button}>
          <Button
            type='button'
            view='primary'
            size='large'
            onClick={handlePlaceOrderClick}
            disabled={!bun || !fillings.length}
          >
            Place an order
          </Button>
          {isFetching && <Loader/>}
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
      </div>
    </>
  )
}
