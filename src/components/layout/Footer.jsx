import Icon from '../shared/Icon.jsx'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <div className={styles.brand}>
            <img
              src="/assets/clickjr/clickjr-favicon.svg"
              alt=""
              aria-hidden="true"
              className={styles.logo}
            />

            <div className={styles.brandInfo}>
              <span className={styles.name}>ClickJr</span>
              <span className={styles.tagline}>
                Empleo y desarrollo profesional
              </span>
            </div>
          </div>

          <p className={styles.description}>
            Portal de empleo junior que ayuda a encontrar vacantes y seguir
            postulaciones.
          </p>
        </div>

        <div className={styles.credits}>
          <p>
            Proyecto académico desarrollado por <strong>Grupo 11</strong>
            <span className={styles.institution}>IFTS Nº 29</span>
          </p>

          <a
            href="https://github.com/mvjhart/tp-agentes-clickjr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repository}
            aria-label="Ver repositorio de ClickJr en GitHub (se abre en una pestaña nueva)"
          >
            <Icon name="github" size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
