import React from 'react'

const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = props => {
  return (
    <a
      css={{
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      {...props}
    />
  )
}

export default Link
