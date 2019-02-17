import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

function createClient() {
  return new ApolloClient({ uri: process.env.apiEndpoint })
}

export default withApollo(createClient)
