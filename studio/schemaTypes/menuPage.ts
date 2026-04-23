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
        'Northern Nevada–style menu advisory: name animal foods that may be raw/undercooked, include the standard reminder (foodborne disease / medical conditions), and state that written information is available on request.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'menuSection' }],
    }),
  ],
})
