import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import autoprefixer from 'autoprefixer'

import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'grappa-dev',
  projectId: 'hdvfijxo',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },
})
