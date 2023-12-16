import styles from './Loader.module.css'
import { LoaderSvg } from 'images/icons/loader.svg'

export const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderSvg/>
    </div>
  )
}
