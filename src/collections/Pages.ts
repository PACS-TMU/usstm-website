import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'isHomepage'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Page title',
      },
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
                .replace(/(^-|-$)/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'isHomepage',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark this page as the homepage',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      admin: {
        description: 'Page status',
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'Publication date',
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              required: true,
              blocks: [
                // Core Content Blocks
                {
                  slug: 'hero',
                  labels: {
                    singular: 'Hero Block',
                    plural: 'Hero Blocks',
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                      admin: {
                        description: 'Main hero title (e.g., "USSTM")',
                      },
                    },
                    {
                      name: 'subtitle',
                      type: 'textarea',
                      admin: {
                        description: 'Hero subtitle text',
                      },
                    },
                    {
                      name: 'motto',
                      type: 'text',
                      admin: {
                        description: 'Organization motto',
                      },
                    },
                    {
                      name: 'backgroundImage',
                      type: 'upload',
                      relationTo: 'media',
                      admin: {
                        description: 'Parallax background image (optional)',
                      },
                    },
                    {
                      name: 'overlayOpacity',
                      type: 'number',
                      defaultValue: 0.5,
                      min: 0,
                      max: 1,
                      admin: {
                        description: 'Background overlay opacity (0-1)',
                        step: 0.1,
                      },
                    },
                    {
                      name: 'textAlignment',
                      type: 'select',
                      defaultValue: 'center',
                      options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                      ],
                    },
                    {
                      name: 'stats',
                      type: 'array',
                      maxRows: 3,
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                          admin: {
                            description: 'Stat value (e.g., "4000")',
                          },
                        },
                        {
                          name: 'suffix',
                          type: 'text',
                          admin: {
                            description: 'Optional suffix (e.g., "+")',
                          },
                        },
                        {
                          name: 'icon',
                          type: 'upload',
                          relationTo: 'media',
                          admin: {
                            description: 'Icon image for this stat',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  slug: 'richText',
                  labels: {
                    singular: 'Rich Text Block',
                    plural: 'Rich Text Blocks',
                  },
                  fields: [
                    {
                      name: 'content',
                      type: 'richText',
                      required: true,
                      admin: {
                        description: 'Full-featured rich text content',
                      },
                    },
                  ],
                },
                {
                  slug: 'aboutUs',
                  labels: {
                    singular: 'About Us Block',
                    plural: 'About Us Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      defaultValue: 'About Us',
                      admin: {
                        description: 'About Us heading',
                      },
                    },
                    {
                      name: 'content',
                      type: 'richText',
                      required: true,
                      admin: {
                        description: 'About Us content',
                      },
                    },
                  ],
                },
                {
                  slug: 'textSection',
                  labels: {
                    singular: 'Text Section Block',
                    plural: 'Text Section Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Section heading',
                      },
                    },
                    {
                      name: 'subheading',
                      type: 'text',
                      admin: {
                        description: 'Section subheading',
                      },
                    },
                    {
                      name: 'content',
                      type: 'richText',
                      required: true,
                      admin: {
                        description: 'Section content',
                      },
                    },
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      defaultValue: 'none',
                      options: [
                        { label: 'None', value: 'none' },
                        { label: 'Background', value: 'background' },
                        { label: 'Highlight', value: 'highlight' },
                        { label: 'Highlight Blue', value: 'highlight-blue' },
                        { label: 'Highlight Dark', value: 'highlight-dark' },
                      ],
                    },
                    {
                      name: 'alignment',
                      type: 'select',
                      defaultValue: 'left',
                      options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                        { label: 'Justify', value: 'justify' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'image',
                  labels: {
                    singular: 'Image Block',
                    plural: 'Image Blocks',
                  },
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'alt',
                      type: 'text',
                      required: true,
                      admin: {
                        description: 'Alternative text for accessibility',
                      },
                    },
                    {
                      name: 'caption',
                      type: 'textarea',
                      admin: {
                        description: 'Optional image caption',
                      },
                    },
                    {
                      name: 'size',
                      type: 'select',
                      defaultValue: 'medium',
                      options: [
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                        { label: 'Full Width', value: 'full' },
                      ],
                    },
                    {
                      name: 'alignment',
                      type: 'select',
                      defaultValue: 'center',
                      options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                      ],
                    },
                  ],
                },
                // Data-Driven Blocks
                {
                  slug: 'faq',
                  labels: {
                    singular: 'FAQ Block',
                    plural: 'FAQ Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      defaultValue: 'Frequently Asked Questions',
                      admin: {
                        description: 'FAQ section heading',
                      },
                    },
                    {
                      name: 'subheading',
                      type: 'text',
                      admin: {
                        description: 'FAQ section subheading',
                      },
                    },
                    {
                      name: 'faqs',
                      type: 'relationship',
                      relationTo: 'faqs',
                      hasMany: true,
                      admin: {
                        description: 'Select FAQs to display',
                      },
                    },
                    {
                      name: 'displayLimit',
                      type: 'number',
                      admin: {
                        description: 'Maximum number of FAQs to display (leave empty for all)',
                        step: 1,
                      },
                    },
                    {
                      name: 'viewMoreLink',
                      type: 'text',
                      admin: {
                        description: 'URL for "View More" link (e.g., "/faq")',
                      },
                    },
                  ],
                },
                {
                  slug: 'teamGrid',
                  labels: {
                    singular: 'Team Grid Block',
                    plural: 'Team Grid Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Team section heading',
                      },
                    },
                    {
                      name: 'people',
                      type: 'relationship',
                      relationTo: 'people',
                      hasMany: true,
                      admin: {
                        description: 'Select people to display',
                      },
                    },
                    {
                      name: 'columns',
                      type: 'select',
                      defaultValue: '3',
                      options: [
                        { label: '2 Columns', value: '2' },
                        { label: '3 Columns', value: '3' },
                        { label: '4 Columns', value: '4' },
                      ],
                    },
                    {
                      name: 'showContactInfo',
                      type: 'checkbox',
                      defaultValue: true,
                      admin: {
                        description: 'Show contact information for team members',
                      },
                    },
                  ],
                },
                {
                  slug: 'committeeShowcase',
                  labels: {
                    singular: 'Committee Showcase Block',
                    plural: 'Committee Showcase Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Committee section heading',
                      },
                    },
                    {
                      name: 'committees',
                      type: 'relationship',
                      relationTo: 'committees',
                      hasMany: true,
                      admin: {
                        description: 'Select committees to display',
                      },
                    },
                    {
                      name: 'displayStyle',
                      type: 'select',
                      defaultValue: 'grid',
                      options: [
                        { label: 'Grid', value: 'grid' },
                        { label: 'Carousel', value: 'carousel' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'eventsGrid',
                  labels: {
                    singular: 'Events Grid Block',
                    plural: 'Events Grid Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Events section heading',
                      },
                    },
                    {
                      name: 'events',
                      type: 'relationship',
                      relationTo: 'events',
                      hasMany: true,
                      admin: {
                        description: 'Select events to display',
                      },
                    },
                    {
                      name: 'displayStyle',
                      type: 'select',
                      defaultValue: 'grid',
                      options: [
                        { label: 'Grid', value: 'grid' },
                        { label: 'List', value: 'list' },
                      ],
                    },
                    {
                      name: 'showDate',
                      type: 'checkbox',
                      defaultValue: true,
                      admin: {
                        description: 'Show event dates',
                      },
                    },
                  ],
                },
                {
                  slug: 'gallery',
                  labels: {
                    singular: 'Gallery Block',
                    plural: 'Gallery Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Gallery section heading',
                      },
                    },
                    {
                      name: 'images',
                      type: 'relationship',
                      relationTo: 'media',
                      hasMany: true,
                      required: true,
                      admin: {
                        description: 'Select images for the gallery',
                      },
                    },
                    {
                      name: 'layout',
                      type: 'select',
                      defaultValue: 'grid',
                      options: [
                        { label: 'Grid', value: 'grid' },
                        { label: 'Masonry', value: 'masonry' },
                        { label: 'Carousel', value: 'carousel' },
                      ],
                    },
                    {
                      name: 'columns',
                      type: 'select',
                      defaultValue: '3',
                      options: [
                        { label: '2 Columns', value: '2' },
                        { label: '3 Columns', value: '3' },
                        { label: '4 Columns', value: '4' },
                      ],
                    },
                  ],
                },
                // Specialized Blocks
                {
                  slug: 'fourPillars',
                  labels: {
                    singular: 'Four Pillars Block',
                    plural: 'Four Pillars Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      defaultValue: 'Our Four Pillars',
                      admin: {
                        description: 'Section heading',
                      },
                    },
                    {
                      name: 'pillars',
                      type: 'array',
                      required: true,
                      minRows: 4,
                      maxRows: 4,
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          required: true,
                          admin: {
                            description: 'Pillar title (e.g., "CONSISTENCY")',
                          },
                        },
                        {
                          name: 'description',
                          type: 'textarea',
                          required: true,
                          admin: {
                            description: 'Pillar description',
                          },
                        },
                        {
                          name: 'textColor',
                          type: 'select',
                          defaultValue: 'white',
                          options: [
                            { label: 'White', value: 'white' },
                            { label: 'Dark', value: 'dark' },
                          ],
                          admin: {
                            description: 'Text color for back of card',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  slug: 'landAcknowledgement',
                  labels: {
                    singular: 'Land Acknowledgement Block',
                    plural: 'Land Acknowledgement Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      defaultValue: 'Land Acknowledgement',
                      admin: {
                        description: 'Section heading',
                      },
                    },
                    {
                      name: 'content',
                      type: 'richText',
                      required: true,
                      admin: {
                        description: 'Land acknowledgement content',
                      },
                    },
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      defaultValue: 'highlight-dark',
                      options: [
                        { label: 'None', value: 'none' },
                        { label: 'Background', value: 'background' },
                        { label: 'Highlight', value: 'highlight' },
                        { label: 'Highlight Blue', value: 'highlight-blue' },
                        { label: 'Highlight Dark', value: 'highlight-dark' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'stats',
                  labels: {
                    singular: 'Stats Block',
                    plural: 'Stats Blocks',
                  },
                  fields: [
                    {
                      name: 'stats',
                      type: 'array',
                      required: true,
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'suffix',
                          type: 'text',
                          admin: {
                            description: 'Optional suffix (e.g., "+")',
                          },
                        },
                        {
                          name: 'icon',
                          type: 'upload',
                          relationTo: 'media',
                        },
                      ],
                    },
                    {
                      name: 'layout',
                      type: 'select',
                      defaultValue: 'horizontal',
                      options: [
                        { label: 'Horizontal', value: 'horizontal' },
                        { label: 'Vertical', value: 'vertical' },
                        { label: 'Grid', value: 'grid' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'cardGrid',
                  labels: {
                    singular: 'Card Grid Block',
                    plural: 'Card Grid Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      admin: {
                        description: 'Section heading',
                      },
                    },
                    {
                      name: 'cards',
                      type: 'array',
                      required: true,
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'description',
                          type: 'textarea',
                        },
                        {
                          name: 'image',
                          type: 'upload',
                          relationTo: 'media',
                        },
                        {
                          name: 'link',
                          type: 'text',
                          admin: {
                            description: 'Optional link URL',
                          },
                        },
                      ],
                    },
                    {
                      name: 'columns',
                      type: 'select',
                      defaultValue: '3',
                      options: [
                        { label: '2 Columns', value: '2' },
                        { label: '3 Columns', value: '3' },
                        { label: '4 Columns', value: '4' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'cta',
                  labels: {
                    singular: 'CTA Block',
                    plural: 'CTA Blocks',
                  },
                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      required: true,
                      admin: {
                        description: 'Call-to-action heading',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      admin: {
                        description: 'CTA description text',
                      },
                    },
                    {
                      name: 'buttons',
                      type: 'array',
                      required: true,
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
                          name: 'style',
                          type: 'select',
                          defaultValue: 'default',
                          options: [
                            { label: 'Default', value: 'default' },
                            { label: 'Primary', value: 'primary' },
                            { label: 'Secondary', value: 'secondary' },
                            { label: 'Outline', value: 'outline' },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'alignment',
                      type: 'select',
                      defaultValue: 'center',
                      options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                      ],
                    },
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      defaultValue: 'none',
                      options: [
                        { label: 'None', value: 'none' },
                        { label: 'Background', value: 'background' },
                        { label: 'Highlight', value: 'highlight' },
                        { label: 'Highlight Blue', value: 'highlight-blue' },
                        { label: 'Highlight Dark', value: 'highlight-dark' },
                      ],
                    },
                  ],
                },
                {
                  slug: 'embed',
                  labels: {
                    singular: 'Embed Block',
                    plural: 'Embed Blocks',
                  },
                  fields: [
                    {
                      name: 'embedCode',
                      type: 'textarea',
                      required: true,
                      admin: {
                        description: 'HTML or iframe embed code',
                      },
                    },
                    {
                      name: 'aspectRatio',
                      type: 'select',
                      defaultValue: '16/9',
                      options: [
                        { label: '16:9', value: '16/9' },
                        { label: '4:3', value: '4/3' },
                        { label: '1:1', value: '1/1' },
                        { label: 'Auto', value: 'auto' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              admin: {
                description: 'SEO title (leave empty to use page title)',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              admin: {
                description: 'SEO description',
              },
            },
            {
              name: 'metaImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'SEO image (Open Graph, Twitter Card)',
              },
            },
          ],
        },
      ],
    },
  ],
};
