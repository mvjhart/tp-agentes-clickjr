import AcordeonFlujo from '../../components/flujo/AcordeonFlujo.jsx'
import DiagramaCompleto from '../../components/flujo/DiagramaCompleto.jsx'
import { codigoDiagramaPostuAyuda } from './datos/diagramaPostuAyuda.js'
import { tramosPostuAyuda } from './datos/tramosPostuAyuda.js'
import styles from './PropuestaR2.module.css'

function PropuestaR2() {
  return (
    <section className={styles.container}>
      <header className={styles.encabezado}>
        <p className={styles.eyebrow}>ClickJr · Segunda propuesta</p>
        <h1>PostuAyuda · Recorrido paso a paso</h1>
        <p>
          PostuAyuda gestiona los faltantes de una postulación que AutoPost
          derivó. Recorre cuatro tramos: desde la recepción del pedido hasta
          devolver el estado a AutoPost. Abrí cada tramo para ver qué pasa, qué
          revisa el sistema y cómo puede terminar. También podés ver el
          recorrido completo o descargarlo.
        </p>
      </header>
      <DiagramaCompleto
        codigo={codigoDiagramaPostuAyuda}
        titulo="Diagrama completo · Nivel 2 PostuAyuda"
        nombreArchivo="postuayuda-nivel2-diagrama.svg"
      />
      <div className={styles.recorrido}>
        <h2 id="tramos-postuayuda">Tramos del recorrido</h2>
        <AcordeonFlujo
          tramos={tramosPostuAyuda}
          etiquetadoPor="tramos-postuayuda"
        />
      </div>
    </section>
  )
}

export default PropuestaR2
