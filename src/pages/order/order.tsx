import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsConnecting } from '../../store/web-socket/selectors'
import { selectOrderById } from '../../store/orders/selectors'
import { useAppDispatch } from '../../store/store'
import { connect, disconnect } from '../../store/web-socket/operations'
import { WS_BASE_URL } from '../../shared/constants/ws-base-url'
import { IRootState } from '../../store/store'
import { OrderDetails } from '../../components/OrderDetails'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Loader } from '../../components/Loader'
import styles from './order.module.css'

const Order = () => {
  const { id } = useParams()
  const order = useSelector((state: IRootState) => selectOrderById(state, id!))
  const dispatch = useAppDispatch()
  const isConnecting = useSelector(selectIsConnecting)

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
    <div className={styles.root}>
      {order ? (
        <OrderDetails/>
      ) : (
        <ErrorMessage>
          Looks like this order launched into deep space 🚀
          <br/>
          <br/>
          No trace found
        </ErrorMessage>
      )}
    </div>
  )
}

export default Order
