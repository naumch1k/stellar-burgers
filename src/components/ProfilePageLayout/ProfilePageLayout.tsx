import { ReactNode } from 'react'
import styles from './ProfilePageLayout.module.css'

interface IProfilePageLayoutProps {
  children: ReactNode;
}

export const ProfilePageLayout = (props: IProfilePageLayoutProps) => {
  const { children } = props

  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
