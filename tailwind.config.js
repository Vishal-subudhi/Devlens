export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}