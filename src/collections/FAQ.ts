import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'showOnHomepage', 'isPublished'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      admin: {
        description: 'The FAQ question',
      },
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
      admin: {
        description: 'The answer (supports HTML links and formatting)',
      },
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'Optional category for grouping FAQs',
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
    {
      name: 'showOnHomepage',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this FAQ on the homepage (limit to first 8)',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Publish this FAQ',
      },
    },
  ],
}

