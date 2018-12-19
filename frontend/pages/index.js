import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Dasher</title>
      </Head>
      <h1>Hello World</h1>
      <Link href="/board?id=1">
        <a>Board 1</a>
      </Link>
    </div>
  )
}

export default Index
