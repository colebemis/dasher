import Head from 'next/head'
import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'

interface Query {
  id?: string
}

const Board: React.FunctionComponent<WithRouterProps<Query>> = ({ router }) => {
  // Q: When will router or router.query be undefined?
  if (!router || !router.query) return null

  return (
    <div>
      <Head>
        <title>{router.query.id} | Dasher</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Board {router.query.id}</h1>
    </div>
  )
}

export default withRouter(Board)
