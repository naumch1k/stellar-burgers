import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { OrderDetails } from 'components/OrderDetails'
import { ErrorMessage } from 'components/ErrorMessage'
import { IRootState } from 'store/store'
import { selectOrderById } from 'store/orders/orders.selectors'
import styles from './Order.module.css'

const Order = () => {
  const { id } = useParams()
  const order = useSelector((state: IRootState) => selectOrderById(state, id!))

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
