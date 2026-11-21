import { Link } from 'react-router-dom'
import ContextCard from './ContextCard'
import SentenceCard from './SentenceCard'
import styles from './Inicio.module.css'

const TEAM = [
  {
    name: 'Federico Acosta Maneiro',
    role: 'Presentación y contenido',
    url: 'https://github.com/federicosd06-dev',
  },
  {
    name: 'Candelaria Chazarreta',
    role: 'Análisis y propuesta R1',
    url: 'https://github.com/kndxt',
  },
  {
    name: 'Marcos Aquino',
    role: 'Análisis y propuesta R2',
    url: 'https://github.com/Marcos028',
  },
  {
    name: 'María Victoria Mariani',
    role: 'Estructura e integración',
    url: 'https://github.com/mvjhart',
  },
]

// Redacción original de las sentencias asignadas. No modificar.
const SENTENCES = [
  {
    id: 'r1',
    label: 'Frase 1 · R1',
    text: 'Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.',
  },
  {
    id: 'r2',
    label: 'Frase 2 · R2',
    text: 'Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.',
  },
]

function Inicio() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction} aria-labelledby="intro-title">
        <p className={styles.eyebrow}>
          Empleo y desarrollo profesional · Bloque Postulación y permisos
        </p>
        <h1 id="intro-title">Del análisis lógico al flujo automatizado</h1>
        <p className={styles.lead}>
          ClickJr es un portal de empleo junior que ayuda a encontrar vacantes y
          a seguir las postulaciones. Esta landing presenta dos propuestas que
          buscan hacer más simples y seguras esas postulaciones, respetando la
          información y las decisiones de cada persona.
        </p>
      </section>

      <section className={styles.contextCards} aria-label="Contexto del caso">
        <ContextCard
          icon="graduation-cap"
          title="Origen en IFTS 16"
          description="ClickJr fue ideada por estudiantes del IFTS 16, que trabajaron sus reglas de funcionamiento con lógica proposicional. El IFTS 29 propone ahora la solución."
        />

        <ContextCard
          icon="clipboard-list"
          title="El problema"
          description="Postular a mano a cada vacante es lento y propenso a errores. El desafío es evitar postulaciones incompletas o duplicadas sin dejar pasar oportunidades laborales."
        />
      </section>

      <section className={styles.sentences} aria-labelledby="sentences-title">
        <div className={styles.sectionHeading}>
          <h2 id="sentences-title">Las dos sentencias asignadas</h2>
          <p>
            Son las reglas originales del bloque Postulación y permisos, tal
            como las entregó la cátedra. Cada propuesta parte de una de ellas.
          </p>
        </div>

        <div className={styles.sentenceList}>
          {SENTENCES.map((sentence) => (
            <SentenceCard
              key={sentence.id}
              label={sentence.label}
              text={sentence.text}
            />
          ))}
        </div>
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

      <section className={styles.team} aria-labelledby="team-title">
        <div className={styles.sectionHeading}>
          <h2 id="team-title">Equipo IFTS 29</h2>
          <p>
            Grupo 11 · Bloque asignado: <strong>Postulación y permisos</strong>
          </p>
        </div>

        <ul className={styles.teamList}>
          {TEAM.map((member) => (
            <li key={member.url} className={styles.member}>
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                {member.name}
              </a>
              <span>{member.role}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Inicio
