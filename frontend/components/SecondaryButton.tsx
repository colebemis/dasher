import React from 'react'
import theme from '../theme'
import Button from './Button'

const SecondaryButton: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return (
    <Button
      css={{
        color: theme.colors.gray[7],
        backgroundColor: theme.colors.gray[1],
        '&:hover:enabled': {
          backgroundColor: theme.colors.gray[2],
        },
      }}
      {...props}
    />
  )
}

export default SecondaryButton
