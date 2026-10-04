import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Information',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 14,
    }),
    defineField({
      name: 'cv',
      title: 'CV PDF',
      type: 'file',
      options: {accept: '.pdf'},
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location line',
      type: 'string',
      description: 'Example: Based in San Francisco',
    }),
    defineField({
      name: 'cmsEnabled',
      title: 'CMS enabled',
      type: 'boolean',
      hidden: true,
    }),
  ],
})
