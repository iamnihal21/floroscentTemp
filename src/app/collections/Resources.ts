import { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  fields: [
    { name: 'formName', type: 'text', required: true },
    { name: 'file', type: 'upload', relationTo: 'media', required: true },
  ],
}   