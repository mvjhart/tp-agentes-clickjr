import { Link } from 'react-router-dom'

import styles from './NoEncontrada.module.css'

function NoEncontrada() {
  return (
    <section className={styles.container}>
      <p className={styles.code}>404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscás no corresponde a una página disponible.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NoEncontrada
