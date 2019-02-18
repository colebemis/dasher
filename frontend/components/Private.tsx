import SignIn from './SignIn'

const Private: React.FC<{}> = ({ children }) => {
  return true ? <SignIn /> : <>{children}</>
}

export default Private
