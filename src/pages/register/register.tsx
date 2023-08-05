import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { AuthForm } from '../../components/auth-form'
import styles from './register.module.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.root}>
      <h2 className='text text_type_main-medium mb-6'>Create an account</h2>
      <AuthForm>
        <Input
          type='text'
          value={name}
          placeholder='Name'
          onChange={e => setName(e.target.value)}
          required
        />
        <EmailInput
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
        >
          Sign up
        </Button>
      </AuthForm>
      <p className={'text text_type_main-default text_color_inactive mt-20'}>Already have an account?
        {' '}<Link className={styles.link} to='/login'>Log in here!</Link>
      </p>
    </div>
  )
}

export default Register
