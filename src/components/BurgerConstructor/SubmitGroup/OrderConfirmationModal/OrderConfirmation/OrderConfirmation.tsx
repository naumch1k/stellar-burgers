import successImage from 'images/success.png'
import styles from './OrderConfirmation.module.css'

interface IOrderConfirmationProps {
  orderNumber: number;
}

export const OrderConfirmation = ({ orderNumber }: IOrderConfirmationProps) => (
  <div className={styles.root}>
    <span className='mb-8 text text_type_main-medium'>Your order number is</span>
    <h2 className={`${styles.orderNumber} text text_type_digits-large`}>{orderNumber}</h2>
    <img className='mt-15 mb-15' src={successImage} alt='Success icon'/>
    <p className='mb-2 text text_type_main-default'>your order is being prepared</p>
    <p className='text text_type_main-default text_color_inactive'>be ready to pick it up at the orbital station</p>
  </div>
)
