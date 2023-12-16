import { ReactNode } from 'react'
import styles from './AuthPageLayoutLinks.module.css'

interface IAuthPageLayoutLinksProps {
  children: ReactNode;
}

export const AuthPageLayoutLinks = ({ children }: IAuthPageLayoutLinksProps) => (
  <div className={styles.root}>
    {children}
  </div>
)
