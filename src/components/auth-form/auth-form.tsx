import { ReactNode } from 'react'
import styles from './auth-form.module.css'

interface IAuthFormProps {
  children: ReactNode;
}

export const AuthForm: React.FC<IAuthFormProps> = ({ children }) => {
  return (
    <form className={styles.root}>
      {children}
    </form>
  )
}
