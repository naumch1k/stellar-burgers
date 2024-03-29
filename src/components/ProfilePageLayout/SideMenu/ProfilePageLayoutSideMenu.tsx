import { useMatch, NavLink } from 'react-router-dom'
import { profileNavigationItems } from 'shared/constants/profileNavigationItems'
import styles from './ProfilePageLayoutSideMenu.module.css'

export const ProfilePageLayoutSideMenu = () => {
  const isIndex = useMatch('/profile')

  return (
    <aside className='pt-30'>
      <ul className={styles.navList}>
        {profileNavigationItems.map(item => (
          <li key={item.href} className='pt-4 pb-4'>
            <NavLink
              className={({ isActive }) =>
                `text text_type_main-medium ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
              }
              to={item.href}
              end
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        {isIndex
          ? 'Here, you can update your personal information'
          : 'Here, you can view your order history'
        }
      </p>
    </aside>
  )
}
