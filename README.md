# DevLens — GitHub Analytics Dashboard 🔍

A developer analytics tool that visualises any GitHub user's coding patterns — language distribution, top repositories, profile stats, and more. Built with React, Zustand, and Recharts.

## Live Demo
[GitHub Repo](https://github.com/Vishal-subudhi/Devlens)

## Features
- Search any GitHub username and analyse their profile instantly
- Profile card with avatar, bio, location, and "Member since" year
- Stat cards — Repos, Followers, Following with color-coded display
- Language Distribution donut chart (Recharts) showing coding language breakdown
- Click any language slice or row to **filter repos** by that language
- Click again to reset filter back to All
- Top Repositories list sorted by stars with numbered leaderboard style
- Language badges on each repo card
- Error handling for invalid usernames
- Terminal aesthetic — JetBrains Mono font, dark theme, dev-tool feel
- Zustand global store for cross-component filter state (no prop drilling)

## Tech Stack
- React + Vite
- Zustand (global filter state)
- Recharts (donut pie chart)
- GitHub REST API (no API key required for public data)
- Tailwind CSS v3
- JetBrains Mono + Inter (Google Fonts)

## How to run
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Search any GitHub username — try `torvalds`, `gaearon`, or your own

## Component Structure
```
App
  ├── Navbar
  ├── SearchBar (controlled input + Enter key + Analyse button)
  ├── UserProfile (avatar, name, bio, stat cards)
  ├── TechStack (donut chart + language list + Zustand filter writer)
  └── PopularRepos (numbered repo list + Zustand filter reader)

src/
  ├── hooks/
  │     └── useGithub.js (custom hook — fetches user + repos)
  └── store/
        └── filterStore.js (Zustand store — selectedLanguage)
```

## Key Concepts Used
- **Custom hook (useGithub)** — abstracts all GitHub API fetching into one reusable hook
- **Zustand global store** — TechStack writes selected language, PopularRepos reads it. No prop drilling between siblings
- **GitHub API** — two endpoints: `/users/:username` for profile, `/users/:username/repos?sort=stars` for repos
- **Array.reduce()** — calculates language distribution from repos array
- **Object.entries()** — converts language count object to chartData array
- **Recharts ResponsiveContainer** — responsive donut chart with custom tooltip
- **Guard clauses** — empty username check, `!userResponse.ok` for 404 handling
- **Optional chaining** — `user.location` safely accessed

## API Endpoints Used
```
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?sort=stars&per_page=10
```
No API key required — GitHub public API has 60 requests/hour unauthenticated.

## Zustand Filter Flow
```
User clicks language in TechStack
  → setLanguage('JavaScript') in filterStore
  → PopularRepos reads selectedLanguage from same store
  → filteredRepos updates instantly
  → No prop drilling, no lifting state up
```

## Design Decisions
- Terminal aesthetic chosen deliberately — this is a tool for developers, so it should feel like one
- JetBrains Mono for all data/numbers — same font used in VS Code
- Donut chart over pie chart — cleaner, more modern, inner space available for future data
- Numbered repo leaderboard — shows ranking clearly at a glance
- Glowing profile card border — signature design element, makes the profile section memorable

## Reflection
**Project:** DevLens — GitHub Analytics Dashboard

**Date completed:** 13/06/2026

**What I built:** A GitHub analytics dashboard that lets you analyse any developer's profile, language distribution, and top repositories with an interactive language filter

**Main concepts learned:** Custom hooks, Zustand global state between sibling components, Recharts data visualisation, GitHub API, array reduce for data aggregation

**What was hardest:** Building the custom hook and learning Zustand store — completely new concept of shared state without prop drilling

**What I'd do differently:** Add more analytics — commit frequency, PR merge rates, contribution graph

**Feature I added myself:** Language filter using Zustand — clicking a chart slice filters the repo list in real time

**Time taken:** 10 active coding days (27 days total including 17-day break)

## Live Demo
🔗 [devlens-rho.vercel.app](https://devlens-rho.vercel.app)
