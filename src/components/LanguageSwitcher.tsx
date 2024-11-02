import { useRouter } from 'next/router'
import styles from '../styles/LanguageSwitcher.module.css'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hu', name: 'Magyar' },
  { code: 'ro', name: 'Română' }
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <select 
      className={styles.select}
      value={locale}
      onChange={changeLanguage}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
} 