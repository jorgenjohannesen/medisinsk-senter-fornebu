import { BellIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'Nyheter',
  type: 'document',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'preview',
      title: 'Forhåndsvisning',
      type: 'richText',
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: 'body',
      title: 'Innhold',
      type: 'richText',
      validation: (Rule) => Rule.max(10),
    }),
  ],
})
