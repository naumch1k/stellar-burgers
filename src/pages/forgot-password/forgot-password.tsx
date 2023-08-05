import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { AuthForm } from '../../components/auth-form'
import styles from './forgot-password.module.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  return (
    <div className={styles.root}>
      <h2 className='text text_type_main-medium mb-6'>Forgot Your Password?</h2>
      <AuthForm>
        <EmailInput
          value={email}
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
        >
          Email Recovery Link
        </Button>
      </AuthForm>
      <p className={'text text_type_main-default text_color_inactive mt-20'}>Remembered the password?
        {' '}<Link className={styles.link} to='/login'>Log in here</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
