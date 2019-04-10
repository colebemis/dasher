import axios from 'axios'
import { DocumentNode, print } from 'graphql'
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools'
import getEnv from './getEnv'
import getTokenPayload from './getTokenPayload'

interface Operation {
  query: DocumentNode
  operationName?: string
  variables?: { [key: string]: any }
  context?: { [key: string]: any }
}

async function makeGitHubSchema() {
  // Reference: https://www.apollographql.com/docs/graphql-tools/remote-schemas
  return makeRemoteExecutableSchema({
    schema: await introspectSchema(introspectionFetcher),
    fetcher,
  })
}

async function introspectionFetcher(operation: Operation) {
  const response = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      'Content-Type': 'application/json',
      // Because introspection occurs before the user's GitHub access token
      // is accessible, we have to use a personal access token instead.
      Authorization: `Bearer ${getEnv('GITHUB_TOKEN')}`,
    },
    data: {
      query: print(operation.query),
      variables: operation.variables,
      operationName: operation.operationName,
    },
  })
  return response.data
}

async function fetcher(operation: Operation) {
  if (!operation.context) throw new Error('context is undefined.')
  const { gitHubToken } = getTokenPayload(operation.context.graphqlContext)
  const response = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gitHubToken}`,
    },
    data: {
      query: print(operation.query),
      variables: operation.variables,
      operationName: operation.operationName,
    },
  })
  return response.data
}

export default makeGitHubSchema
