import {icons} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: icons.cog,
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Nav Badge Text',
      description: 'Small badge next to the logo, e.g. "v1.0"',
      type: 'string',
    }),
    defineField({
      name: 'navTagline',
      title: 'Nav Tagline',
      description: 'Right-aligned tagline in the navbar, e.g. "GitHub Analytics"',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      description: 'Main heading above the search bar',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Input Placeholder',
      description: 'Example username shown in the search box',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Search Button Label',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
