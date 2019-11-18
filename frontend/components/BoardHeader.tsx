import NextLink from 'next/link'
import React from 'react'
import theme from '../theme'
import { GetBoardQuery } from '../__generated__/graphql'
import AccountMenu from './AccountMenu'
import BoardMenu from './BoardMenu'
import { ChevronLeftIcon } from './Icon'
import Link from './Link'
import { useUser } from './UserContext'

interface BoardHeaderProps {
  board: NonNullable<GetBoardQuery['board']>
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ board }) => {
  const user = useUser()
  return (
    <div>
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
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          padding: `${theme.space[5]} ${theme.space[5]} 0`,
          [theme.mediaQueries.medium]: {
            padding: `${theme.space[6]} ${theme.space[6]} 0`,
          },
        }}
      >
        <div>
          <h1
            css={{
              display: 'inline',
              margin: 0,
              fontSize: theme.fontSizes[5],
              lineHeight: theme.lineHeights.none,
              [theme.mediaQueries.medium]: {
                fontSize: theme.fontSizes[6],
              },
            }}
          >
            {board.name}
          </h1>
          {user && user.id === board.owner.id ? (
            <BoardMenu
              id={board.id}
              name={board.name}
              query={board.query}
              css={{
                marginLeft: theme.space[1],
                [theme.mediaQueries.medium]: {
                  marginLeft: theme.space[2],
                },
              }}
            />
          ) : null}
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
          {board.query}
        </span>
      </div>
    </div>
  )
}

export default BoardHeader
