import { NavLink } from 'react-router-dom'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Form } from '../../components/form'
import { profileNavigationItems } from '../../shared/constants/profile-navigation-items'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import styles from './profile.module.css'

const Profile = () => {
  const user = useSelector(selectUser)
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation({
    name: user!.name,
    email: user!.email,
    password: '',
  })

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
          value={values.name}
          name='name'
          type='text'
          placeholder='Name'
          error={!!errors.name}
          errorText={errors.name}
          icon='EditIcon'
          onIconClick={() => console.log('icon click')}
          onChange={handleChange}
          disabled
        />
        <Input
          value={values.email}
          name='email'
          type='email'
          placeholder='E-mail'
          error={!!errors.email}
          errorText={errors.email}
          icon='EditIcon'
          onIconClick={() => console.log('icon click')}
          onChange={handleChange}
          disabled
        />
        <Input
          value={values.password}
          name='password'
          type='password'
          placeholder='Password'
          error={!!errors.password}
          errorText={errors.password}
          icon='EditIcon'
          onIconClick={() => console.log('icon click')}
          onChange={handleChange}
          disabled
        />
      </Form>
    </div>
  )
}

export default Profile
