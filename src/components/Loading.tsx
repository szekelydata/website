import styles from '../styles/Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  )
} 