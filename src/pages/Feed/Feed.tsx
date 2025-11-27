import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from 'components/Loader'
import { OrderCard } from 'components/OrderCard'
import { useAppDispatch } from 'store/store'
import {
  selectIsFetching,
  selectCompletedNumbers,
  selectPendingNumbers,
  selectOrders,
  selectTotalOrderNumber,
  selectTotalTodayOrderNumber,
} from 'store/orders/orders.selectors'
import { allOrdersRequest } from 'store/orders/orders.operations'
import { IOrder } from 'shared/types'
import styles from './Feed.module.css'

const Feed = () => {
  const dispatch = useAppDispatch()
  const isFetching = useSelector(selectIsFetching)
  const orders = useSelector(selectOrders)
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
        <div>
          {isFetching && <Loader/>}

          {!isFetching && orders.length > 0 && (
            <ul className={`${styles.orderList} custom-scroll`}>
              {orders.map((order: IOrder) => (
                <OrderCard key={order._id} id={order._id}/>
              ))}
            </ul>
          )}

          {!isFetching && orders.length === 0 && (
            <p className="text text_type_main-default">
              Zero orders detected 🤔 Did someone zap all cravings into a black hole?!
            </p>
          )}
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
