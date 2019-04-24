import React from 'react'
import theme from '../theme'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return (
    <button
      css={{
        margin: 0,
        padding: `${theme.space[2]} ${theme.space[4]}`,
        fontSize: theme.fontSizes[1],
        fontWeight: theme.fontWeights.semibold,
        fontFamily: 'inherit',
        lineHeight: theme.lineHeights.normal,
        border: 0,
        borderRadius: theme.radii[1],
        appearance: 'none',
        cursor: 'pointer',
        '&:disabled': {
          opacity: 0.5,
        },
      }}
      {...props}
    />
  )
}

export default Button
