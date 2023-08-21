import { useSelector } from 'react-redux'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FormattedDate } from '../ui/formatted-date'
import { selectOrderById } from '../../store/orders/selectors'
import { IRootState } from '../../store/store'
import styles from './order-card.module.css'

interface IOrderCardProps {
  id: string;
}

export const OrderCard = ({ id }: IOrderCardProps) => {
  const order = useSelector((state: IRootState) => selectOrderById(state, id))

  const { number, createdAt, name, status } = order!

  return (
    <li className={`${styles.root} pt-6 pr-6 pb-6 pl-6`}>
      <header className={styles.header}>
        <p className='text text_type_digits-default'>#{number}</p>
        <FormattedDate
          date={new Date(createdAt)}
          className='text text_type_main-default text_color_inactive'
        />
      </header>
      <div>
        <h3 className='text text_type_main-medium'>{name}</h3>
        <p className={`${styles.status} ${status === 'done' ? 'text_color_success' : ''} text text_type_main-default mt-2`}>{status}</p>
      </div>
      <footer className={styles.footer}>
        <div></div>
        <p className={`${styles.price} text text_type_digits-default`}>
          480
          {' '}
          <CurrencyIcon type='primary' />
        </p>
      </footer>
    </li>
  )
}