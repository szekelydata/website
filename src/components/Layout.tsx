import ThemeToggle from './ThemeToggle'
import styles from '../styles/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
      <ThemeToggle />
    </div>
  )
} 