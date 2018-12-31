import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function createClient() {
  return new ApolloClient({ uri: publicRuntimeConfig.apiEndpoint })
}

export default withApollo(createClient)
