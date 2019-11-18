import React from 'react'
import SignIn from './SignIn'
import { useUser } from './UserContext'

const Private: React.FC = ({ children }) => {
  const user = useUser()

  if (!user) {
    return <SignIn />
  }

  return <>{children}</>
}

export default Private
