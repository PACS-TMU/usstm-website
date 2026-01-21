import type { CollectionConfig } from 'payload'

export const StudentGroups: CollectionConfig = {
  slug: 'student-groups',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'shortName', 'type', 'isActive'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the student group',
      },
    },
    {
      name: 'shortName',
      type: 'text',
      admin: {
        description: 'Acronym or abbreviation (e.g., "PACS", "WiCS")',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Group logo',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Student Group (SG)',
          value: 'sg',
        },
        {
          label: 'Course Union (CU)',
          value: 'cu',
        },
      ],
      admin: {
        description: 'Type of organization',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      admin: {
        description: 'Contact email address',
      },
    },
    {
      name: 'instagram',
      type: 'text',
      admin: {
        description: 'Instagram handle (without @)',
      },
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Website URL',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Is this group currently active?',
      },
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        description: 'Group description and mission',
      },
    },
  ],
}

