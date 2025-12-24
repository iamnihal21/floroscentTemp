import { CollectionConfig } from 'payload'

export const AcademicResults: CollectionConfig = {
  slug: 'academic-results',
  labels: {
    singular: 'Academic Result',
    plural: 'Academic Results',
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
      name: 'year',
      type: 'select',
      options: [
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
      ],
      required: true,
    },
    {
      name: 'grade',
      type: 'select',
      options: [
        { label: 'Grade 10', value: '10' },
        { label: 'Grade 12', value: '12' },
        { label: 'Grade 9', value: '9' },
        { label: 'Grade 11', value: '11' },
        { label: 'Primary', value: 'primary' },
        { label: 'All Classes', value: 'all' },
      ],
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Toppers', value: 'toppers' },
        { label: 'Stream Results', value: 'stream' },
        { label: 'Annual Exam', value: 'annual' },
        { label: 'Board Results', value: 'board' },
        { label: 'Achievers', value: 'achievers' },
        { label: 'Pre-Board', value: 'preboard' },
        { label: 'Unit Test', value: 'test' },
      ],
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'resultFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'topStudents',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'percentage',
          type: 'text',
        },
        {
          name: 'rank',
          type: 'number',
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
          name: 'downloads',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
  ],
}