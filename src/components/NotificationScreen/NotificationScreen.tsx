import { ReactNode } from 'react'
import { BurgerSvg } from 'images/icons/burger.svg'
import styles from './NotificationScreen.module.css'

interface INotificationScreenProps {
  children: ReactNode;
}

export const NotificationScreen = ({ children }: INotificationScreenProps) => (
  <div className={styles.root}>
    <BurgerSvg className={styles.image}/>
    {children}
  </div>
)
