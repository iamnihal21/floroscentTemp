import { CollectionConfig } from 'payload'

export const CoCurricular: CollectionConfig = {
  slug: 'co-curricular',
  labels: {
    singular: 'Co-curricular Activity',
    plural: 'Co-curricular Activities',
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
      name: 'category',
      type: 'select',
      options: [
        { label: 'Sports', value: 'sports' },
        { label: 'Arts & Crafts', value: 'arts' },
        { label: 'Music & Dance', value: 'music' },
        { label: 'Drama & Theater', value: 'drama' },
        { label: 'Student Clubs', value: 'clubs' },
        { label: 'All Activities', value: 'all' },
      ],
      defaultValue: 'all',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'schedule',
      type: 'text',
      required: true,
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'instructor',
      type: 'text',
    },
    {
      name: 'capacity',
      type: 'text',
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Music', value: 'music' },
        { label: 'Palette', value: 'palette' },
        { label: 'Dumbbell', value: 'dumbbell' },
        { label: 'Theater', value: 'theater' },
        { label: 'Users', value: 'users' },
        { label: 'Trophy', value: 'trophy' },
        { label: 'BookOpen', value: 'book-open' },
        { label: 'Target', value: 'target' },
      ],
      defaultValue: 'music',
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: 'bg-purple-500/10 text-purple-500',
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured Activity',
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