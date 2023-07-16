import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} mt-4 mb-4 pl-5 pr-5 pt-4 pb-4`}>
              {/* TODO: refactor links into NavLink component after routing is set */}
              <a className={`${styles.link} ${styles.linkActive}`} href='#'>
                <BurgerIcon/>
                <span className='ml-2 text text_type_main-default'>Build Your Own</span>
              </a>
            </li>
            <li className={`${styles.navItem} mt-4 mb-4 pl-5 pr-5 pt-4 pb-4`}>
              <a className={`${styles.link}`} href='#'>
                <ListIcon/>
                <span className='ml-2 text text_type_main-default'>Order Board</span>
              </a>
            </li>
          </ul>
        </nav>
        <a className={styles.logo} href='#'>
          <Logo/>
        </a>
        <nav>
          <ul className={styles.navList}>
          <li className={`${styles.navItem} mt-4 mb-4 pl-5 pr-5 pt-4 pb-4`}>
              <a className={`${styles.link}`} href='#'>
                <ProfileIcon/>
                <span className='ml-2 text text_type_main-default'>My Account</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
