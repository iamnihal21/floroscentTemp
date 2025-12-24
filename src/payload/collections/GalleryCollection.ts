// collections/Media.ts (or you can rename to Gallery.ts if you prefer)
import { CollectionConfig } from 'payload';

export const GalleryCollection: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media Item',
    plural: 'Media Items',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'type', 'featured', 'published'],
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
        position: 'center',
      },
      {
        name: 'large',
        width: 1600,
        height: 1200,
        position: 'center',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*'],
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
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'All Photos', value: 'all' },
        { label: 'School Events', value: 'events' },
        { label: 'Sports Day', value: 'sports' },
        { label: 'Cultural Fest', value: 'cultural' },
        { label: 'Academic', value: 'academics' },
        { label: 'Field Trips', value: 'trips' },
        { label: 'Workshops', value: 'workshops' },
      ],
      defaultValue: 'events',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
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
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Item',
      defaultValue: false,
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { tag: 'School' },
        { tag: 'Events' },
      ],
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'comments',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'views',
      type: 'number',
      label: 'Video Views (for videos only)',
      defaultValue: 0,
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Video Duration (for videos only)',
      defaultValue: '0:00',
    },
    {
      name: 'externalUrl',
      type: 'text',
      label: 'External URL (if not uploaded)',
      admin: {
        description: 'Use this if media is hosted externally (e.g., YouTube, Unsplash)',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Published',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Higher numbers appear first',
      },
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