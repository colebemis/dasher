import Link from 'next/link'
import React from 'react'
import theme from '../theme'
import BoardMenu from './BoardMenu'

interface BoardCardProps {
  id: string
  name: string
  query: string
}

const BoardCard = React.forwardRef<
  HTMLDivElement,
  BoardCardProps & React.HTMLProps<HTMLDivElement>
>(({ id, name, query, ...props }, ref) => {
  return (
    <div ref={ref} css={{ position: 'relative' }} {...props}>
      <Link href={`/board?id=${id}`} passHref={true}>
        <a
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            minHeight: '8rem',
            paddingTop: theme.space[3],
            paddingBottom: theme.space[3],
            // paddingRight is hard-coded to account for the button
            // absolutely positioned in the top-right of the card.
            paddingRight: 48,
            paddingLeft: theme.space[4],
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: theme.colors.white,
            borderRadius: theme.radii[2],
            boxShadow: theme.shadows.small,
            '&:hover': {
              boxShadow: theme.shadows.medium,
            },
            [theme.mediaQueries.medium]: {
              paddingTop: theme.space[4],
              paddingBottom: theme.space[4],
              paddingRight: 56,
              paddingLeft: theme.space[5],
            },
          }}
        >
          <span
            css={{
              fontSize: theme.fontSizes[3],
              fontWeight: theme.fontWeights.semibold,
            }}
          >
            {name}
          </span>
          <span
            css={{
              fontFamily: theme.fonts.monospace,
              fontSize: theme.fontSizes[1],
              color: theme.colors.gray[7],
            }}
          >
            {query}
          </span>
        </a>
      </Link>
      <BoardMenu
        id={id}
        name={name}
        query={query}
        css={{
          position: 'absolute',
          top: theme.space[2],
          right: theme.space[2],
          [theme.mediaQueries.medium]: {
            top: theme.space[3],
            right: theme.space[3],
          },
        }}
      />
    </div>
  )
})

export default BoardCard
