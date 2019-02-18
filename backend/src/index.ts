import { ApolloServer } from 'apollo-server'
import { stringArg } from 'nexus'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import path from 'path'
import datamodelInfo from './__generated__/nexus-prisma'
import { prisma } from './__generated__/prisma-client'

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['users', 'board'])
  },
})

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('logIn', {
      type: 'Boolean',
      args: { githubCode: stringArg({ required: true }) },
      resolve: (root, args) => true,
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
})

const server = new ApolloServer({ schema })

// tslint:disable-next-line:no-console
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
