import { ReactNode } from 'react'
import styles from './AuthPageLayout.module.css'

interface IAuthPageLayoutProps {
  children: ReactNode;
}

export const AuthPageLayout = (props: IAuthPageLayoutProps) => {
  const { children } = props

  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
