import {useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanityClient'

const QUERY = `*[_id == "siteSettings"][0]`

const DEFAULTS = {
  badgeText: 'v1.0',
  navTagline: 'GitHub Analytics',
  heroTitle: 'Analyse any developer',
  heroSubtitle: 'Enter a GitHub username to inspect their coding DNA',
  searchPlaceholder: 'torvalds',
  ctaLabel: 'Analyse →',
}

function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULTS)

  useEffect(() => {
    sanityClient
      .fetch(QUERY)
      .then((data) => {
        if (data) setSettings({...DEFAULTS, ...data})
      })
      .catch((error) => console.error('Failed to fetch site settings:', error))
  }, [])

  return settings
}

export default useSiteSettings
