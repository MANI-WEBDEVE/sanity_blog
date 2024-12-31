import { SchemaTypeDefinition } from '@sanity/types'
import { blog } from '../blog'
import { author } from '../author'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog as SchemaTypeDefinition, author as SchemaTypeDefinition],
}
