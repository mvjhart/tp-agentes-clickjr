import styles from './SentenceCard.module.css'

function SentenceCard({ label, text }) {
  return (
    <figure className={styles.card}>
      <figcaption className={styles.label}>{label}</figcaption>
      <blockquote className={styles.text}>{text}</blockquote>
    </figure>
  )
}

export default SentenceCard
