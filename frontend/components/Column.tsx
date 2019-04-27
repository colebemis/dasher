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
      <h3 css={{ margin: 0 }}>{name}</h3>
    </div>
  )
}

export default Column
