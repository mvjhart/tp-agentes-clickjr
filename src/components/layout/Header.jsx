import { Link, NavLink } from 'react-router-dom'

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/propuesta-r1"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Propuesta R1
          </NavLink>

          <NavLink
            to="/propuesta-r2"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Propuesta R2
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
