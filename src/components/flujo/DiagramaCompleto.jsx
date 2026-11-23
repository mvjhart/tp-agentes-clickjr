import { useEffect, useId, useRef, useState } from 'react'

import './flujo-tokens.css'
import { descargarSvg } from '../../utils/descargarSvg.js'
import { generarSvg } from '../../utils/mermaidSvg.js'
import styles from './DiagramaCompleto.module.css'

function DiagramaCompleto({ codigo, titulo, nombreArchivo }) {
  const dialogoRef = useRef(null)
  const tituloId = useId()
  const [abierto, setAbierto] = useState(false)
  const [estado, setEstado] = useState('cargando')
  const [svg, setSvg] = useState('')
  const [errorDescarga, setErrorDescarga] = useState(false)

  // Sincroniza el estado de React con el elemento <dialog> del navegador.
  useEffect(() => {
    const dialogo = dialogoRef.current

    if (!dialogo) return
    if (abierto && !dialogo.open) dialogo.showModal()
    if (!abierto && dialogo.open) dialogo.close()
  }, [abierto])

  function abrir() {
    setAbierto(true)
    setEstado('cargando')

    generarSvg(codigo)
      .then((resultado) => {
        setSvg(resultado)
        setEstado('listo')
      })
      .catch(() => setEstado('error'))
  }

  function cerrar() {
    setAbierto(false)
  }

  async function descargar() {
    setErrorDescarga(false)

    try {
      // Se descarga siempre con tema claro y en modo portable, para que el
      // archivo sea un SVG válido y se lea en cualquier visor.
      const contenido = await generarSvg(codigo, {
        tema: 'light',
        portable: true,
      })
      descargarSvg(contenido, nombreArchivo)
    } catch {
      setErrorDescarga(true)
    }
  }

  return (
    <div>
      <div className={styles.acciones}>
        <button
          type="button"
          className={`${styles.boton} ${styles.botonPrimario}`}
          onClick={abrir}
        >
          Ver diagrama completo
        </button>
        <button type="button" className={styles.boton} onClick={descargar}>
          Descargar diagrama (SVG)
        </button>
      </div>

      {errorDescarga && (
        <p className={styles.errorDescarga} role="alert">
          No se pudo descargar el diagrama. Intentá nuevamente en unos segundos.
        </p>
      )}

      <dialog
        ref={dialogoRef}
        className={styles.dialogo}
        aria-labelledby={tituloId}
        onClose={cerrar}
        onClick={(evento) => {
          // Un clic sobre el fondo oscuro llega al propio <dialog>.
          if (evento.target === evento.currentTarget) cerrar()
        }}
      >
        <div className={styles.cabecera}>
          <h2 id={tituloId}>{titulo}</h2>
          <button
            type="button"
            className={styles.cerrar}
            onClick={cerrar}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className={styles.cuerpo}>
          {estado === 'cargando' && (
            <p className={styles.mensaje} role="status">
              Generando diagrama…
            </p>
          )}

          {estado === 'error' && (
            <p className={`${styles.mensaje} ${styles.error}`} role="alert">
              No se pudo generar el diagrama. Intentá nuevamente en unos
              segundos.
            </p>
          )}

          {estado === 'listo' && (
            <div
              className={styles.visor}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          )}
        </div>

        <div className={styles.pie}>
          <button type="button" className={styles.boton} onClick={descargar}>
            Descargar SVG
          </button>
          <button
            type="button"
            className={`${styles.boton} ${styles.botonPrimario}`}
            onClick={cerrar}
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default DiagramaCompleto
