import { useSelector } from 'react-redux'
import { selectOrderNumber } from '../../store/order/selectors'
import successImage from '../../images/success.png'
import styles from './order-details.module.css'

export const OrderDetails = () => {
  const orderNumber = useSelector(selectOrderNumber)

  return (
    <div className={`${styles.root} pt-25 pr-10 pb-25 pl-10`}>
      <span className='mb-8 text text_type_main-medium'>Your order number is</span>
      <h2 className={`${styles.orderNumber} text text_type_digits-large`}>{orderNumber}</h2>
      <img className='mt-15 mb-15' src={successImage} alt='Success icon'/>
      <p className="mb-2 text text_type_main-default">your order is being prepared</p>
      <p className="text text_type_main-default text_color_inactive">be ready to pick it up at the orbital station</p>
    </div>
  )
}
