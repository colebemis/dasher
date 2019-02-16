import Head from 'next/head'
import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import { GetBoardComponent } from '../__generated__/graphql'

interface Query {
  id?: string
}

const Board: React.FC<WithRouterProps<Query>> = ({ router }) => {
  // Q: When will router or router.query be undefined?
  if (!router || !router.query || !router.query.id) return <p>Not found</p>

  return (
    <GetBoardComponent variables={{ id: router.query.id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data || !data.board) return <p>Not found</p>

        return (
          <div>
            <Head>
              <title>{data.board.name} | Dasher</title>
            </Head>
            <Link href="/">
              <a>Home</a>
            </Link>
            <h1>{data.board.name}</h1>
            <span>{data.board.query}</span>
            {data.board.columns
              ? data.board.columns.map(column => (
                  <div key={column.id}>
                    <h2>{column.name}</h2>
                    <span>{column.query}</span>
                  </div>
                ))
              : null}
          </div>
        )
      }}
    </GetBoardComponent>
  )
}

export default withRouter(Board)
