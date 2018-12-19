const { ApolloServer, gql } = require('apollo-server')

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

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
