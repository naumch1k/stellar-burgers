import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from 'components/ui/Button'
import { Loader } from 'components/Loader'
import { OrderConfirmationModal } from './OrderConfirmationModal'
import { ErrorModal, useErrorModal } from 'components/ErrorModal'
import useOrderPriceCalculator from './hooks/useOrderPriceCalculator'
import { useAppDispatch } from 'store/store'
import { selectBun, selectFillings } from 'store/burgerConstructor/burgerConstructor.selectors'
import { placeOrderRequest } from 'store/order/order.operations'
import { selectOrderState } from 'store/order/order.selectors'
import { IIngredient } from 'shared/types'
import styles from './SubmitGroup.module.css'

export const SubmitGroup = () => {
  const dispatch = useAppDispatch()
  const { isFetching, error } = useSelector(selectOrderState)
  const bun = useSelector(selectBun)
  const fillings = useSelector(selectFillings)
  const { orderPrice } = useOrderPriceCalculator()
  const {
    isModalOpen,
    openModal,
  } = useErrorModal()

  const handlePlaceOrderClick = () => {
    if (bun && fillings.length) {
      const ingredients = [bun, ...fillings, bun]
        .map((ingredient: IIngredient) => ingredient._id)

      dispatch(placeOrderRequest({ ingredients }))
        .then(() => openModal())
    }
  }

  return (
    <>
      <div className={`${styles.root} mt-10 pr-4 pl-4`}>
        <span className='text text_type_digits-medium mr-10'>
          {orderPrice}
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
        <OrderConfirmationModal/>
        {error &&
          <ErrorModal
            isOpen={isModalOpen}
            errorText={error}
          />
        }
      </div>
    </>
  )
}
