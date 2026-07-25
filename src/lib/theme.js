const CSS_VAR_BY_FIELD = {
  accentColor: '--color-accent',
  cyanColor: '--color-cyan',
  amberColor: '--color-amber',
  baseColor: '--color-base',
  cardColor: '--color-card',
  surfaceColor: '--color-surface',
}

function hexToRgbTriplet(hex) {
  const match = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex)
  if (!match) return null
  const [, r, g, b] = match
  return `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`
}

export function applyTheme(settings) {
  const root = document.documentElement
  for (const [field, cssVar] of Object.entries(CSS_VAR_BY_FIELD)) {
    const hex = settings[field]?.hex
    if (!hex) continue
    const triplet = hexToRgbTriplet(hex)
    if (triplet) root.style.setProperty(cssVar, triplet)
  }
}
