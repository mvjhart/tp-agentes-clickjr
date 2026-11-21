import AcordeonFlujo from '../../components/flujo/AcordeonFlujo.jsx'
import DiagramaCompleto from '../../components/flujo/DiagramaCompleto.jsx'
import { codigoDiagramaAutoPost } from './datos/diagramaAutoPost.js'
import { tramosAutoPost } from './datos/tramosAutoPost.js'
import styles from './PropuestaR1.module.css'

function PropuestaR1() {
  return (
    <section className={styles.container}>
      <header className={styles.encabezado}>
        <p className={styles.eyebrow}>ClickJr · Primera propuesta</p>

        <h1>AutoPost · Recorrido paso a paso</h1>
        <p>
          AutoPost revisa cada postulación en cuatro tramos. Abrí cada tramo
          para ver qué pasa, qué revisa el sistema y cómo puede terminar: el
          diagrama de cada uno se lee de arriba hacia abajo. También podés ver
          el recorrido completo o descargarlo.
        </p>
      </header>

      <DiagramaCompleto
        codigo={codigoDiagramaAutoPost}
        titulo="Diagrama completo · Nivel 1 AutoPost"
        nombreArchivo="autopost-nivel1-diagrama.svg"
      />

      <div className={styles.recorrido}>
        <h2 id="tramos-autopost">Tramos del recorrido</h2>
        <AcordeonFlujo
          tramos={tramosAutoPost}
          etiquetadoPor="tramos-autopost"
        />
      </div>
    </section>
  )
}

export default PropuestaR1
