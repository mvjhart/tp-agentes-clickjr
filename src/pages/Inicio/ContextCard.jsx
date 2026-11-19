import Icon from '../../components/shared/Icon'
import styles from './ContextCard.module.css'

function ContextCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon name={icon} size={28} />
      </div>

      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ContextCard
