import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from 'components/ui/Button'
import { Loader } from 'components/Loader'
import { OrderConfirmationModal } from './OrderConfirmationModal'
import { ErrorModal } from 'components/ErrorModal'
import { useAppDispatch } from 'store/store'
import { selectBun, selectFillings } from 'store/burgerConstructor/burgerConstructor.selectors'
import { placeOrderRequest } from 'store/order/order.operations'
import { selectOrderState } from 'store/order/order.selectors'
import { useModal } from 'hooks/useModal'
import { IIngredient } from 'shared/types/ingredient'
import styles from './SubmitGroup.module.css'

export const SubmitGroup = () => {
  const dispatch = useAppDispatch()
  const { isFetching, error } = useSelector(selectOrderState)
  const bun = useSelector(selectBun)
  const fillings = useSelector(selectFillings)
  const {
    isModalOpen,
    openModal,
    closeOrderErrorModal,
  } = useModal()

  const bunsPrice = useMemo(() => bun ? bun.price * 2 : 0, [bun])
  const fillingsPrice = useMemo(() => fillings.reduce((prev: number, filling: IIngredient) => prev + filling.price, 0), [fillings])
  const totalPrice = bunsPrice + fillingsPrice

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
        <OrderConfirmationModal/>
        {error &&
          <ErrorModal
            isOpen={isModalOpen}
            onClose={closeOrderErrorModal}
            onBackdropClick={closeOrderErrorModal}
            errorText={error}
          />
        }
      </div>
    </>
  )
}
