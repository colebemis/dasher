import { NextContext, NextFC } from 'next'
import { AppContext } from 'next-with-apollo'
import Router from 'next/router'
import { SignInDocument } from '../__generated__/graphql'

// GitHub redirects back to this page with a temporary `code` in the query string.
// Reference: https://git.io/fhd1D

const Callback: NextFC<{}, {}, AppContext> = () => {
  return null
}

Callback.getInitialProps = async context => {
  if (!context.query.code) redirect(context, '/')

  // The API generates a JWT and stores it in an httpOnly cookie that can
  // be passed between the client and server to authenticate requests.
  await context.apolloClient.mutate({
    mutation: SignInDocument,
    variables: {
      githubCode: context.query.code,
      // The API exchanges this `githubCode` for an access token that it
      // can use to make requests to GitHub's API on behalf of the user.
      // Reference: https://git.io/fhd1D
    },
  })

  redirect(context, '/')
  return {}
}

function redirect(context: NextContext, path: string) {
  if (context.res) {
    context.res.writeHead(302, { Location: path })
    context.res.end()
  } else {
    Router.replace(path)
  }
}

export default Callback
