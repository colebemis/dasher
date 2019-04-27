import NextLink from 'next/link'
import AccountMenu from '../components/AccountMenu'
import BoardMenu from '../components/BoardMenu'
import { ChevronLeftIcon } from '../components/Icon'
import Link from '../components/Link'
import theme from '../theme'

interface BoardHeaderProps {
  id: string
  name: string
  query: string
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ id, name, query }) => {
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
            {name}
          </h1>
          <BoardMenu
            id={id}
            name={name}
            query={query}
            css={{
              marginLeft: theme.space[1],
              [theme.mediaQueries.medium]: {
                marginLeft: theme.space[2],
              },
            }}
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
          {query}
        </span>
      </div>
    </div>
  )
}

export default BoardHeader
