import Router from 'next/router'
import qs from 'query-string'
import React from 'react'

const SignIn: React.FC = () => {
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
            `https://github.com/login/oauth/authorize?${qs.stringify({
              client_id: process.env.githubClientId,
              redirect_uri: `${process.env.githubRedirectUri}?${qs.stringify({
                from: Router.asPath,
              })}`,
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
