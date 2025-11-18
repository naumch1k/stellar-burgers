import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OrderCard } from 'components/OrderCard'
import { Loader } from 'components/Loader'
import { useAppDispatch } from 'store/store'
import { selectIsFetching, selectOrders } from 'store/orders/orders.selectors'
import { userOrdersRequest } from 'store/orders/orders.operations'
import { IOrder } from 'shared/types'
import styles from './OrderList.module.css'

export const OrdersList = () => {
  const dispatch = useAppDispatch()
  const isFetching = useSelector(selectIsFetching)
  const orders = useSelector(selectOrders)

  useEffect(() => {
    dispatch(userOrdersRequest())
  }, [dispatch])

  if (isFetching) return <Loader/>

  return (
    orders.length
    ? <ul className={`${styles.root} custom-scroll`}>
      {orders.map((order: IOrder) => (
        <OrderCard
          key={order._id}
          id={order._id}
        />
      ))}
    </ul>
    : <p className='text text_type_main-medium mt-4'>You haven't ordered anything yet</p>
  )
}
