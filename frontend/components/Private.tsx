import React from 'react'
import SignIn from './SignIn'
import UserContext from './UserContext'

const Private: React.FC = ({ children }) => {
  const user = React.useContext(UserContext)

  if (!user) return <SignIn />

  return <>{children}</>
}

export default Private
