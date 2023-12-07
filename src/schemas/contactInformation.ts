import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInformation',
  title: 'Kontaktinformasjon',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Åpningstider',
      type: 'string',
    }),
  ],
})
