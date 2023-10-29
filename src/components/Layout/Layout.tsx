import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Loader } from '../Loader'
import styles from './Layout.module.css'

const Layout = () => (
  <div className={styles.root}>
    <Header/>
    <main className={styles.content}>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </main>
  </div>
)

export default Layout
