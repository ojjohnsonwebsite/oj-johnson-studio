import {defineField, defineType} from 'sanity'

export const videoProject = defineType({
  name: 'videoProject',
  title: 'Video Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      description: 'Used for accessibility and in the admin dashboard.',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
    defineField({
      name: 'published',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
