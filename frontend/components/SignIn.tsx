import Router from 'next/router'
import queryString from 'query-string'

const SignIn: React.FC<{}> = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <button
        onClick={() =>
          // Redirect to request the user's GitHub idenity.
          // Reference: https://git.io/fh5FD
          Router.push(
            `https://github.com/login/oauth/authorize?${queryString.stringify({
              client_id: process.env.githubClientId,
              redirect_uri: process.env.githubRedirectUri,
            })}`,
          )
        }
      >
        Sign in with GitHub
      </button>
    </div>
  )
}

export default SignIn
