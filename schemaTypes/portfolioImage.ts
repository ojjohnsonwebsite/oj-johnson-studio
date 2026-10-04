import {defineField, defineType} from 'sanity'

export const portfolioImage = defineType({
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      description: 'Only used in the admin dashboard.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'caption',
      title: 'Caption / materials',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Portfolio',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Jewelry', value: 'jewelry'},
          {title: 'Sculpture', value: 'sculpture'},
        ],
      },
      validation: Rule => Rule.required(),
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
    defineField({
      name: 'sourceCollection',
      title: 'Legacy source collection',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'legacyUrl',
      title: 'Legacy image URL',
      type: 'url',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'caption',
      media: 'image',
      category: 'category',
    },
    prepare({title, subtitle, media, category}) {
      return {
        title: title || (category === 'jewelry' ? 'Jewelry image' : 'Sculpture image'),
        subtitle,
        media,
      }
    },
  },
})
