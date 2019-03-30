import Router from 'next/router'
import queryString from 'query-string'
import React from 'react'

const SignIn: React.FC<{}> = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <div>
      <h1>Sign in</h1>
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true)
          // Redirect to request the user's GitHub idenity.
          // Reference: https://git.io/fh5FD
          Router.push(
            `https://github.com/login/oauth/authorize?${queryString.stringify({
              client_id: process.env.githubClientId,
              redirect_uri: process.env.githubRedirectUri,
            })}`,
          )
        }}
      >
        {loading ? 'Loading...' : 'Sign in with GitHub'}
      </button>
    </div>
  )
}

export default SignIn
