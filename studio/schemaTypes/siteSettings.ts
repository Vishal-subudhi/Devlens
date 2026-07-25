import {icons} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: icons.cog,
  groups: [
    {name: 'navbar', title: 'Navbar'},
    {name: 'hero', title: 'Hero / Search'},
    {name: 'profile', title: 'Profile Card'},
    {name: 'techStack', title: 'Tech Stack Card'},
    {name: 'popularRepos', title: 'Popular Repos Card'},
  ],
  fields: [
    // Navbar
    defineField({
      name: 'brandPrefix',
      title: 'Brand Text (accent)',
      description: 'First half of the logo, e.g. "dev"',
      type: 'string',
      group: 'navbar',
    }),
    defineField({
      name: 'brandSuffix',
      title: 'Brand Text (white)',
      description: 'Second half of the logo, e.g. "lens"',
      type: 'string',
      group: 'navbar',
    }),
    defineField({
      name: 'badgeText',
      title: 'Nav Badge Text',
      description: 'Small badge next to the logo, e.g. "v1.0"',
      type: 'string',
      group: 'navbar',
    }),
    defineField({
      name: 'navTagline',
      title: 'Nav Tagline',
      description: 'Right-aligned tagline in the navbar, e.g. "GitHub Analytics"',
      type: 'string',
      group: 'navbar',
    }),

    // Hero / Search
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      description: 'Main heading above the search bar',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Input Placeholder',
      description: 'Example username shown in the search box',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Search Button Label',
      type: 'string',
      group: 'hero',
    }),

    // Profile Card
    defineField({
      name: 'statRepoLabel',
      title: 'Repos Stat Label',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      name: 'statFollowersLabel',
      title: 'Followers Stat Label',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      name: 'statFollowingLabel',
      title: 'Following Stat Label',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      name: 'memberSinceLabel',
      title: 'Member Since Prefix',
      description: 'Shown before the join year, e.g. "Member since"',
      type: 'string',
      group: 'profile',
    }),

    // Tech Stack Card
    defineField({
      name: 'techStackHeading',
      title: 'Tech Stack Heading',
      type: 'string',
      group: 'techStack',
    }),
    defineField({
      name: 'techStackEmptyState',
      title: 'Tech Stack Empty State',
      description: 'Shown when a profile has no language data',
      type: 'string',
      group: 'techStack',
    }),
    defineField({
      name: 'repoCountSuffix',
      title: 'Repo Count Suffix',
      description: 'Appended after a repo count, e.g. "repos" in "4 repos"',
      type: 'string',
      group: 'techStack',
    }),

    // Popular Repos Card
    defineField({
      name: 'popularReposHeading',
      title: 'Popular Repos Heading',
      type: 'string',
      group: 'popularRepos',
    }),
    defineField({
      name: 'popularReposSortLabel',
      title: 'Sort Label',
      description: 'e.g. "sorted by ★"',
      type: 'string',
      group: 'popularRepos',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
