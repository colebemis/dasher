import Router from 'next/router'
import React from 'react'
import AccountMenu from '../components/AccountMenu'
import BoardCard from '../components/BoardCard'
import CreateBoardForm from '../components/CreateBoardForm'
import { PlusIcon } from '../components/Icon'
import PrimaryButton from '../components/PrimaryButton'
import Private from '../components/Private'
import theme from '../theme'
import {
  CreateBoardComponent,
  GetBoardsComponent,
  GetBoardsDocument,
} from '../__generated__/graphql'

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
          padding: `${theme.space[4]} ${theme.space[4]} 0`,
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
        <span
          css={{
            padding: theme.space[1],
            marginLeft: theme.space[2],
            fontFamily: theme.fonts.monospace,
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights.none,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: theme.colors.gray[7],
            backgroundColor: theme.colors.gray[3],
            borderRadius: theme.radii[1],
          }}
        >
          Alpha
        </span>
        <div css={{ margin: '0 auto' }} />
        <AccountMenu />
      </div>
      <div
        css={{
          maxWidth: '40em',
          margin: '0 auto',
          padding: `${theme.space[6]} ${theme.space[5]}`,
          [theme.mediaQueries.medium]: {
            padding: `${theme.space[8]} ${theme.space[5]}`,
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
                {isCreateBoardFormVisible ? (
                  <CreateBoardComponent
                    refetchQueries={[{ query: GetBoardsDocument }]}
                  >
                    {createBoard => (
                      <CreateBoardForm
                        onSubmit={async values => {
                          const result = await createBoard({
                            variables: values,
                          })
                          if (result && result.data) {
                            Router.push(
                              `/board?id=${result.data.createBoard.id}`,
                            )
                          }
                        }}
                        onCancel={() => setIsCreateBoardFormVisible(false)}
                      />
                    )}
                  </CreateBoardComponent>
                ) : null}
                {data.signedInUser.boards.map(board => (
                  <BoardCard
                    key={board.id}
                    id={board.id}
                    name={board.name}
                    query={board.query}
                  />
                ))}
              </div>
            )
          }}
        </GetBoardsComponent>
      </div>
    </Private>
  )
}

export default Index
