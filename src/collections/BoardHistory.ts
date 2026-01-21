import type { CollectionConfig } from 'payload'

export const BoardHistory: CollectionConfig = {
  slug: 'board-history',
  admin: {
    useAsTitle: 'academicYear',
    defaultColumns: ['academicYear'],
  },
  fields: [
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'e.g., "2023-2024"',
      },
    },
    {
      name: 'groups',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'groupName',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "Executives", "Program Directors", "First Year Directors"',
          },
        },
        {
          name: 'members',
          type: 'relationship',
          relationTo: 'people',
          hasMany: true,
          required: true,
          admin: {
            description: 'Members of this board group',
          },
        },
      ],
      admin: {
        description: 'Board groups for this year (Executives, Directors, etc.)',
      },
    },
  ],
}

