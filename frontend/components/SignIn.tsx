import Router from 'next/router'
import qs from 'query-string'
import React from 'react'
import theme from '../theme'
import Button from './Button'

const SignIn: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <div css={{ padding: theme.space[4] }}>
      <h1>Sign in</h1>
      <Button
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
        css={{
          color: theme.colors.white,
          backgroundColor: theme.colors.gray[9],
          boxShadow: theme.shadows.small,
          '&:hover': {
            backgroundColor: theme.colors.gray[8],
          },
        }}
      >
        {loading ? 'Loading...' : 'Sign in with GitHub'}
      </Button>
    </div>
  )
}

export default SignIn
