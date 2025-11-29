import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OrderCard } from 'components/OrderCard'
import { Loader } from 'components/Loader'
import { IRootState, useAppDispatch } from 'store/store'
import { selectIsFetching } from 'store/orders/orders.selectors'
import { userOrdersRequest } from 'store/orders/orders.operations'
import { OrderListMessages, OrderListVariant } from 'shared/constants/orderListMessages'
import { IOrder } from 'shared/types'
import styles from './OrderList.module.css'

interface IOrdersListProps {
  selector: (state: IRootState) => IOrder[];
  variant: OrderListVariant;
}

export const OrdersList = ({ selector, variant }: IOrdersListProps) => {
  const dispatch = useAppDispatch()
  const isFetching = useSelector(selectIsFetching)
  const orders = useSelector(selector)

  useEffect(() => {
    dispatch(userOrdersRequest())
  }, [dispatch])

  return (
    <>
      {isFetching && <Loader/>}

      {!isFetching && orders.length > 0 && (
        <ul className={`${styles.root} custom-scroll`}>
          {orders.map((order: IOrder) => (
            <OrderCard key={order._id} id={order._id} showStatus/>
          ))}
        </ul>
      )}

      {!isFetching && orders.length === 0 && (
        <p className={`${styles.message} text text_type_main-default`}>
          {OrderListMessages[variant]}
        </p>
      )}
    </>
  )
}
