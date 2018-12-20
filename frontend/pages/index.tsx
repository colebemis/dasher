import gql from 'graphql-tag'
import Link from 'next/link'
import { Query } from 'react-apollo'

const MESSAGE_QUERY = gql`
  query MESSAGE_QUERY {
    message
  }
`

const Index: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Query query={MESSAGE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return <h1>{data.message}</h1>
        }}
      </Query>
      <Link href="/board?id=1">
        <a>Board 1</a>
      </Link>
    </div>
  )
}

export default Index
