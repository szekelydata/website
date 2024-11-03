import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
} 