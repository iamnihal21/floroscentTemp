import { CollectionConfig } from 'payload'

export const WhyChooseUs: CollectionConfig = {
  slug: 'why-choose-us',
  labels: {
    singular: 'Why Choose Us Section',
    plural: 'Why Choose Us Sections',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Bus', value: 'bus' },
        { label: 'Home', value: 'home' },
        { label: 'BookOpen', value: 'book-open' },
        { label: 'Trophy', value: 'trophy' },
        { label: 'Users', value: 'users' },
        { label: 'Briefcase', value: 'briefcase' },
      ],
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: 'from-blue-500/20 to-blue-600/20',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        {
          name: 'highlight',
          type: 'text',
          required: true,
        },
      ],
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