import { CollectionConfig } from 'payload'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  labels: {
    singular: 'Club/Society',
    plural: 'Clubs & Societies',
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
      name: 'category',
      type: 'select',
      options: [
        { label: 'Science Club', value: 'science' },
        { label: 'Eco Warriors', value: 'eco' },
        { label: 'Literary Society', value: 'literary' },
        { label: 'Sports Council', value: 'sports' },
        { label: 'Debate Club', value: 'debate' },
        { label: 'Art Club', value: 'art' },
        { label: 'Music Club', value: 'music' },
        { label: 'Drama Club', value: 'drama' },
      ],
      required: true,
    },
    {
      name: 'members',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
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
      name: 'icon',
      type: 'select',
      options: [
        { label: 'BookOpen', value: 'book-open' },
        { label: 'Users', value: 'users' },
        { label: 'Theater', value: 'theater' },
        { label: 'Trophy', value: 'trophy' },
        { label: 'Target', value: 'target' },
        { label: 'Heart', value: 'heart' },
        { label: 'Music', value: 'music' },
      ],
      defaultValue: 'book-open',
    },
    {
      name: 'color',
      type: 'text',
      defaultValue: 'bg-blue-500/10',
    },
    {
      name: 'meetingSchedule',
      type: 'text',
    },
    {
      name: 'facultyCoordinator',
      type: 'text',
    },
    {
      name: 'studentPresident',
      type: 'text',
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'active',
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