import Router from 'next/router'
import qs from 'query-string'
import React from 'react'
import theme from '../theme'
import PrimaryButton from './PrimaryButton'

const SignIn: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <div
      css={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.space[4],
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: theme.space[5],
        }}
      >
        <span
          css={{
            fontSize: theme.fontSizes[5],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights.none,
          }}
        >
          Dasher
        </span>
        <span
          css={{
            padding: theme.space[1],
            marginLeft: theme.space[2],
            fontFamily: theme.fonts.monospace,
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights.none,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: theme.colors.gray[7],
            backgroundColor: theme.colors.yellow[3],
            borderRadius: theme.radii[1],
          }}
        >
          Alpha
        </span>
      </div>
      <PrimaryButton
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
      </PrimaryButton>
    </div>
  )
}

export default SignIn
