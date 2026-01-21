import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventType', 'year', 'featured'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly identifier (auto-generated from title)',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        description: 'Event description (supports HTML)',
      },
    },
    {
      name: 'eventType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Annual Event',
          value: 'annual',
        },
        {
          label: 'Formal',
          value: 'formal',
        },
        {
          label: 'Orientation',
          value: 'orientation',
        },
        {
          label: 'Gallery',
          value: 'gallery',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      admin: {
        description: 'Type of event',
      },
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        description: 'Event date',
      },
    },
    {
      name: 'year',
      type: 'text',
      admin: {
        description: 'Academic year or calendar year, e.g., "2023"',
      },
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      admin: {
        description: 'Event images',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display on homepage or featured areas',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
        step: 1,
      },
    },
  ],
}

