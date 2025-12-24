import { CollectionConfig } from 'payload'

export const ActivitySchedule: CollectionConfig = {
  slug: 'activity-schedule',
  labels: {
    singular: 'Weekly Schedule',
    plural: 'Weekly Schedules',
  },
  admin: {
    useAsTitle: 'day',
  },
  fields: [
    {
      name: 'day',
      type: 'select',
      options: [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
      ],
      required: true,
    },
    {
      name: 'activities',
      type: 'array',
      fields: [
        {
          name: 'activity',
          type: 'text',
          required: true,
        },
        {
          name: 'time',
          type: 'text',
        },
        {
          name: 'venue',
          type: 'text',
        },
      ],
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'order',
          type: 'number',
          defaultValue: 1,
        },
        {
          name: 'semester',
          type: 'select',
          options: [
            { label: 'Semester 1', value: 'sem1' },
            { label: 'Semester 2', value: 'sem2' },
            { label: 'Annual', value: 'annual' },
          ],
        },
      ],
    },
  ],
}