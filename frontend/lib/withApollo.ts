import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

export default withApollo(({ headers }) => {
  // node-fetch (used by apollo-client) requires absolute URLs,
  // so we have to resolve relative URLs when running on the server.
  // https://git.io/fheC6

  let uri

  // Check if we are running on the server and apiEndpoint is a relative URL.
  if (
    headers &&
    process.env.apiEndpoint &&
    process.env.apiEndpoint.startsWith('/')
  ) {
    // Q: Is there a way to avoid hardcoding the protocol?
    uri = `https://${headers.host}${process.env.apiEndpoint}`
  } else {
    uri = process.env.apiEndpoint
  }

  return new ApolloClient({
    uri,
    request: async operation => {
      operation.setContext({
        fetchOptions: { credentials: 'include' },
        headers,
      })
    },
  })
})
