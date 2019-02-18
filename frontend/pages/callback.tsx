import { NextContext, NextFC } from 'next'
import Router from 'next/router'
import { AppContext } from 'next-with-apollo'
import { SignInDocument } from '../__generated__/graphql'

const Callback: NextFC<{}, {}, AppContext> = () => {
  return null
}

Callback.getInitialProps = async context => {
  if (!context.query.code) redirect(context, '/')

  // Sign in
  await context.apolloClient.mutate({
    mutation: SignInDocument,
    variables: { githubCode: context.query.code },
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
