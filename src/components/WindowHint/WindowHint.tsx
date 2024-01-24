import { NotificationScreen } from 'components/NotificationScreen'
import styles from './WindowHint.module.css'

export const WindowHint = () => (
  <div className={styles.root}>
    <NotificationScreen>
      <p className='text text_type_main-large'>
        This app shines brightest on&nbsp;larger screens.
      </p>
      <p className='text text_color_inactive'>
        For an&nbsp;out-of-this-world experience, launch this app on&nbsp;a&nbsp;desktop.
        Your voyage begins there!
      </p>
    </NotificationScreen>
  </div>
)
