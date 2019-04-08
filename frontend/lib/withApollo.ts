import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

export default withApollo(({ headers }) => {
  return new ApolloClient({
    uri: process.env.apiEndpoint,
    request: async operation => {
      operation.setContext({
        fetchOptions: { credentials: 'include' },
        headers,
      })
    },
  })
})
