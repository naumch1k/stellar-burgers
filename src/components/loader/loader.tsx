import styles from './loader.module.css'
import { LoaderSvg } from './loader.svg'

export const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderSvg/>
    </div>
  )
}
