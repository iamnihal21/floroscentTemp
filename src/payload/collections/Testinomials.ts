import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'aspect',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Admissions', value: 'admissions' },
        { label: 'Facilities', value: 'facilities' },
        { label: 'Academics', value: 'academics' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
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
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
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