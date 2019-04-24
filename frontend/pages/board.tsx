import Head from 'next/head'
import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import Private from '../components/Private'
import { GetBoardComponent } from '../__generated__/graphql'
import BoardMenu from '../components/BoardMenu'

interface Query {
  id?: string
}

const Board: React.FC<WithRouterProps<Query>> = ({ router }) => {
  if (!router || !router.query || !router.query.id) return <p>Not found</p>
  return (
    <Private>
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
              <p>{data.board.query}</p>
              <BoardMenu
                id={data.board.id}
                name={data.board.name}
                query={data.board.query}
              />
              {data.board.columns
                ? data.board.columns.map(column => (
                    <div key={column.id}>
                      <h2>
                        {column.name} ({column.query})
                      </h2>
                    </div>
                  ))
                : null}
            </div>
          )
        }}
      </GetBoardComponent>
    </Private>
  )
}

export default withRouter(Board)
