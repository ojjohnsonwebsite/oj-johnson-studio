import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'OJ Johnson',
  projectId: 't5h1285j',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) =>
      context.schemaType === 'siteSettings'
        ? prev.filter(action => !['delete', 'duplicate'].includes(action.action || ''))
        : prev,
  },
})
