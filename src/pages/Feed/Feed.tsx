import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OrdersList } from 'components/OrderList'
import { useAppDispatch } from 'store/store'
import {
  selectCompletedNumbers,
  selectPendingNumbers,
  selectOrders,
  selectTotalOrderNumber,
  selectTotalTodayOrderNumber,
} from 'store/orders/orders.selectors'
import { allOrdersRequest } from 'store/orders/orders.operations'
import styles from './Feed.module.css'

const Feed = () => {
  const dispatch = useAppDispatch()
  const completedOrderNumbers = useSelector(selectCompletedNumbers)
  const pendingOrderNumbers = useSelector(selectPendingNumbers)
  const totalOrderNumber = useSelector(selectTotalOrderNumber)
  const totalToday = useSelector(selectTotalTodayOrderNumber)

  useEffect(() => {
    dispatch(allOrdersRequest())
  }, [dispatch])

  return (
    <>
      <h1 className='text text_type_main-large mt-10'>Orders</h1>
      <section className={`${styles.root} pt-5`}>
        <div className={styles.leftColumn}>
          <OrdersList selector={selectOrders} variant='feed'/>
        </div>

        <dl className={`${styles.orderStats} custom-scroll`}>
          <div>
            <dt className='text text_type_main-medium mb-6'>Please collect:</dt>
            <dd className={styles.orderQueueWrapper}>
              <ul className={styles.orderQueue}>
                {completedOrderNumbers
                  .map(orderNumber => (
                    <li key={orderNumber} className='text text_type_digits-default text_color_success'>
                      {orderNumber}
                    </li>
                  ))
                }
              </ul>
            </dd>
          </div>
          <div>
            <dt className='text text_type_main-medium mb-6'>Preparing:</dt>
            <dd className={styles.orderQueueWrapper}>
              <ul className={styles.orderQueue}>
                {pendingOrderNumbers
                  .map(orderNumber => (
                    <li key={orderNumber} className='text text_type_digits-default'>
                      {orderNumber}
                    </li>
                  ))
                }
              </ul>
            </dd>
          </div>
          <div className={styles.total}>
            <dt className='text text_type_main-medium'>All-time completed orders:</dt>
            <dd className='text text_type_digits-large'>{totalOrderNumber}</dd>
          </div>
          <div className={styles.totalToday}>
            <dt className='text text_type_main-medium'>Completed Today:</dt>
            <dd className='text text_type_digits-large'>{totalToday}</dd>
          </div>
        </dl>
      </section>
    </>
  )
}

export default Feed
