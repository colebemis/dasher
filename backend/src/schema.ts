import jwt from 'jsonwebtoken'
import { objectType, stringArg } from 'nexus'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import path from 'path'
import fetchGitHubToken from './lib/fetchGitHubToken'
import fetchGitHubUser from './lib/fetchGitHubUser'
import getEnv from './lib/getEnv'
import { JwtPayload } from './types'
import datamodelInfo from './__generated__/nexus-prisma'
import { prisma } from './__generated__/prisma-client'

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['board'])
    t.boolean('isSignedIn', {
      resolve: (root, args, context) => {
        try {
          // It should be suffcient to check that the token exists and
          // was properly signed. We are not explicitly checking the
          // contents of the payload.
          const { token } = context.request.cookies
          jwt.verify(token, getEnv('APP_SECRET'))
          return true
        } catch {
          return false
        }
      },
    })
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

        // Generate a JWT.
        const payload: JwtPayload = { userId: user.id, gitHubToken }
        const token = jwt.sign(payload, getEnv('APP_SECRET'))

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

export default schema
