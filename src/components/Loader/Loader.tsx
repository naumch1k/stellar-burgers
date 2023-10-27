import styles from './Loader.module.css'
import { LoaderSvg } from './loader.svg'

export const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderSvg/>
    </div>
  )
}
