import { Fragment, useEffect, useId, useRef, useState } from 'react'

import styles from './DiagramaTramo.module.css'

const CLASE_POR_VARIANTE = {
  inicio: styles.inicio,
  entrada: styles.entrada,
  accion: styles.accion,
  decision: styles.decision,
  enlace: styles.enlace,
  retorno: styles.retorno,
  fin: styles.fin,
  finMalo: styles.finMalo,
  finAviso: styles.finAviso,
  finNeutro: styles.finNeutro,
  finHumano: styles.finHumano,
}

// Rótulo opcional de una rama: "si", "no" o "ciclo".
const CLASE_POR_RAMA = {
  si: styles.etiquetaSi,
  no: styles.etiquetaNo,
  ciclo: styles.etiquetaCiclo,
}

// Un nodo que menciona otro tramo es un botón que lleva hasta él.
function Nodo({ elemento, onIrA, destinoDe }) {
  const clases = `${styles.nodo} ${CLASE_POR_VARIANTE[elemento.variante] ?? ''}`
  const destino = onIrA && destinoDe ? destinoDe(elemento) : null

  if (destino) {
    return (
      <button
        type="button"
        className={`${clases} ${styles.nodoEnlace}`}
        onClick={() => onIrA(destino)}
      >
        {elemento.texto}
      </button>
    )
  }

  return <div className={clases}>{elemento.texto}</div>
}

function Flecha() {
  return <div className={styles.flecha} aria-hidden="true" />
}

// Dibuja una lista de elementos. Entre dos nodos seguidos agrega una flecha.
function Elementos({ elementos, onIrA, destinoDe }) {
  return elementos.map((elemento, indice) => {
    const anterior = elementos[indice - 1]
    const llevaFlecha =
      elemento.tipo === 'nodo' && anterior && anterior.tipo === 'nodo'

    return (
      <Fragment key={indice}>
        {llevaFlecha && <Flecha />}

        {elemento.tipo === 'nodo' && (
          <Nodo elemento={elemento} onIrA={onIrA} destinoDe={destinoDe} />
        )}

        {elemento.tipo === 'ramas' && (
          <div className={styles.ramas}>
            {elemento.ramas.map((rama, posicion) => (
              <div key={posicion} className={styles.rama}>
                <span
                  className={`${styles.etiqueta} ${CLASE_POR_RAMA[rama.variante] ?? ''}`}
                >
                  {rama.etiqueta}
                </span>
                <Flecha />
                <Elementos
                  elementos={rama.elementos}
                  onIrA={onIrA}
                  destinoDe={destinoDe}
                />
              </div>
            ))}
          </div>
        )}

        {elemento.tipo === 'nota' && (
          <p className={styles.nota}>{elemento.texto}</p>
        )}
      </Fragment>
    )
  })
}

function DiagramaTramo({ elementos, titulo, onIrA, destinoDe }) {
  const contenedorRef = useRef(null)
  const pistaId = useId()
  const [desborda, setDesborda] = useState(false)

  // En pantallas angostas el diagrama conserva su forma y se desplaza dentro
  // de su contenedor. Se avisa solo cuando de verdad no entra.
  useEffect(() => {
    const contenedor = contenedorRef.current

    if (!contenedor) return

    const observador = new ResizeObserver(() => {
      setDesborda(contenedor.scrollWidth > contenedor.clientWidth + 1)
    })

    observador.observe(contenedor)
    if (contenedor.firstElementChild) {
      observador.observe(contenedor.firstElementChild)
    }

    return () => observador.disconnect()
  }, [])

  return (
    <div className={styles.contenedor}>
      {desborda && (
        <p className={styles.pista} id={pistaId}>
          Deslizá para ver el diagrama completo
        </p>
      )}

      <div
        ref={contenedorRef}
        className={styles.diagrama}
        role="group"
        aria-label={titulo}
        aria-describedby={desborda ? pistaId : undefined}
        tabIndex={desborda ? 0 : undefined}
      >
        <div className={styles.lienzo}>
          <Elementos
            elementos={elementos}
            onIrA={onIrA}
            destinoDe={destinoDe}
          />
        </div>
      </div>
    </div>
  )
}

export default DiagramaTramo
