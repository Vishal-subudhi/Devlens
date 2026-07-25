import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'q1gj0pdb',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})
