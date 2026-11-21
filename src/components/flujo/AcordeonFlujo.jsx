import { useId } from 'react'

import './flujo-tokens.css'
import { buscarDestino } from './destinoTramo.js'
import TramoFlujo from './TramoFlujo.jsx'
import styles from './AcordeonFlujo.module.css'

// Props opcionales para dar más estructura al recorrido:
// - tramo.avisoPrevio: mensaje que se muestra entre el tramo anterior y este
//   (por ejemplo, "Desde el Tramo 2 salen dos caminos alternativos").
// - tramo.nivel + niveles: { tronco: { titulo, descripcion }, ... }. Dibuja una
//   banda de color y, en el primer tramo de cada nivel, el título del nivel.
//
// Navegación entre tramos: un chip o un nodo del diagrama que mencione
// "Tramo X" (o que traiga `a: 'X'` con el id del tramo) abre ese tramo y lleva
// la vista hasta él.
function AcordeonFlujo({ tramos, etiquetadoPor, niveles }) {
  const base = useId()

  function irA(id) {
    const item = document.getElementById(`${base}-${id}`)
    const detalles = item?.querySelector('details')
    const resumen = detalles?.querySelector('summary')

    if (!detalles || !resumen) return

    detalles.open = true

    requestAnimationFrame(() => {
      const sinMovimiento = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      resumen.scrollIntoView({
        behavior: sinMovimiento ? 'auto' : 'smooth',
        block: 'start',
      })
      resumen.focus({ preventScroll: true })
    })
  }

  return (
    <ol className={styles.lista} aria-labelledby={etiquetadoPor}>
      {tramos.map((tramo, indice) => {
        const nivel = niveles?.[tramo.nivel]
        const abreNivel =
          Boolean(nivel) && tramo.nivel !== tramos[indice - 1]?.nivel
        const aviso = tramo.avisoPrevio ?? (abreNivel ? nivel.aviso : undefined)

        return (
          <li
            key={tramo.id}
            id={`${base}-${tramo.id}`}
            className={`${styles.item} ${indice > 0 && (abreNivel || aviso) ? styles.itemSeparado : ''}`}
            data-nivel={tramo.nivel}
          >
            {aviso && (
              <p className={styles.aviso} role="note">
                {aviso}
              </p>
            )}

            {abreNivel && (
              <div className={styles.nivel}>
                <p className={styles.nivelTitulo}>{nivel.titulo}</p>
                {nivel.descripcion && (
                  <p className={styles.nivelDescripcion}>{nivel.descripcion}</p>
                )}
              </div>
            )}

            <TramoFlujo
              tramo={tramo}
              onIrA={irA}
              destinoDe={(elemento) =>
                elemento.a ?? buscarDestino(elemento.texto, tramos, tramo.id)
              }
            />
          </li>
        )
      })}
    </ol>
  )
}

export default AcordeonFlujo
