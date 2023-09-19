import { ErrorMessage } from '../../components/error-message'
import styles from './feed.module.css'

const Feed = () => {
  return (
    <div className={styles.root}>
      <ErrorMessage>
        Our order feed is&nbsp;experiencing a&nbsp;meteor shower of&nbsp;updates
        <br/>
        <br/>
        Please orbit back later!
      </ErrorMessage>
    </div>
  )
}

export default Feed
