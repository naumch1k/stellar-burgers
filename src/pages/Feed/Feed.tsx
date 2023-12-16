import { ErrorMessage } from 'components/ErrorMessage'
import styles from './Feed.module.css'

const Feed = () => (
  <div className={styles.root}>
    <ErrorMessage>
      <span>Our order feed is&nbsp;experiencing a&nbsp;meteor shower of&nbsp;updates</span>
      <span>Please orbit back later!</span>
    </ErrorMessage>
  </div>
)

export default Feed
