import Login from './Login'

const Private: React.FC<{}> = ({ children }) => {
  return true ? <Login /> : <>{children}</>
}

export default Private
