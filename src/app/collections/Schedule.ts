import { CollectionConfig } from 'payload'

export const Schedules: CollectionConfig = {
  slug: 'schedules',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { 
      name: 'type', 
      type: 'select', 
      options: [
        { label: 'Examination', value: 'exam' },
        { label: 'PTM', value: 'ptm' },
        { label: 'Academic Calendar', value: 'calendar' }
      ],
      required: true 
    },
    { name: 'date', type: 'date' },
    { name: 'pdfAttachment', type: 'upload', relationTo: 'media' }, // Connects to your images/files
  ],
}