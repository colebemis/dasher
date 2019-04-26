import React from 'react'

const ExternalLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = props => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
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

export default ExternalLink
