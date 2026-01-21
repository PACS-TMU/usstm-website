import type { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'type', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'position',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "VP Academics", "Biology Director", etc.',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      admin: {
        description: 'Biography or candidate statement (supports HTML formatting)',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Profile photo',
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
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Executive',
          value: 'executive',
        },
        {
          label: 'Director',
          value: 'director',
        },
        {
          label: 'Committee Member',
          value: 'committee-member',
        },
        {
          label: 'Candidate',
          value: 'candidate',
        },
        {
          label: 'Past Board',
          value: 'past-board',
        },
      ],
      admin: {
        description: 'Role classification',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Past',
          value: 'past',
        },
        {
          label: 'Candidate',
          value: 'candidate',
        },
      ],
      admin: {
        description: 'Current status of the person',
      },
    },
  ],
}

