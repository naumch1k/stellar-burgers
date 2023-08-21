import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OrderCard } from '../order-card'
import { Loader } from '../loader'
import { selectIsConnecting } from '../../store/web-socket/selectors'
import { selectOrders } from '../../store/orders/selectors'
import { useAppDispatch } from '../../store/store'
import { connect, disconnect } from '../../store/web-socket/operations'
import { WS_BASE_URL } from '../../shared/constants/ws-base-url'
import { IOrder } from '../../shared/types/order'
import styles from './order-list.module.css'

export const OrdersList = () => {
  const dispatch = useAppDispatch()
  const isConnecting = useSelector(selectIsConnecting)
  const orders = useSelector(selectOrders)
  // TODO: refactor to helper func
  const accessToken = localStorage.getItem('accessToken')?.split('Bearer ')[1]

  useEffect(() => {
    dispatch(connect(`${WS_BASE_URL}?token=${accessToken}`))

    return () => {
      dispatch(disconnect())
    }
  }, [])

  if (isConnecting) return <Loader/>

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
