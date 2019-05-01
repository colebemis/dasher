import React from 'react'
import theme from '../theme'
import ColumnMenu from './ColumnMenu'

interface ColumnProps {
  boardId: string
  id: string
  name: string
  query: string
}

const Column: React.FC<ColumnProps> = ({ boardId, id, name, query }) => {
  return (
    <div
      css={{
        width: 320,
        maxHeight: '100%',
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[2],
        boxShadow: theme.shadows.small,
        [theme.mediaQueries.medium]: {
          width: 360,
        },
      }}
    >
      <div
        css={{ display: 'flex', alignItems: 'center', padding: theme.space[2] }}
      >
        <h2
          css={{
            margin: `0 ${theme.space[2]}`,
            fontSize: theme.fontSizes[3],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights.tight,
          }}
        >
          {name}
        </h2>
        <div css={{ margin: '0 auto' }} />
        <ColumnMenu boardId={boardId} id={id} name={name} query={query} />
      </div>
    </div>
  )
}

export default Column
