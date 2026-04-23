import { defineField, defineType } from 'sanity'

export const menuPage = defineType({
  name: 'menuPage',
  title: 'Menu page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Menu',
    }),
    defineField({
      name: 'navTitle',
      title: 'Sticky nav title',
      type: 'string',
      initialValue: 'Menu Categories',
    }),
    defineField({
      name: 'gratuityNotice',
      title: 'Gratuity notice',
      type: 'text',
    }),
    defineField({
      name: 'rawConsumptionWarning',
      title: 'Raw / undercooked consumer advisory',
      description:
        'FDA-style notice for items that may include raw or undercooked animal foods (e.g. rare steak pho, seafood, eggs). Shown on the public menu.',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'menuSection' }],
    }),
  ],
})
