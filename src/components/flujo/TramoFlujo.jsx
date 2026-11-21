import DiagramaTramo from './DiagramaTramo.jsx'
import styles from './TramoFlujo.module.css'

const CLASE_CHIP = {
  desde: styles.chipDesde,
  hacia: styles.chipHacia,
  ciclo: styles.chipCiclo,
  fin: styles.chipFin,
}

// Tono opcional de una sección: resalta lo que dice la sentencia, lo que
// agrega el grupo y la intervención humana.
const CLASE_TONO = {
  sentencia: styles.sentencia,
  supuesto: styles.supuesto,
  humana: styles.humana,
}

// Permite resaltar con **negrita** dentro de los textos de los datos.
function conNegrita(texto) {
  return texto
    .split('**')
    .map((parte, indice) =>
      indice % 2 === 1 ? <strong key={indice}>{parte}</strong> : parte,
    )
}

function TramoFlujo({ tramo, onIrA, destinoDe }) {
  return (
    <details
      className={styles.tramo}
      open={tramo.abiertoInicial}
      data-nivel={tramo.nivel}
    >
      <summary className={styles.cabecera}>
        <span className={styles.numero}>{tramo.numero}</span>
        <h3 className={styles.titulos}>
          <span className={styles.titulo}>{tramo.titulo}</span>
          {tramo.sintesis && (
            <span className={styles.sintesis}>{tramo.sintesis}</span>
          )}
        </h3>
        <svg
          className={styles.chevron}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>

      <ul className={styles.chips}>
        {tramo.chips.map((chip) => {
          const clases = `${styles.chip} ${CLASE_CHIP[chip.variante] ?? ''}`
          const destino = onIrA && destinoDe ? destinoDe(chip) : null

          return (
            <li key={chip.texto}>
              {destino ? (
                <button
                  type="button"
                  className={`${clases} ${styles.chipEnlace}`}
                  onClick={() => onIrA(destino)}
                >
                  {chip.texto}
                </button>
              ) : (
                <span className={clases}>{chip.texto}</span>
              )}
            </li>
          )
        })}
      </ul>

      <div className={styles.cuerpo}>
        <div className={styles.descripcion}>
          {tramo.secciones.map((seccion) => (
            <section
              key={seccion.titulo}
              className={
                seccion.tono
                  ? `${styles.bloque} ${CLASE_TONO[seccion.tono] ?? ''}`
                  : undefined
              }
            >
              <h4>{seccion.titulo}</h4>

              {seccion.texto && <p>{conNegrita(seccion.texto)}</p>}

              {seccion.items && (
                <ul>
                  {seccion.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <DiagramaTramo
          elementos={tramo.diagrama}
          titulo={`Diagrama del ${tramo.numero}: ${tramo.titulo}`}
          onIrA={onIrA}
          destinoDe={destinoDe}
        />
      </div>
    </details>
  )
}

export default TramoFlujo
