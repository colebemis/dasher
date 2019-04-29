import React from 'react'
import theme from '../theme'

interface ColumnProps {
  id: string
  name: string
  query: string
}

const Column: React.FC<ColumnProps> = ({ name }) => {
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
      <div css={{ padding: theme.space[2] }}>
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
      </div>
    </div>
  )
}

export default Column
