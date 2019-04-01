import dotenv from 'dotenv'
import { GraphQLServer } from 'graphql-yoga'
import jwt from 'jsonwebtoken'
import { objectType, stringArg } from 'nexus'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import path from 'path'
import fetchGitHubToken from './lib/fetchGitHubToken'
import fetchGitHubUser from './lib/fetchGitHubUser'
import datamodelInfo from './__generated__/nexus-prisma'
import { prisma } from './__generated__/prisma-client'

dotenv.config()

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
      args: { gitHubCode: stringArg({ required: true }) },
      resolve: async (root, args, context) => {
        const gitHubToken = await fetchGitHubToken(args.gitHubCode)
        const gitHubUser = await fetchGitHubUser(gitHubToken)

        // Find or create the user.
        const user = await context.prisma.upsertUser({
          where: { gitHubId: gitHubUser.id },
          create: { gitHubId: gitHubUser.id },
          update: {},
        })

        if (!process.env.APP_SECRET) {
          throw new Error('APP_SECRET is not defined.')
        }

        // Generate a JWT.
        const token = jwt.sign(
          { userId: user.id, gitHubToken },
          process.env.APP_SECRET,
        )

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
