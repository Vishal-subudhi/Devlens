import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: icons.cog,
  groups: [
    {name: 'theme', title: 'Theme'},
    {name: 'layout', title: 'Layout'},
    {name: 'navbar', title: 'Navbar'},
    {name: 'hero', title: 'Hero / Search'},
    {name: 'profile', title: 'Profile Card'},
    {name: 'techStack', title: 'Tech Stack Card'},
    {name: 'popularRepos', title: 'Popular Repos Card'},
  ],
  fields: [
    // Theme
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      description: 'Primary highlight color — buttons, links, active states',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'cyanColor',
      title: 'Secondary Accent Color',
      description: 'Used for the Followers stat and chart highlights',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'amberColor',
      title: 'Star / Highlight Color',
      description: 'Used for the star rating on repos',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'baseColor',
      title: 'Page Background',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'cardColor',
      title: 'Card Background',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'surfaceColor',
      title: 'Surface Background',
      description: 'Inputs, tags, and nested surfaces',
      type: 'color',
      group: 'theme',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Homepage Sections',
      description: 'Add, remove, and drag to reorder the sections shown after a search',
      type: 'array',
      group: 'layout',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: [
              {title: 'Profile Card', value: 'profile'},
              {title: 'Tech Stack Card', value: 'techStack'},
              {title: 'Popular Repos Card', value: 'popularRepos'},
            ],
          },
        }),
      ],
      validation: (rule) => rule.unique(),
      initialValue: ['profile', 'techStack', 'popularRepos'],
    }),
    // Navbar
    defineField({
      name: 'brandPrefix',
      title: 'Brand Text (accent)',
      description: 'First half of the logo, e.g. "dev"',
      type: 'string',
      group: 'navbar',
      placeholder: 'dev',
    }),
    defineField({
      name: 'brandSuffix',
      title: 'Brand Text (white)',
      description: 'Second half of the logo, e.g. "lens"',
      type: 'string',
      group: 'navbar',
      placeholder: 'lens',
    }),
    defineField({
      name: 'badgeText',
      title: 'Nav Badge Text',
      description: 'Small badge next to the logo, e.g. "v1.0"',
      type: 'string',
      group: 'navbar',
      placeholder: 'v1.0',
    }),
    defineField({
      name: 'navTagline',
      title: 'Nav Tagline',
      description: 'Right-aligned tagline in the navbar, e.g. "GitHub Analytics"',
      type: 'string',
      group: 'navbar',
      placeholder: 'GitHub Analytics',
    }),

    // Hero / Search
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      description: 'Main heading above the search bar',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'hero',
      placeholder: 'Analyse any developer',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
      placeholder: 'Enter a GitHub username to inspect their coding DNA',
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Input Placeholder',
      description: 'Example username shown in the search box',
      type: 'string',
      group: 'hero',
      placeholder: 'torvalds',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Search Button Label',
      type: 'string',
      group: 'hero',
      placeholder: 'Analyse →',
    }),

    // Profile Card
    defineField({
      name: 'statRepoLabel',
      title: 'Repos Stat Label',
      type: 'string',
      group: 'profile',
      placeholder: 'Repos',
    }),
    defineField({
      name: 'statFollowersLabel',
      title: 'Followers Stat Label',
      type: 'string',
      group: 'profile',
      placeholder: 'Followers',
    }),
    defineField({
      name: 'statFollowingLabel',
      title: 'Following Stat Label',
      type: 'string',
      group: 'profile',
      placeholder: 'Following',
    }),
    defineField({
      name: 'memberSinceLabel',
      title: 'Member Since Prefix',
      description: 'Shown before the join year, e.g. "Member since"',
      type: 'string',
      group: 'profile',
      placeholder: 'Member since',
    }),

    // Tech Stack Card
    defineField({
      name: 'techStackHeading',
      title: 'Tech Stack Heading',
      type: 'string',
      group: 'techStack',
      placeholder: 'Language Distribution',
    }),
    defineField({
      name: 'techStackEmptyState',
      title: 'Tech Stack Empty State',
      description: 'Shown when a profile has no language data',
      type: 'string',
      group: 'techStack',
      placeholder: 'No language data',
    }),
    defineField({
      name: 'repoCountSuffix',
      title: 'Repo Count Suffix',
      description: 'Appended after a repo count, e.g. "repos" in "4 repos"',
      type: 'string',
      group: 'techStack',
      placeholder: 'repos',
    }),

    // Popular Repos Card
    defineField({
      name: 'popularReposHeading',
      title: 'Popular Repos Heading',
      type: 'string',
      group: 'popularRepos',
      placeholder: 'Top Repositories',
    }),
    defineField({
      name: 'popularReposSortLabel',
      title: 'Sort Label',
      description: 'e.g. "sorted by ★"',
      type: 'string',
      group: 'popularRepos',
      placeholder: 'sorted by ★',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
