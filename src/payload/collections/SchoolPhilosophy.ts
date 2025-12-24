import { CollectionConfig } from 'payload'

export const SchoolPhilosophy: CollectionConfig = {
  slug: 'school-philosophy',
  labels: {
    singular: 'School Philosophy',
    plural: 'School Philosophies',
  },
  admin: {
    useAsTitle: 'founderQuote',
  },
  fields: [
    {
      name: 'founderQuote',
      type: 'textarea',
      required: true,
      defaultValue: "Education is the most powerful tool for nation-building. A teacher's duty extends far beyond the classroom—it's about shaping lives and building futures.",
    },
    {
      name: 'coreValues',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: 'Every child has unique potential' },
        { value: 'Education shapes character and competence' },
        { value: 'Learning extends beyond classrooms' },
        { value: 'Innovation in teaching methodologies' },
        { value: 'Community engagement and service' },
      ],
    },
  ],
}