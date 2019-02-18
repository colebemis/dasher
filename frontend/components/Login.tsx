import Router from 'next/router'
import queryString from 'query-string'

const Login: React.FC<{}> = () => {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() =>
          // Redirect to GitHub
          // https://git.io/fh5FD
          Router.push(
            `https://github.com/login/oauth/authorize?${queryString.stringify({
              client_id: process.env.githubClientId,
              redirect_uri: process.env.githubRedirectUri,
            })}`,
          )
        }
      >
        Log in with GitHub
      </button>
    </div>
  )
}

export default Login
