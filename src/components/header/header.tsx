import { Link, NavLink, useMatch } from 'react-router-dom'
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
            <li className='mt-4 mb-4 pl-5 pr-5 pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to='/'
              >
                <BurgerIcon  type='primary'/>
                <span className='ml-2'>Build Your Own</span>
              </NavLink>
            </li>
            <li className='mt-4 mb-4 pl-5 pr-5 pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to='/feed'
              >
                <ListIcon  type='primary'/>
                <span className='ml-2'>Order Board</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link className={styles.logo} to='/'>
          <Logo/>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className='mt-4 mb-4 pl-5 pr-5 pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to='/profile'
              >
                <ProfileIcon type='primary'/>
                <span className='ml-2'>My account</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
