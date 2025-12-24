import { CollectionConfig } from 'payload'

export const Leadership: CollectionConfig = {
  slug: 'leadership',
  labels: {
    singular: 'Leadership Member',
    plural: 'Leadership Members',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Director', value: 'director' },
        { label: 'Principal', value: 'principal' },
        { label: 'Vice Principal', value: 'vice-principal' },
        { label: 'Academic Head', value: 'academic-head' },
      ],
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'experienceYears',
      type: 'number',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'achievements',
      type: 'array',
      fields: [
        {
          name: 'achievement',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'additionalStats',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'text',
        },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'isActive',
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