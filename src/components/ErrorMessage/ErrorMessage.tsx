import { ReactNode } from 'react'
import styles from './ErrorMessage.module.css'

interface IErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: IErrorMessageProps) => (
  <p className={`${styles.root} text text_type_main-large`}>
    {children}
  </p>
)
