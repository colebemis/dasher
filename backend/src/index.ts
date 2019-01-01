import { ApolloServer, gql, IResolvers } from 'apollo-server'
import { importSchema } from 'graphql-import'
import path from 'path'
import { prisma, Prisma } from './__generated__/prisma'

interface Context {
  prisma: Prisma
}

const typeDefs = gql(importSchema(path.resolve(__dirname, 'schema.graphql')))

const resolvers: IResolvers<any, Context> = {
  Query: {
    message: () => 'Hello World',
    users: (parent, args, context) => context.prisma.users(),
    board: (parent, args, context) => context.prisma.board(args.where),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
})

// tslint:disable-next-line:no-console
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
