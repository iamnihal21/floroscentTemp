import { CollectionConfig } from 'payload'

export const ImportantDates: CollectionConfig = {
  slug: 'important-dates',
  labels: {
    singular: 'Important Date',
    plural: 'Important Dates',
  },
  admin: {
    useAsTitle: 'event',
  },
  fields: [
    {
      name: 'event',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Current', value: 'current' },
        { label: 'Past', value: 'past' },
      ],
      defaultValue: 'upcoming',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Admissions', value: 'admissions' },
        { label: 'Academic', value: 'academic' },
        { label: 'Events', value: 'events' },
        { label: 'Holidays', value: 'holidays' },
      ],
      defaultValue: 'admissions',
    },
    {
      name: 'description',
      type: 'textarea',
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