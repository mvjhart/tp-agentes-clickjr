import { useEffect, useState } from 'react'

import Icon from '../shared/Icon.jsx'
import styles from './ThemeToggle.module.css'

function obtenerTemaDelSistema() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function obtenerPreferenciaGuardada() {
  const temaGuardado = localStorage.getItem('clickjr-theme')

  return temaGuardado === 'light' || temaGuardado === 'dark'
    ? temaGuardado
    : 'system'
}

function ThemeToggle() {
  const [preference, setPreference] = useState(obtenerPreferenciaGuardada)
  const [systemTheme, setSystemTheme] = useState(obtenerTemaDelSistema)

  const theme = preference === 'system' ? systemTheme : preference
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function handleSystemThemeChange(event) {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  function toggleTheme() {
    const newTheme = isDark ? 'light' : 'dark'

    localStorage.setItem('clickjr-theme', newTheme)
    setPreference(newTheme)
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  )
}

export default ThemeToggle
