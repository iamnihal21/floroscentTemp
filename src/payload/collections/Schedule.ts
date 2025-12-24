// collections/ActivitySchedule.ts
import { CollectionConfig } from 'payload';

export const ActivitySchedule: CollectionConfig = {
  slug: 'activity-schedule',
  labels: {
    singular: 'Schedule Item',
    plural: 'Schedule Items',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'date', 'status', 'published'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Examination', value: 'exam' },
        { label: 'Parent-Teacher Meeting', value: 'ptm' },
        { label: 'School Event', value: 'event' },
        { label: 'Sports Event', value: 'sports' },
        { label: 'Cultural Event', value: 'cultural' },
        { label: 'Academic Event', value: 'academic' },
        { label: 'Holiday', value: 'holiday' },
        { label: 'Fee Payment', value: 'fee' },
      ],
      defaultValue: 'event',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date (for multi-day events)',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
      },
    },
    {
      name: 'time',
      type: 'text',
      label: 'Time Range',
      defaultValue: '9:00 AM - 4:00 PM',
    },
    {
      name: 'venue',
      type: 'text',
      defaultValue: 'School Premises',
    },
    {
      name: 'classes',
      type: 'text',
      label: 'Applicable Classes/Grades',
      defaultValue: 'All Classes',
    },
    {
      name: 'participants',
      type: 'text',
      defaultValue: 'All Students',
    },
    {
      name: 'category',
      type: 'text',
      label: 'Event Category',
      defaultValue: 'General',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Ongoing', value: 'ongoing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'upcoming',
    },
    {
      name: 'priority',
      type: 'select',
      options: [
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
      ],
      defaultValue: 'medium',
    },
    {
      name: 'colorCode',
      type: 'select',
      label: 'Display Color',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Purple', value: 'purple' },
        { label: 'Pink', value: 'pink' },
      ],
      defaultValue: 'blue',
    },
    {
      name: 'guidelines',
      type: 'array',
      label: 'Guidelines/Instructions',
      fields: [
        {
          name: 'guideline',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { guideline: 'Arrive 10 minutes before scheduled time' },
        { guideline: 'Bring necessary documents' },
      ],
    },
    {
      name: 'importantNotes',
      type: 'textarea',
      label: 'Important Notes',
    },
    {
      name: 'contactPerson',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'department',
          type: 'text',
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Event',
      defaultValue: false,
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'createdAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'updatedAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        const now = new Date();
        if (!data.metadata?.createdAt) {
          if (!data.metadata) data.metadata = {};
          data.metadata.createdAt = now;
        }
        data.metadata.updatedAt = now;
        return data;
      }
    ],
  },
};