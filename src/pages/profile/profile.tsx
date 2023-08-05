import { NavLink } from 'react-router-dom'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Form } from '../../components/form'
import { profileNavigationItems } from '../../shared/constants/profile-navigation-items'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={`${styles.root} pt-30`}>
      <aside>
        <ul className={styles.navList}>
          {profileNavigationItems.map(item => (
            <li key={item.href} className='pt-4 pb-4'>
              <NavLink
                className={({ isActive }) =>
                  `text text_type_main-medium ${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`
                }
                to={item.href}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className='text text_type_main-default text_color_inactive mt-20'>
          Here, you can update your personal information
        </p>
      </aside>
      <Form>
        <Input
          type='text'
          value='Irina Naumchik'
          placeholder='Name'
          disabled
          icon='EditIcon'
          onChange={e => console.log(e.target.value)}
          onIconClick={() => console.log('icon click')}
        />
        <Input
          type='email'
          value='naumchikirina@yahoo.com'
          placeholder='E-mail'
          disabled
          icon='EditIcon'
          onChange={e => console.log(e.target.value)}
          onIconClick={() => console.log('icon click')}
        />
        <Input
          type='password'
          value='1234'
          placeholder='Password'
          disabled
          icon='EditIcon'
          onChange={e => console.log(e.target.value)}
          onIconClick={() => console.log('icon click')}
        />
      </Form>
    </div>
  )
}

export default Profile
