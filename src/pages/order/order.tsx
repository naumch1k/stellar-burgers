import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsConnecting } from '../../store/web-socket/selectors'
import { selectOrderById } from '../../store/orders/selectors'
import { ErrorMessage } from '../../components/error-message'
import styles from './order.module.css'


const Order = () => {
  return (
    <div className={styles.root}>
      <ErrorMessage>
        Looks like this order launched into deep space 🚀
        <br/>
        <br/>
        No trace found
      </ErrorMessage>
    </div>
  )
}

export default Order
