import { useLanguage } from '../contexts/LanguageContext'
import styles from '../styles/LanguageSwitcher.module.css'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' }
] as const

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {languages.map(({ code, name, flag }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`${styles.button} ${language === code ? styles.active : ''}`}
            aria-label={`Switch to ${name}`}
            title={name}
          >
            <span className={styles.flag}>{flag}</span>
            <span className={styles.name}>{name}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 