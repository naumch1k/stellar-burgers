import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Form } from '../../components/form'
import { profileNavigationItems } from '../../shared/constants/profile-navigation-items'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/auth/selectors'
import styles from './profile.module.css'

const Profile = () => {
  const user = useSelector(selectUser)
  // TODO: refactor forms with useForm hook
  const [name, setName] = useState(user!.name)
  const [email, setEmail] = useState(user!.email)
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

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
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={name}
          placeholder='Name'
          disabled
          icon='EditIcon'
          onChange={e => console.log(e.target.value)}
          onIconClick={() => console.log('icon click')}
        />
        <Input
          type='email'
          value={email}
          placeholder='E-mail'
          disabled
          icon='EditIcon'
          onChange={e => console.log(e.target.value)}
          onIconClick={() => console.log('icon click')}
        />
        <Input
          type='password'
          value={password}
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
