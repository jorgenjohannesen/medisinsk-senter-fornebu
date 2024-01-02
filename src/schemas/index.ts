import { SchemaTypeDefinition } from 'sanity'

import contactInformation from './contactInformation'
import employee from './employee'
import news from './news'
import post from './post'
import richText from './richText'
import service from './service'

export const schemaTypes = [
  post,
  contactInformation,
  employee,
  news,
  richText,
  service,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, contactInformation, employee, news, richText, service],
}
