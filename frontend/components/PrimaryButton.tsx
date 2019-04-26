import React from 'react'
import theme from '../theme'
import Button from './Button'

const PrimaryButton: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return (
    <Button
      css={{
        color: theme.colors.white,
        backgroundColor: theme.colors.primary[7],
        boxShadow: theme.shadows.small,
        '&:hover:enabled': {
          backgroundColor: theme.colors.primary[6],
        },
      }}
      {...props}
    />
  )
}

export default PrimaryButton
