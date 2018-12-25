import Link from 'next/link'
import MessageQuery from '../components/MessageQuery'

const Index: React.FunctionComponent<{}> = () => {
  return (
    <div
      css={`
        color: red;
      `}
    >
      <MessageQuery>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          if (!data) return <p>Not found</p>
          return <h1>{data.message}</h1>
        }}
      </MessageQuery>
      <Link href="/board?id=1">
        <a>Board 1</a>
      </Link>
    </div>
  )
}

export default Index
