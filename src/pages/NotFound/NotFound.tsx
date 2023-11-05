import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import { BurgerSvg } from '../../images/icons/burger.svg'

const NotFound = () => (
  <div className={styles.root}>
    <p className={`${styles.paragraph} text text_type_main-large text_color_inactive`}>Houston, we have a problem!</p>
    <h2 className='text text_type_digits-large' aria-label='Error 404: page not found'>
      4
      <BurgerSvg/>
      4
    </h2>
    <Link className={`${styles.link}`} to='/'>
      Back to Main Page
    </Link>
  </div>
)

export default NotFound
