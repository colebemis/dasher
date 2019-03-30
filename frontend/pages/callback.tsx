import cookie from 'cookie'
import { NextContext, NextFC } from 'next'
import { AppContext } from 'next-with-apollo'
import Router from 'next/router'
import { SignInDocument, SignInMutation } from '../__generated__/graphql'

// As part of the sign-in flow, GitHub redirects back to
// this page with a temporary `code` in the query string.
// Reference: https://git.io/fhd1D

// This function will never be run because `getInitialProps`
// redirects before the page is rendered.
const Callback: NextFC<{}, {}, AppContext> = () => null

// This function is called server-side when GitHub (not the client)
// redirects to this page after authenticating the user.
Callback.getInitialProps = async context => {
  if (!context.query.code) redirect(context, '/')

  // Server only
  if (context.res) {
    // The API generates a JWT that can be passed between
    // the frontend and backend to authenticate requests.
    const { data } = await context.apolloClient.mutate<SignInMutation>({
      mutation: SignInDocument,
      variables: {
        githubCode: context.query.code,
        // The API exchanges this `githubCode` for an access token that it
        // can use to make requests to GitHub's API on behalf of the user.
        // Reference: https://git.io/fhd1D
      },
    })

    if (data) {
      // Store the JWT in an httpOnly cookie.
      context.res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.signIn.token, { httpOnly: true }),
      )
    }
  }

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
