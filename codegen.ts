import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://bldcloyv.api.sanity.io/v2023-08-01/graphql/production/default',
  documents: ['src/**/*.ts'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
