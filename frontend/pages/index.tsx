import posed, { PoseGroup } from 'react-pose'
import AccountMenu from '../components/AccountMenu'
import BoardCard from '../components/BoardCard'
import Button from '../components/Button'
import { PlusIcon } from '../components/Icon'
import Private from '../components/Private'
import theme from '../theme'
import { GetBoardsComponent } from '../__generated__/graphql'
import React from 'react'
import CreateBoardForm from '../components/CreateBoardForm'
import PrimaryButton from '../components/PrimaryButton'

const PosedDiv = posed.div({
  enter: { opacity: 1, transition: { durration: 100 } },
  exit: { opacity: 0, transition: { durration: 100 } },
})

const Index: React.FC = () => {
  const [
    isCreateBoardFormVisible,
    setIsCreateBoardFormVisible,
  ] = React.useState(false)
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
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.space[4],
            [theme.mediaQueries.medium]: {
              marginBottom: theme.space[5],
            },
          }}
        >
          <h1
            css={{
              margin: 0,
              fontSize: theme.fontSizes[6],
              lineHeight: theme.lineHeights.tight,
            }}
          >
            Boards
          </h1>
          <PrimaryButton
            disabled={isCreateBoardFormVisible}
            onClick={() => setIsCreateBoardFormVisible(true)}
            css={{ padding: `${theme.space[2]} ${theme.space[3]}` }}
          >
            <PlusIcon
              css={{
                marginRight: theme.space[2],
                color: theme.colors.primary[1],
              }}
            />
            New board
          </PrimaryButton>
        </div>
        <GetBoardsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            if (!data || !data.signedInUser.boards) return null
            return (
              <div
                css={{
                  display: 'grid',
                  gridGap: theme.space[4],
                }}
              >
                <PoseGroup>
                  {[
                    isCreateBoardFormVisible && (
                      <PosedDiv key="create-board-form">
                        <CreateBoardForm
                          onCancel={() => setIsCreateBoardFormVisible(false)}
                        />
                      </PosedDiv>
                    ),
                    ...data.signedInUser.boards.map(board => (
                      <PosedDiv key={board.id}>
                        <BoardCard
                          id={board.id}
                          name={board.name}
                          query={board.query}
                        />
                      </PosedDiv>
                    )),
                  ]}
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
