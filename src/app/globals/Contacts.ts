import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  fields: [
    { name: 'email', type: 'email', required: true },
    { name: 'address', type: 'textarea', required: true },
    {
      name: 'phoneNumbers',
      type: 'array', // This allows you to add multiple numbers
      fields: [
        { name: 'label', type: 'text', admin: { placeholder: 'e.g. Emergency, Office' } },
        { name: 'number', type: 'text', admin: { placeholder: 'e.g. +1-234-567-8901' } },
      ],
    },
  ],
}