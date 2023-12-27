import { SchemaTypeDefinition } from 'sanity'

import contactInformation from './contactInformation'
import employee from './employee'
import news from './news'
import post from './post'
import richText from './richText'

export const schemaTypes = [post, contactInformation, employee, news, richText]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, contactInformation, employee, news, richText],
}
