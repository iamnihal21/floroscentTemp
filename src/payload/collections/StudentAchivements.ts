import { CollectionConfig } from 'payload'

export const StudentAchievements: CollectionConfig = {
  slug: 'student-achievements',
  labels: {
    singular: 'Student Achievement',
    plural: 'Student Achievements',
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
      name: 'grade',
      type: 'text',
      required: true,
    },
    {
      name: 'achievement',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Olympiad', value: 'olympiad' },
        { label: 'Sports', value: 'sports' },
        { label: 'Academic', value: 'academic' },
        { label: 'Cultural', value: 'cultural' },
        { label: 'Community Service', value: 'community' },
        { label: 'Innovation', value: 'innovation' },
      ],
      required: true,
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'subjects',
      type: 'array',
      fields: [
        {
          name: 'subject',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'award',
      type: 'text',
      required: true,
    },
    {
      name: 'imageColor',
      type: 'text',
      defaultValue: 'bg-blue-500/10',
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'studentPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'certificate',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured Student',
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