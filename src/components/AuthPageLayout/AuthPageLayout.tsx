import { ReactNode } from 'react'
import styles from './AuthPageLayout.module.css'

interface IAuthPageLayoutProps {
  children: ReactNode;
}

export const AuthPageLayout = ({ children }: IAuthPageLayoutProps) => (
  <div className={styles.root}>
    {children}
  </div>
)
