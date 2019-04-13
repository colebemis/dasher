import { GetIsSignedInComponent } from '../__generated__/graphql'
import SignIn from './SignIn'

const Private: React.FC = ({ children }) => {
  return (
    <GetIsSignedInComponent>
      {({ loading, data }) => {
        if (loading) return <p>Loading...</p>
        if (!data || !data.isSignedIn) return <SignIn />
        return children
      }}
    </GetIsSignedInComponent>
  )
}

export default Private
