import dotenv from 'dotenv'
import { GraphQLServer } from 'graphql-yoga'
import schema from './schema'
import { prisma } from './__generated__/prisma-client'

dotenv.config()

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
