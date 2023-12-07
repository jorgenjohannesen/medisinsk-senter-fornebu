import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInformation',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'string',
    }),
  ],
})
