import Head from 'next/head'
import { withRouter, WithRouterProps } from 'next/router'
import React from 'react'
import BoardHeader from '../components/BoardHeader'
import Button from '../components/Button'
import Column from '../components/Column'
import CreateColumnForm from '../components/CreateColumnForm'
import { PlusIcon } from '../components/Icon'
import Private from '../components/Private'
import useWindowHeight from '../lib/useWindowHeight'
import theme from '../theme'
import {
  CreateColumnComponent,
  GetBoardComponent,
  GetBoardDocument,
} from '../__generated__/graphql'

interface Query {
  id?: string
}

const Board: React.FC<WithRouterProps<Query>> = ({ router }) => {
  if (!router || !router.query || !router.query.id) return <p>Not found</p>
  const [
    isCreateColumnFormVisible,
    setIsCreateColumnFormVisible,
  ] = React.useState(false)
  const windowHeight = useWindowHeight()
  return (
    <Private>
      <GetBoardComponent variables={{ id: router.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          if (!data || !data.board) return <p>Not found</p>
          const { board } = data
          return (
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                height: windowHeight,
              }}
            >
              <Head>
                <title>{board.name} | Dasher</title>
              </Head>
              <BoardHeader
                id={board.id}
                name={board.name}
                query={board.query}
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
                  {board.columns
                    ? board.columns.map(column => (
                        <Column
                          key={column.id}
                          boardId={board.id}
                          id={column.id}
                          name={column.name}
                          query={column.query}
                        />
                      ))
                    : null}
                  <div
                    css={{
                      width: 320,
                      [theme.mediaQueries.medium]: {
                        width: 360,
                      },
                    }}
                  >
                    {isCreateColumnFormVisible ? (
                      <CreateColumnComponent
                        awaitRefetchQueries={true}
                        refetchQueries={[
                          {
                            query: GetBoardDocument,
                            variables: { id: board.id },
                          },
                        ]}
                      >
                        {createColumn => (
                          <CreateColumnForm
                            onSubmit={async values => {
                              await createColumn({
                                variables: {
                                  boardId: board.id,
                                  ...values,
                                },
                              })
                              setIsCreateColumnFormVisible(false)
                            }}
                            onCancel={() => setIsCreateColumnFormVisible(false)}
                          />
                        )}
                      </CreateColumnComponent>
                    ) : (
                      <Button
                        onClick={() => setIsCreateColumnFormVisible(true)}
                        css={{
                          width: '100%',
                          padding: theme.space[8],
                          color: theme.colors.gray[7],
                          backgroundColor: theme.colors.gray[2],
                          borderRadius: theme.radii[2],
                          '&:hover': {
                            backgroundColor: theme.colors.gray[3],
                          },
                        }}
                      >
                        <PlusIcon
                          css={{
                            marginRight: theme.space[2],
                            color: theme.colors.gray[6],
                          }}
                        />
                        Add column
                      </Button>
                    )}
                  </div>
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
