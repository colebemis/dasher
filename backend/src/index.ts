// tslint:disable-next-line:no-var-requires
require('dotenv').config()

import cookieParser from 'cookie-parser'
import {
  FilterRootFields,
  mergeSchemas,
  RenameTypes,
  transformSchema,
} from 'graphql-tools'
import { GraphQLServer, Options } from 'graphql-yoga'
import makeGitHubSchema from './lib/makeGitHubSchema'
import schema from './schema'
import { prisma } from './__generated__/prisma-client'

makeGitHubSchema().then(gitHubSchema => {
  // Transform GitHub schema before merging.
  const transformedGitHubSchema = transformSchema(gitHubSchema, [
    // Prefix all types with "GitHub" to avoid naming conflicts.
    new RenameTypes(name => `GitHub${name}`),
    // Only expose a subset of GitHub's API.
    new FilterRootFields((_, fieldName) =>
      ['search', 'viewer'].includes(fieldName),
    ),
  ])

  const server = new GraphQLServer({
    schema: mergeSchemas({ schemas: [schema, transformedGitHubSchema] }),
    context: params => ({ ...params, prisma }),
  })

  server.express.use(cookieParser())

  server.start(
    {
      cors: {
        credentials: true,
        origin: 'http://localhost:3000',
      },
    },
    ({ port }: Options) => {
      // tslint:disable-next-line:no-console
      console.log(`Server running on port ${port}`)
    },
  )
})
