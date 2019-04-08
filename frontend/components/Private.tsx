import SignIn from './SignIn'

const Private: React.FC<{}> = ({ children }) => {
  return (
    <>
      <SignIn />
      {children}
    </>
  )
}

export default Private
