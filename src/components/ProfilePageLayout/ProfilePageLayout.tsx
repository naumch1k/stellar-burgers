import { ReactNode } from 'react'
import styles from './ProfilePageLayout.module.css'

interface IProfilePageLayoutProps {
  children: ReactNode;
}

export const ProfilePageLayout = ({ children }: IProfilePageLayoutProps) => (
  <div className={styles.root}>
    {children}
  </div>
)
