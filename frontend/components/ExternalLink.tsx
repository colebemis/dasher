import React from 'react'
import Link from './Link'

const ExternalLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = props => {
  return <Link target="_blank" rel="noopener noreferrer" {...props} />
}

export default ExternalLink
