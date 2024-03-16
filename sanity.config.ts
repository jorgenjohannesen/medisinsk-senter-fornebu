/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schema } from '~/schemas'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  name: 'project-name',
  title: 'Medisinsk Senter Fornebu',
  projectId,
  dataset,
  //edit schemas in './src/schemas'
  schema,
  plugins: [
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'no', title: 'Norsk' },
        { id: 'en', title: 'English' },
      ],
      schemaTypes: ['employee', 'news', 'contactInformation', 'service'],
    }),
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          // Default form view
          S.view.form(),
          // Preview
        ])
      },
    }),
    // Add the "Open preview" action
    previewUrl({
      base: '/api/draft',
      urlSecretId: previewSecretId,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
