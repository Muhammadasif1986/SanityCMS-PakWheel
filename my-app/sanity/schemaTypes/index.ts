import { type SchemaTypeDefinition } from 'sanity'
import cars from '@/sanity/cars'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars],
}
