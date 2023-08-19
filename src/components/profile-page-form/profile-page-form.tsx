import { useState, useEffect } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Form } from '../../components/form'
import { useSelector } from 'react-redux'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'
import { useAppDispatch } from '../../store/store'
import { userInfoUpdateRequest } from '../../store/auth/operations'
import { errorCleared } from '../../store/auth/operations'
import styles from './profile-page-form.module.css'

export const ProfilePageForm = () => {
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
  )
}
