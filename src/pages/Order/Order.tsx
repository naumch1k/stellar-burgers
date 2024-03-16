import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OrderDetails } from 'components/OrderDetails'
import { ErrorMessage } from 'components/ErrorMessage'
import { Loader } from 'components/Loader'
import { IRootState, useAppDispatch } from 'store/store'
import {
  selectWebSocketState,
  connect,
  disconnect,
} from 'store/webSocket/webSocket.slice'
import { selectOrderById } from 'store/orders/orders.selectors'
import { WS_BASE_URL, ACCESS_TOKEN_KEY } from 'shared/constants'
import styles from './Order.module.css'

const Order = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { isConnecting, isFetching } = useSelector(selectWebSocketState)
  const order = useSelector((state: IRootState) => selectOrderById(state, id!))
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)?.split('Bearer ')[1]

  useEffect(() => {
    dispatch(connect(`${WS_BASE_URL}?token=${accessToken}`))

    return () => {
      dispatch(disconnect())
    }
  }, [dispatch, accessToken])

  if (isConnecting || isFetching) return <Loader/>

  return (
    <div className={styles.root}>
      {order ? (
        <OrderDetails/>
      ) : (
        <ErrorMessage>
          <span>Looks like this order launched into deep space 🚀</span>
          <span>No trace found...</span>
        </ErrorMessage>
      )}
    </div>
  )
}

export default Order
