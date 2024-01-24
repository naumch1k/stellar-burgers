import { NotificationScreen } from 'components/NotificationScreen'
import { Link } from 'components/ui/Link'
import styles from './NotFound.module.css'

const NotFound = () => (
  <div className={styles.root}>
    <NotificationScreen>
      <p className='text text_type_main-large'>
        Houston,
        we&nbsp;have&nbsp;a&nbsp;problem!
        404&nbsp;error detected
      </p>
      <p className='text text_color_inactive'>
        The page you're looking for isn't here.
        It&nbsp;could be&nbsp;an&nbsp;incorrect address, deletion, nonexistence,
        or&nbsp;maybe you&rsquo;re just lost in&nbsp;a&nbsp;cosmic daydream..
      </p>
      <Link
        className={styles.link}
        href="/"
        view="secondary"
        size="medium"
      >
        Back to Main Page
      </Link>
    </NotificationScreen>
  </div>
)

export default NotFound
