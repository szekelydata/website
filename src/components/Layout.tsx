import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import Snowflake from './Snowflake'
import styles from '../styles/Layout.module.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { language } = useLanguage()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Snowflake size={24} color="var(--primary-color)" />
            SzekelyData
          </Link>
          <div className={styles.controls}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 SzekelyData. {getTranslation('footer.rights', language)}</p>
        <div className={styles.links}>
          <Link href="/about">{getTranslation('nav.about', language)}</Link>
          <Link href="/contact">{getTranslation('nav.contact', language)}</Link>
          <Link href="/privacy">{getTranslation('nav.privacy', language)}</Link>
          <Link href="/terms">{getTranslation('nav.terms', language)}</Link>
        </div>
      </footer>
    </div>
  )
} 