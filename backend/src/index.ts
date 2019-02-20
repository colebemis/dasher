import { GraphQLServer } from 'graphql-yoga'
import { stringArg } from 'nexus'
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
      // Q: What should the return type be?
      type: 'Boolean',
      args: { githubCode: stringArg({ required: true }) },
      resolve: async (root, args, context) => {
        // fetch github token
        // fetch github user id
        // find or create user
        // generate JWT that encodes the user id and github token
        // store JWT in an httpOnly cookie
        return true
      },
    })
  },
})

const schema = makePrismaSchema({
  types: [Query, Mutation],
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
  context: { prisma },
})

// tslint:disable-next-line:no-console
server.start(({ port }) => console.log(`Server running on port ${port}`))
