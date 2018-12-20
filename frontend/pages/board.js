import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Board = ({ router }) => {
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
