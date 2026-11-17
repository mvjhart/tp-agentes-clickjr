import navigationItems from '../navigation/navigation.js'
import NavigationLink from '../navigation/NavigationLink.jsx'
import styles from './MobileNavigation.module.css'

function MobileNavigation() {
  return (
    <nav className={styles.navigation} aria-label="Navegación móvil">
      {navigationItems.map((item) => (
        <NavigationLink key={item.to} item={item} variant="dock" />
      ))}
    </nav>
  )
}

export default MobileNavigation
