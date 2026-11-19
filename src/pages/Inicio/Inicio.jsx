import { Link } from 'react-router-dom'
import ContextCard from './ContextCard'
import styles from './Inicio.module.css'

function Inicio() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <p className={styles.eyebrow}>
          Caso ClickJr · Bloque Postulación y permisos
        </p>
        <h1>Del análisis lógico al flujo automatizado</h1>
        <p>
          Explorá dos propuestas que buscan hacer más simples y seguras las
          postulaciones, respetando la información y las decisiones de cada
          persona.
        </p>
        <div>
          Alcance conceptual y explicativo: no ejecuta agentes reales ni conecta
          APIs.
        </div>
        <div>
          <h3>Equipo IFTS 29</h3>
          <ul>
            <li>
              <a href="https://github.com/federicosd06-dev" target="_blank">
                Federico Acosta Maneiro
              </a>
            </li>
            <li>
              <a href="https://github.com/kndxt" target="_blank">
                Candelaria Chazarreta
              </a>
            </li>
            <li>
              <a href="https://github.com/Marcos028" target="_blank">
                Marcos Aquino
              </a>
            </li>
            <li>
              <a href="https://github.com/mvjhart" target="_blank">
                María Victoria Mariani
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.contextCards}>
        <ContextCard
          icon="graduation-cap"
          title="Origen en IFTS 16"
          description="Portal de empleo junior ideado para buscar vacantes y seguir postulaciones."
        />

        <ContextCard
          icon="clipboard-list"
          title="El problema"
          description="Evitar postulaciones incompletas sin dejar pasar oportunidades laborales."
        />
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
