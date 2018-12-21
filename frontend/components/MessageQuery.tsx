import gql from 'graphql-tag'
import { Query } from 'react-apollo'

interface MessageQueryData {
  message: string
}

const MESSAGE_QUERY = gql`
  query {
    message
  }
`

class MessageQuery extends Query<MessageQueryData, {}> {
  public static defaultProps = {
    query: MESSAGE_QUERY,
  }
}

export default MessageQuery
