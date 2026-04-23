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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'menuSection' }],
    }),
  ],
})
