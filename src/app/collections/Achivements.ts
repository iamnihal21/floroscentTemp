import { CollectionConfig } from 'payload'

export const Achievements: CollectionConfig = {
  slug: 'achievements',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      options: ['Board Result', 'Co-curricular', 'Student Achievement', 'School Achievement'],
    },
    { name: 'year', type: 'number', admin: { placeholder: 'e.g. 2024' } },
    { name: 'description', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
