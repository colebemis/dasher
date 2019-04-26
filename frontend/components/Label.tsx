import React from 'react'
import theme from '../theme'

const Label: React.FC<React.HTMLProps<HTMLLabelElement>> = props => {
  return (
    <label
      css={{
        display: 'inline-block',
        marginBottom: theme.space[2],
        fontSize: theme.fontSizes[1],
        fontWeight: theme.fontWeights.semibold,
        lineHeight: theme.lineHeights.tight,
      }}
      {...props}
    />
  )
}

export default Label
