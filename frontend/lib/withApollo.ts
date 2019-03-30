import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

export default withApollo(() => {
  return new ApolloClient({
    uri: process.env.apiEndpoint,
    credentials: 'include',
  })
})
