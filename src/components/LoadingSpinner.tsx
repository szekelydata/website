import styles from '../styles/LoadingSpinner.module.css'
import Snowflake from './Snowflake'

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <Snowflake size={48} color="var(--primary-color)" className={styles.snowflake} />
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  )
} 