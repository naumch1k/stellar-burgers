import { ReactNode } from 'react'
import styles from './auth-page-layout-links.module.css'

interface IAuthPageLayoutLinksProps {
  children: ReactNode;
}

export const AuthPageLayoutLinks = (props: IAuthPageLayoutLinksProps) => {
  const { children } = props

  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
