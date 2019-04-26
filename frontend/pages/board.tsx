import Head from 'next/head'
import NextLink from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import Private from '../components/Private'
import { GetBoardComponent } from '../__generated__/graphql'
import BoardMenu from '../components/BoardMenu'
import AccountMenu from '../components/AccountMenu'
import theme from '../theme'
import { ChevronLeftIcon } from '../components/Icon'
import Link from '../components/Link'

interface Query {
  id?: string
}

const Board: React.FC<WithRouterProps<Query>> = ({ router }) => {
  if (!router || !router.query || !router.query.id) return <p>Not found</p>
  return (
    <Private>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: `${theme.space[4]} ${theme.space[4]} 0`,
        }}
      >
        <NextLink href="/" passHref={true}>
          <Link css={{ color: theme.colors.gray[7] }}>
            <ChevronLeftIcon
              css={{ marginRight: theme.space[1], color: theme.colors.gray[6] }}
            />
            Boards
          </Link>
        </NextLink>
        <div css={{ margin: '0 auto' }} />
        <AccountMenu />
      </div>
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
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: theme.space[5],
                  [theme.mediaQueries.medium]: {
                    padding: theme.space[6],
                  },
                }}
              >
                <div>
                  <h1
                    css={{
                      display: 'inline-block',
                      margin: 0,
                      fontSize: theme.fontSizes[5],
                      lineHeight: theme.lineHeights.tight,
                      [theme.mediaQueries.medium]: {
                        fontSize: theme.fontSizes[6],
                      },
                    }}
                  >
                    {data.board.name}
                  </h1>
                  <BoardMenu
                    id={data.board.id}
                    name={data.board.name}
                    query={data.board.query}
                    css={{ marginLeft: theme.space[2] }}
                  />
                </div>
                <span
                  css={{
                    fontFamily: theme.fonts.monospace,
                    fontSize: theme.fontSizes[1],
                    color: theme.colors.gray[7],
                    [theme.mediaQueries.medium]: {
                      marginTop: theme.space[1],
                      fontSize: theme.fontSizes[2],
                    },
                  }}
                >
                  {data.board.query}
                </span>
              </div>
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
