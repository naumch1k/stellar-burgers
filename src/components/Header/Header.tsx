import { Link, NavLink } from 'react-router-dom'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUserName } from '../../store/auth/selectors'
import styles from './Header.module.css'

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const userName = useSelector(selectUserName)

  return (
    <header className={`${styles.root} pt-4 pb-4`}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.navList}>
            <li className='pl-5 pr-5 pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to='builder'
              >
                <BurgerIcon  type='primary'/>
                <span className='ml-2'>Build Your Own</span>
              </NavLink>
            </li>
            <li className='pl-5 pr-5 pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to='feed'
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
        <div className={`${styles.userActions} pl-5 pr-5 pt-4 pb-4`}>
          <NavLink
            className={({ isActive }) =>
              `text text_type_main-default ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
            }
            to='/profile'
          >
            {isAuthenticated && <ProfileIcon type='primary'/>}
            <span className='ml-2'>
              {isAuthenticated ? `${userName}` : 'Login'}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
