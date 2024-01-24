import { NotificationScreen } from 'components/NotificationScreen'
import styles from './Feed.module.css'

const Feed = () => (
  <div className={styles.root}>
    <NotificationScreen>
      <p className='text text_type_main-large'>
        Our order board is&nbsp;experiencing a&nbsp;meteor shower of&nbsp;updates
      </p>
      <p className='text text_color_inactive'>
        Stay tuned for a&nbsp;cosmic culinary evolution. Orbit back later to&nbsp;explore our latest features!
      </p>
    </NotificationScreen>
  </div>
)

export default Feed
