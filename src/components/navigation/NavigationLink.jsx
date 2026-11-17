import { NavLink } from 'react-router-dom'

import Icon from '../shared/Icon.jsx'
import styles from './NavigationLink.module.css'

function NavigationLink({ item, variant }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        [styles.link, styles[variant], isActive ? styles.active : '']
          .filter(Boolean)
          .join(' ')
      }
    >
      {variant === 'dock' && <Icon name={item.icon} />}
      <span>{item.label}</span>
    </NavLink>
  )
}

export default NavigationLink
