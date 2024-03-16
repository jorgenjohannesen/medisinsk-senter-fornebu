import { SchemaTypeDefinition } from 'sanity'

import contactInformation from './contactInformation'
import employee from './employee'
import news from './news'
import richText from './richText'
import service from './service'

export const schemaTypes = [
  contactInformation,
  employee,
  news,
  richText,
  service,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactInformation, employee, news, richText, service],
}
