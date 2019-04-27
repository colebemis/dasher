import Head from 'next/head'
import { withRouter, WithRouterProps } from 'next/router'
import BoardHeader from '../components/BoardHeader'
import Column from '../components/Column'
import Private from '../components/Private'
import useWindowHeight from '../lib/useWindowHeight'
import theme from '../theme'
import { GetBoardComponent } from '../__generated__/graphql'

interface Query {
  id?: string
}

const Board: React.FC<WithRouterProps<Query>> = ({ router }) => {
  if (!router || !router.query || !router.query.id) return <p>Not found</p>
  const windowHeight = useWindowHeight()
  return (
    <Private>
      <GetBoardComponent variables={{ id: router.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          if (!data || !data.board) return <p>Not found</p>
          return (
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                height: windowHeight,
              }}
            >
              <Head>
                <title>{data.board.name} | Dasher</title>
              </Head>
              <BoardHeader
                id={data.board.id}
                name={data.board.name}
                query={data.board.query}
              />
              <div
                css={{
                  display: 'flex',
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  flexGrow: 1,
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: theme.space[5],
                    '& > :not(:last-child)': {
                      marginRight: theme.space[4],
                    },
                    [theme.mediaQueries.medium]: {
                      padding: theme.space[6],
                    },
                  }}
                >
                  {data.board.columns
                    ? data.board.columns.map(column => (
                        <Column
                          key={column.id}
                          id={column.id}
                          name={column.name}
                          query={column.query}
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          )
        }}
      </GetBoardComponent>
    </Private>
  )
}

export default withRouter(Board)
