import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  return <Component {...pageProps} />
} 