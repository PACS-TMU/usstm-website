import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'USSTM',
      admin: {
        description: 'Site name displayed across the website',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Site logo for navbar',
      },
    },
    {
      name: 'navigation',
      type: 'array',
      required: true,
      admin: {
        description: 'Main navigation menu items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Menu item label',
          },
        },
        {
          name: 'href',
          type: 'text',
          admin: {
            description: 'Link URL (e.g., /about, /events)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Description shown in dropdown (optional)',
          },
        },
        {
          name: 'submenu',
          type: 'array',
          admin: {
            description: 'Submenu items (optional)',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              admin: {
                description: 'Description for submenu item',
              },
            },
          ],
        },
      ],
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Events', href: '/events' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      name: 'footerText',
      type: 'text',
      required: true,
      defaultValue: '© 2025 - Copyright USSTM, All Rights Reserved.',
      admin: {
        description: 'Footer copyright text',
      },
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      admin: {
        description: 'Brief description of the site',
      },
    },
    {
      name: 'vision',
      type: 'richText',
      admin: {
        description: 'Vision statement for USSTM',
      },
    },
    {
      name: 'mission',
      type: 'richText',
      admin: {
        description: 'Mission statement for USSTM',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      admin: {
        description: 'Primary contact email',
      },
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          admin: {
            description: 'Instagram handle or URL',
          },
        },
        {
          name: 'tiktok',
          type: 'text',
          admin: {
            description: 'TikTok handle or URL',
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: {
            description: 'LinkedIn profile or URL',
          },
        },
      ],
      admin: {
        description: 'Social media links',
      },
    },
    {
      name: 'programs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'program',
          type: 'text',
          required: true,
          admin: {
            description: 'Program name, e.g., "Biology", "Computer Science"',
          },
        },
      ],
      admin: {
        description: 'List of science programs',
      },
    },
    {
      name: 'requestTypes',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Display label for the request type',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'Value to submit with the form',
          },
        },
      ],
      admin: {
        description: 'Contact form request types',
      },
    },
  ],
};
