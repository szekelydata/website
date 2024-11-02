import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function useAnalytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
} 