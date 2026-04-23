import { defineField, defineType } from 'sanity'

export const menuSection = defineType({
  name: 'menuSection',
  title: 'Menu section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Section ID (anchor)',
      type: 'slug',
      description: 'Used for in-page links, e.g. #pho-noodles',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'modifierText',
      title: 'Modifier / notice line',
      type: 'string',
    }),
    defineField({
      name: 'subHeader',
      title: 'Sub-header',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Boba (price + flavor list)', value: 'boba' },
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      hidden: ({ parent }) => parent?.layout === 'boba',
    }),
    defineField({
      name: 'boba',
      title: 'Boba block',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', initialValue: 'Boba' }),
        defineField({ name: 'price', type: 'string' }),
        defineField({
          name: 'flavorsSubtitle',
          type: 'string',
          initialValue: 'Available Flavors',
        }),
        defineField({
          name: 'flavors',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
      hidden: ({ parent }) => parent?.layout !== 'boba',
    }),
  ],
})
