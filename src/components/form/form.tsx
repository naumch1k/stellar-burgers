import { ReactNode } from 'react'
import styles from './form.module.css'

interface IFormProps {
  children: ReactNode;
}

export const Form: React.FC<IFormProps> = ({ children }) => {
  return (
    <form className={styles.root}>
      {children}
    </form>
  )
}
