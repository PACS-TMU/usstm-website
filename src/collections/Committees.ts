import type { CollectionConfig } from 'payload'

export const Committees: CollectionConfig = {
  slug: 'committees',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'year', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "Academics", "Board of Directors", "Communications"',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly identifier (auto-generated from name)',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
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
        description: 'Committee description and responsibilities',
      },
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'people',
      hasMany: true,
      admin: {
        description: 'Current committee members',
      },
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      admin: {
        description: 'Committee images for carousel display',
      },
    },
    {
      name: 'year',
      type: 'text',
      admin: {
        description: 'Academic year, e.g., "2023-2024"',
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

