import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'prices',
  title: 'Priser',
  type: 'document',
  fields: [
    defineField({
      name: 'pricePdf',
      title: 'Prisliste',
      type: 'file',
    }),
  ],
})
