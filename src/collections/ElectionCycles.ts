import type { CollectionConfig } from 'payload'

export const ElectionCycles: CollectionConfig = {
  slug: 'election-cycles',
  admin: {
    useAsTitle: 'academicYear',
    defaultColumns: ['academicYear', 'isActive'],
  },
  fields: [
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'e.g., "2025-2026"',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly identifier, e.g., "elections2025"',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.academicYear) {
              // Extract year and create slug like "elections2025"
              const year = data.academicYear.split('-')[0]
              return `elections${year}`
            }
            return value
          },
        ],
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Is this the current/active election cycle?',
      },
    },
    {
      name: 'schedule',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Election schedule image or document',
      },
    },
    {
      name: 'croInfo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Chief Returning Officer (CRO) information image',
      },
    },
    {
      name: 'candidates',
      type: 'relationship',
      relationTo: 'people',
      hasMany: true,
      admin: {
        description: 'Candidates running in this election',
      },
      filterOptions: {
        status: {
          equals: 'candidate',
        },
      },
    },
    {
      name: 'resultsDocument',
      type: 'relationship',
      relationTo: 'documents',
      admin: {
        description: 'Link to election results document',
      },
    },
  ],
}

