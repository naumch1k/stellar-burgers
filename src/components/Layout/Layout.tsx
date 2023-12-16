import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header'
import { Loader } from 'components/Loader'
import styles from './Layout.module.css'

const Layout = () => (
  <div className={styles.root}>
    <Header/>
    <main className={`${styles.content} pr-5 pl-5`}>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </main>
  </div>
)

export default Layout
