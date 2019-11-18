import Head from 'next/head'
import { withRouter, WithRouterProps } from 'next/router'
import React from 'react'
import BoardHeader from '../components/BoardHeader'
import Columns from '../components/Columns'
import Private from '../components/Private'
import useWindowHeight from '../lib/useWindowHeight'
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
              <BoardHeader board={board} />
              <Columns board={board} />
            </div>
          )
        }}
      </GetBoardComponent>
    </Private>
  )
}

export default withRouter(Board)
