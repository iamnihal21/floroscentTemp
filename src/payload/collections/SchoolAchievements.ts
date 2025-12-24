import { CollectionConfig } from 'payload'

export const SchoolAchievements: CollectionConfig = {
  slug: 'school-achievements',
  labels: {
    singular: 'School Achievement',
    plural: 'School Achievements',
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
      name: 'category',
      type: 'select',
      options: [
        { label: 'Academic', value: 'academic' },
        { label: 'Infrastructure', value: 'infrastructure' },
        { label: 'Sports', value: 'sports' },
        { label: 'Cultural', value: 'cultural' },
        { label: 'Environmental', value: 'environmental' },
        { label: 'Community Service', value: 'community' },
      ],
      required: true,
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'awardLevel',
      type: 'select',
      options: [
        { label: 'National Level', value: 'national' },
        { label: 'International', value: 'international' },
        { label: 'State Level', value: 'state' },
        { label: 'Regional', value: 'regional' },
        { label: 'Local', value: 'local' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'impact',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Trophy', value: 'trophy' },
        { label: 'Globe', value: 'globe' },
        { label: 'Medal', value: 'medal' },
        { label: 'Award', value: 'award' },
        { label: 'Star', value: 'star' },
      ],
      defaultValue: 'trophy',
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: 'bg-yellow-500/10 text-yellow-500',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ranking',
      type: 'group',
      fields: [
        {
          name: 'rank',
          type: 'number',
        },
        {
          name: 'totalSchools',
          type: 'number',
        },
        {
          name: 'change',
          type: 'text',
        },
        {
          name: 'category',
          type: 'text',
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