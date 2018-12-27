import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    message: String
  }
`

const resolvers = {
  Query: {
    message: () => 'Hello World',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// tslint:disable-next-line:no-console
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
