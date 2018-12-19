import Head from 'next/head'
import { withRouter } from 'next/router'

const Board = ({ router }) => {
  return (
    <div>
      <Head>
        <title>{router.query.id} | Dasher</title>
      </Head>
      <h1>Board {router.query.id}</h1>
    </div>
  )
}

export default withRouter(Board)
