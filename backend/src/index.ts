import { ApolloServer, gql, IResolvers } from 'apollo-server'
import { importSchema } from 'graphql-import'
import path from 'path'
import { prisma, Prisma } from './generated/prisma'

interface Context {
  prisma: Prisma
}

const typeDefs = gql(importSchema(path.resolve(__dirname, 'schema.graphql')))

const resolvers: IResolvers<any, Context> = {
  Query: {
    message: () => 'Hello World',
    users: (parent, args, context, info) => context.prisma.users(),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
})

// tslint:disable-next-line:no-console
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
