import { defineType } from 'sanity'

export default defineType({
  name: 'richText',
  title: 'Description',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [{ title: 'Bullet', value: 'bullet' }],
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Header', value: 'h1' },
        { title: 'Header 2', value: 'h2' },
        { title: 'Header 3', value: 'h3' },
        { title: 'Header 4', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
  ],
})
