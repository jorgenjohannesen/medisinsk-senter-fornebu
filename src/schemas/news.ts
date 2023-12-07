import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'richText',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'richText',
      validation: (Rule) => Rule.max(40),
    }),
  ],
})
