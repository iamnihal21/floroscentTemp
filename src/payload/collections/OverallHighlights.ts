import { CollectionConfig } from 'payload'

export const OverallHighlights: CollectionConfig = {
  slug: 'overall-highlights',
  labels: {
    singular: 'Overall Highlight',
    plural: 'Overall Highlights',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Award', value: 'award' },
        { label: 'Shield', value: 'shield' },
        { label: 'Heart', value: 'heart' },
        { label: 'Users', value: 'users' },
        { label: 'Star', value: 'star' },
        { label: 'CheckCircle', value: 'check-circle' },
      ],
      required: true,
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'published',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 1,
        },
      ],
    },
  ],
}