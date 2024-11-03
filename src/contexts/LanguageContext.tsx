import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language } from '../lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Try to get language from localStorage
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'hu', 'ro'].includes(savedLang)) {
      setLanguage(savedLang)
    } else {
      // Try to get browser language
      const browserLang = navigator.language.split('-')[0]
      if (['en', 'hu', 'ro'].includes(browserLang)) {
        setLanguage(browserLang as Language)
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 