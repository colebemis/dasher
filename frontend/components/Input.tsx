import React from 'react'
import theme from '../theme'

interface InputProps {
  as?: 'input' | 'textarea'
}

const Input: React.FC<InputProps & React.HTMLProps<any>> = ({
  as: Component = 'input',
  ...props
}) => {
  return (
    <Component
      css={{
        width: '100%',
        margin: 0,
        padding: `${theme.space[2]} ${theme.space[3]}`,
        fontFamily: 'inherit',
        fontSize: theme.fontSizes[2],
        lineHeight: theme.lineHeights.normal,
        color: 'inherit',
        border: 0,
        borderRadius: theme.radii[1],
      }}
      {...props}
    />
  )
}

export default Input
