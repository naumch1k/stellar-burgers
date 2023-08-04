import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { AuthForm } from '../../components/auth-form'
import styles from './login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.root}>
      <h2 className='text text_type_main-medium mb-6'>Log in</h2>
      <AuthForm>
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
          Log in
        </Button>
      </AuthForm>
      <div className={`${styles.authLinks} mt-20`}>
        <p className={'text text_type_main-default text_color_inactive'}>Not a member yet?
          {' '}<Link className={styles.link} to='/register'>Sign up here!</Link>
        </p>
        <p className={'text text_type_main-default text_color_inactive'}>Forgot your password?
          {' '}<Link className={styles.link} to='/forgot-password'>Reset your password</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
