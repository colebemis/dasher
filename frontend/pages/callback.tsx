import { NextContext, NextFC } from 'next'
import Router from 'next/router'

const Callback: NextFC<{}> = () => {
  return null
}

Callback.getInitialProps = context => {
  if (!context.query.code) redirect(context, '/')
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
