import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'orderOnlineUrl',
      title: 'Order online URL',
      type: 'url',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'footerAddressLine1',
      title: 'Address line 1',
      type: 'string',
    }),
    defineField({
      name: 'footerAddressLine2',
      title: 'Address line 2',
      type: 'string',
    }),
    defineField({
      name: 'footerHoursLine1',
      title: 'Hours line 1',
      type: 'string',
    }),
    defineField({
      name: 'footerHoursLine2',
      title: 'Hours line 2',
      type: 'string',
    }),
    defineField({
      name: 'footerPhone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'footerEmail',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
    }),
    defineField({
      name: 'seoOgImagePath',
      title: 'Open Graph image path',
      description: 'Site-relative path, e.g. /golden-dragon-og.jpg',
      type: 'string',
    }),
    defineField({
      name: 'seoSiteUrl',
      title: 'Canonical site URL',
      type: 'url',
    }),
  ],
})
