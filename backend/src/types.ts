import { Prisma } from './__generated__/prisma-client'
import { ContextParameters } from 'graphql-yoga/dist/types'

export type Context = ContextParameters & { prisma: Prisma }

export interface TokenPayload {
  userId: string
  gitHubToken: string
}
