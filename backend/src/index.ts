import { ApolloServer } from 'apollo-server'
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

const schema = makePrismaSchema({
  types: [Query],
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
