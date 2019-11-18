import jwt from 'jsonwebtoken'
import { arg, objectType, stringArg } from 'nexus'
import {
  makePrismaSchema,
  prismaInputObjectType,
  prismaObjectType,
} from 'nexus-prisma'
import path from 'path'
import fetchGitHubToken from './lib/fetchGitHubToken'
import fetchGitHubUser from './lib/fetchGitHubUser'
import getEnv from './lib/getEnv'
import getTokenPayload from './lib/getTokenPayload'
import { TokenPayload } from './types'
import datamodelInfo from './__generated__/nexus-prisma'
import { prisma } from './__generated__/prisma-client'

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['board'])
    t.field('signedInUser', {
      type: 'User',
      nullable: true,
      resolve: (root, args, context) => {
        try {
          const { userId } = getTokenPayload(context)
          return context.prisma.user({ id: userId })
        } catch (error) {
          return null
        }
      },
    })
  },
})

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields([
      'updateBoard',
      'deleteBoard',
      'createColumn',
      'updateColumn',
      'deleteColumn',
    ])
    t.field('signIn', {
      type: 'SignInPayload',
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

        // Generate a token.
        const payload: TokenPayload = { userId: user.id, gitHubToken }
        const token = jwt.sign(payload, getEnv('APP_SECRET'))

        return { token }
      },
    })
    t.boolean('signOut', {
      resolve: (root, args, context) => {
        context.response.clearCookie('token')
        return true
      },
    })
    t.field('createBoard', {
      type: 'Board',
      args: { data: arg({ type: 'BoardCreateInput', required: true }) },
      resolve: (root, args, context) => {
        const { userId } = getTokenPayload(context)
        return context.prisma.createBoard({
          owner: { connect: { id: userId } },
          name: args.data.name,
          query: args.data.query,
        })
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

const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['*'])
  },
})

const BoardCreateInput = prismaInputObjectType({
  name: 'BoardCreateInput',
  definition(t) {
    // `owner` is an unnecessary argument when creating a board
    // because the signed-in user's id is stored in their token.
    t.prismaFields({ filter: ['owner'] })
  },
})

const Board = prismaObjectType({
  name: 'Board',
  definition(t) {
    t.prismaFields(['*'])
  },
})

const schema = makePrismaSchema({
  types: [Query, Mutation, SignInPayload, User, BoardCreateInput, Board],
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
