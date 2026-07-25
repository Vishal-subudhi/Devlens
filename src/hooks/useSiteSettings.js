import {useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanityClient'
import {applyTheme} from '../lib/theme'

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
  layout: ['profile', 'techStack', 'popularRepos'],
  chartColors: {accent: '#4F8EF7', cyan: '#00D4FF', amber: '#F59E0B'},
}

function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULTS)

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch(QUERY)
      .then((data) => {
        if (cancelled || !data) return
        const merged = {
          ...DEFAULTS,
          ...data,
          chartColors: {
            accent: data.accentColor?.hex || DEFAULTS.chartColors.accent,
            cyan: data.cyanColor?.hex || DEFAULTS.chartColors.cyan,
            amber: data.amberColor?.hex || DEFAULTS.chartColors.amber,
          },
        }
        setSettings(merged)
        applyTheme(data)
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
