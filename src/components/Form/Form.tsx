import { ReactNode } from 'react'
import styles from './Form.module.css'

interface IFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export const Form: React.FC<IFormProps> = ({ onSubmit, children }) => {
  return (
    <form className={styles.root} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
