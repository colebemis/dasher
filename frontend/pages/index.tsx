import Link from 'next/link'
import Private from '../components/Private'
import theme from '../theme'
import {
  GetBoardsComponent,
  GetViewerComponent,
} from '../__generated__/graphql'

const Index: React.FC<{}> = () => {
  return (
    <Private>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.space[4],
        }}
      >
        <span
          css={{
            fontSize: theme.fontSizes[4],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights.none,
          }}
        >
          Dasher
        </span>
        <div css={{ margin: '0 auto' }} />
        {/* <SignOutComponent refetchQueries={[{ query: GetIsSignedInDocument }]}>
          {signOut => <button onClick={() => signOut()}>Sign out</button>}
        </SignOutComponent> */}
        <GetViewerComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            if (!data) return null
            return (
              <img
                src={data.viewer.avatarUrl}
                css={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: theme.radii[1],
                }}
              />
            )
          }}
        </GetViewerComponent>
      </div>
      <div
        css={{
          maxWidth: '40em',
          margin: '0 auto',
          padding: theme.space[4],
          [theme.mediaQueries.medium]: {
            padding: theme.space[6],
          },
        }}
      >
        <h1
          css={{
            margin: `0 0 ${theme.space[4]}`,
            fontSize: theme.fontSizes[6],
            lineHeight: theme.lineHeights.tight,
            [theme.mediaQueries.medium]: {
              margin: `0 0 ${theme.space[5]}`,
            },
          }}
        >
          Boards
        </h1>
        <GetBoardsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            if (!data || !data.signedInUser.boards) return null
            return (
              <>
                {data.signedInUser.boards.map(board => (
                  <Link
                    key={board.id}
                    href={`/board?id=${board.id}`}
                    passHref={true}
                  >
                    <a
                      css={{
                        display: 'block',
                        height: '8em',
                        marginBottom: theme.space[4],
                        padding: `${theme.space[3]} ${theme.space[4]}`,
                        textDecoration: 'none',
                        color: 'inherit',
                        backgroundColor: theme.colors.white,
                        borderRadius: theme.radii[2],
                        boxShadow:
                          '0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.1)',
                        [theme.mediaQueries.medium]: {
                          padding: `${theme.space[4]} ${theme.space[5]}`,
                        },
                      }}
                    >
                      <div
                        css={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <span
                          css={{
                            fontSize: theme.fontSizes[3],
                            fontWeight: theme.fontWeights.semibold,
                          }}
                        >
                          {board.name}
                        </span>
                        <span
                          css={{
                            fontFamily: theme.fonts.monospace,
                            fontSize: theme.fontSizes[1],
                            color: theme.colors.gray[7],
                          }}
                        >
                          {board.query}
                        </span>
                      </div>
                    </a>
                  </Link>
                ))}
              </>
            )
          }}
        </GetBoardsComponent>
      </div>
    </Private>
  )
}

export default Index
