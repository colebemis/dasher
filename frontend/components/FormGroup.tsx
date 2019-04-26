import React from 'react'

const FormGroup: React.FC = props => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      {...props}
    />
  )
}

export default FormGroup
