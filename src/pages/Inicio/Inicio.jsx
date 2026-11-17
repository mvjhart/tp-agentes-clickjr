import { Link } from 'react-router-dom'

import styles from './Inicio.module.css'

function Inicio() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <p className={styles.eyebrow}>ClickJr</p>
        <h1>Propuestas de automatización</h1>
        <p>
          Conocé las propuestas desarrolladas para analizar y mejorar el proceso
          de postulación a vacantes.
        </p>
      </section>

      <section className={styles.proposals} aria-labelledby="proposals-title">
        <div className={styles.sectionHeading}>
          <h2 id="proposals-title">Explorá las propuestas</h2>
          <p>Seleccioná una propuesta para conocer su funcionamiento.</p>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Propuesta R1</h3>
            <p>Presentación del primer escenario de automatización.</p>
            <Link to="/propuesta-r1" className={styles.cardLink}>
              Conocer propuesta
            </Link>
          </article>

          <article className={styles.card}>
            <h3>Propuesta R2</h3>
            <p>Presentación del segundo escenario de automatización.</p>
            <Link to="/propuesta-r2" className={styles.cardLink}>
              Conocer propuesta
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Inicio
