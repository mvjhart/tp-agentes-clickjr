import { Outlet } from 'react-router-dom'

import Footer from './Footer.jsx'
import Header from './Header.jsx'
import MobileNavigation from './MobileNavigation.jsx'
import PageTitle from './PageTitle.jsx'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <PageTitle />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  )
}

export default Layout
