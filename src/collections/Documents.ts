import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'academicYear', 'lastUpdated'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Document title',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Governance',
          value: 'governance',
        },
        {
          label: 'Budget',
          value: 'budget',
        },
        {
          label: 'Elections',
          value: 'elections',
        },
        {
          label: 'Policies',
          value: 'policies',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      admin: {
        description: 'Document category',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'PDF or document file',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the document',
      },
    },
    {
      name: 'lastUpdated',
      type: 'date',
      admin: {
        description: 'Date the document was last updated',
      },
    },
    {
      name: 'academicYear',
      type: 'text',
      admin: {
        description: 'Relevant academic year (e.g., "2023-2024")',
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

