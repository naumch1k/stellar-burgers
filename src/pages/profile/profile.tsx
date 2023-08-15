import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Form } from '../../components/form'
import { profileNavigationItems } from '../../shared/constants/profile-navigation-items'
import { useSelector } from 'react-redux'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'
import { useAppDispatch } from '../../store/store'
import { userInfoUpdateRequest } from '../../store/auth/operations'
import { errorCleared } from '../../store/auth/operations'
import styles from './profile.module.css'

const Profile = () => {
  const dispatch = useAppDispatch()
  const { isFetching, error, user } = useSelector(selectAuthState)

  const initialFormValues = {
    name: user!.name,
    email: user!.email,
    password: ''
  }

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation(initialFormValues)

  const [inputsDisabledState, setInputsDisabledState] = useState({
    name: true,
    email: true,
    password: true,
  })

  const isBeingEdited = Object.values(inputsDisabledState).some(state => !state)

  const hasBeenEdited = JSON.stringify(values) !== JSON.stringify(initialFormValues)

  const handleIconToggle = (inputName: string) => {
    setInputsDisabledState(prevState => ({
      ...prevState,
      [inputName]: !prevState[inputName as keyof typeof inputsDisabledState],
    }))
  }

  const handleCancelEditing = () => {
    setInputsDisabledState(prevState => ({
      ...prevState,
      name: true,
      email: true,
      password: true,
    }))
    resetForm()
    dispatch(errorCleared())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(userInfoUpdateRequest({
      name: values.name,
      email: values.email,
      password: values.password
    }))
  }

  useEffect(() => {
    if (!isFetching && !error) {
      setInputsDisabledState(prevState => ({
        ...prevState,
        name: true,
        email: true,
        password: true,
      }))
    }
  }, [isFetching, error])

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
          errorText={CustomValidationMessages.NAME_ERROR}
          icon={inputsDisabledState.name ? 'EditIcon' : 'CloseIcon'}
          onIconClick={() => handleIconToggle('name')}
          onChange={handleChange}
          required
          disabled={inputsDisabledState.name}
        />
        <Input
          value={values.email}
          name='email'
          type='email'
          placeholder='E-mail'
          error={!!errors.email}
          errorText={CustomValidationMessages.EMAIL_ERROR}
          icon={inputsDisabledState.email ? 'EditIcon' : 'CloseIcon'}
          onIconClick={() => handleIconToggle('email')}
          onChange={handleChange}
          required
          disabled={inputsDisabledState.email}
        />
        <Input
          value={values.password}
          name='password'
          type='password'
          placeholder='Password'
          error={!!errors.password}
          errorText={CustomValidationMessages.PASSWORD_ERROR}
          icon={inputsDisabledState.password ? 'EditIcon' : 'CloseIcon'}
          onIconClick={() => handleIconToggle('password')}
          onChange={handleChange}
          minLength={8}
          required
          disabled={inputsDisabledState.password}
        />
        <Form.Error>
          {error}
        </Form.Error>
        {isBeingEdited &&
          <div className={styles.submitGroup}>
            <Button
              htmlType='button'
              type='secondary'
              onClick={handleCancelEditing}
              disabled={isFetching}
            >
              Cancel
            </Button>
            <Form.SubmitButton isFetching={isFetching}>
              <Button
                htmlType='submit'
                type='primary'
                disabled={isFetching || !isValid || !hasBeenEdited}
              >
                Save
              </Button>
            </Form.SubmitButton>
          </div>
        }
      </Form>
    </div>
  )
}

export default Profile
