import { GraphQLServer } from 'graphql-yoga'
import { stringArg, objectType } from 'nexus'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import path from 'path'
import datamodelInfo from './__generated__/nexus-prisma'
import { prisma } from './__generated__/prisma-client'

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['board'])
  },
})

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('signIn', {
      type: SignInPayload,
      args: { githubCode: stringArg({ required: true }) },
      resolve: async (root, args, context) => {
        // fetch github token
        // fetch github user id
        // find or create user
        // generate JWT
        const token = 'fake_token'
        return { token }
      },
    })
  },
})

const SignInPayload = objectType({
  name: 'SignInPayload',
  definition(t) {
    t.string('token')
  },
})

const schema = makePrismaSchema({
  types: [Query, Mutation, SignInPayload],
  prisma: {
    datamodelInfo,
    client: prisma,
  },
  outputs: {
    schema: path.join(__dirname, './__generated__/schema.graphql'),
    typegen: path.join(__dirname, './__generated__/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
})

const server = new GraphQLServer({
  schema,
  context: params => ({ ...params, prisma }),
})

server.start(
  {
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  },
  ({ port }) => {
    // tslint:disable-next-line:no-console
    console.log(`Server running on port ${port}`)
  },
)
