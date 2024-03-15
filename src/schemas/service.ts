import { WrenchIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Tjenester',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'richText',
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
  ],
})
