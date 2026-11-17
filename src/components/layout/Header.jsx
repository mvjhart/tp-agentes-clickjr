import { Link } from 'react-router-dom'

import navigationItems from '../navigation/navigation.js'
import NavigationLink from '../navigation/NavigationLink.jsx'
import ThemeToggle from '../theme/ThemeToggle.jsx'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand} aria-label="ClickJr - Inicio">
          <img
            src="/assets/clickjr/clickjr-logo.svg"
            alt="ClickJr"
            className={`${styles.logo} ${styles.logoLight}`}
          />
          <img
            src="/assets/clickjr/clickjr-logo-dark.svg"
            alt=""
            aria-hidden="true"
            className={`${styles.logo} ${styles.logoDark}`}
          />
        </Link>

        <nav className={styles.navigation} aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <NavigationLink key={item.to} item={item} variant="segmented" />
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
