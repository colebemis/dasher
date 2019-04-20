import AccountMenu from '../components/AccountMenu'
import BoardCard from '../components/BoardCard'
import Private from '../components/Private'
import theme from '../theme'
import { GetBoardsComponent } from '../__generated__/graphql'
import posed, { PoseGroup } from 'react-pose'

const PosedBoardCard = posed(BoardCard)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const Index: React.FC = () => {
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
        <AccountMenu />
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
              <div
                css={{
                  '& > :not(:last-child)': {
                    marginBottom: theme.space[4],
                  },
                }}
              >
                <PoseGroup>
                  {data.signedInUser.boards.map(board => (
                    <PosedBoardCard
                      key={board.id}
                      id={board.id}
                      name={board.name}
                      query={board.query}
                    />
                  ))}
                </PoseGroup>
              </div>
            )
          }}
        </GetBoardsComponent>
      </div>
    </Private>
  )
}

export default Index
