import ApolloClient from 'apollo-boost'
import withApollo, { InitApolloOptions } from 'next-with-apollo'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function initApolloClient({ headers }: InitApolloOptions<any>) {
  const { apiEndpoint } = publicRuntimeConfig

  // node-fetch (used by apollo-client) requires absolute URLs,
  // so we have to resolve relative URLs when running on the server
  // https://git.io/fheC6

  let uri

  // If we are running on the server and apiEndpoint is a relative URL
  if (headers && apiEndpoint.startsWith('/')) {
    // Q: Is there a way to avoid hardcoding the protocol?
    uri = `https://${headers.host}${apiEndpoint}`
  } else {
    uri = apiEndpoint
  }

  return new ApolloClient({ uri })
}

export default withApollo(initApolloClient)
