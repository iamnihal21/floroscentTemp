import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  fields: [
    { name: 'vision', type: 'textarea', required: true },
    { name: 'mission', type: 'textarea', required: true },
    { name: 'principalMessage', type: 'richText' },
    { name: 'directorMessage', type: 'richText' },
  ],
}