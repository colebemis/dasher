import React from 'react'
import {
  GetSignedInUserComponent,
  GetSignedInUserQuery,
} from '../__generated__/graphql'

const UserContext = React.createContext<
  GetSignedInUserQuery['signedInUser'] | null
>(null)

export const UserProvider: React.FC<{}> = ({ children }) => {
  return (
    <GetSignedInUserComponent>
      {({ data }) => (
        <UserContext.Provider value={data ? data.signedInUser : null}>
          {children}
        </UserContext.Provider>
      )}
    </GetSignedInUserComponent>
  )
}

export const useUser = () => React.useContext(UserContext)

export default UserContext
