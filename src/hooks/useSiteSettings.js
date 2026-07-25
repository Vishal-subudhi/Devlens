import {useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanityClient'

const QUERY = `*[_id == "siteSettings"][0]`

const DEFAULTS = {
  brandPrefix: 'dev',
  brandSuffix: 'lens',
  badgeText: 'v1.0',
  navTagline: 'GitHub Analytics',
  heroTitle: 'Analyse any developer',
  heroSubtitle: 'Enter a GitHub username to inspect their coding DNA',
  searchPlaceholder: 'torvalds',
  ctaLabel: 'Analyse →',
  statRepoLabel: 'Repos',
  statFollowersLabel: 'Followers',
  statFollowingLabel: 'Following',
  memberSinceLabel: 'Member since',
  techStackHeading: 'Language Distribution',
  techStackEmptyState: 'No language data',
  repoCountSuffix: 'repos',
  popularReposHeading: 'Top Repositories',
  popularReposSortLabel: 'sorted by ★',
}

function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULTS)

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch(QUERY)
      .then((data) => {
        if (!cancelled && data) setSettings({...DEFAULTS, ...data})
      })
      .catch((error) => {
        if (!cancelled) console.error('Failed to fetch site settings:', error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return settings
}

export default useSiteSettings
