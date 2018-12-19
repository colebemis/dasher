import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/board?id=1">
        <a>Board 1</a>
      </Link>
    </div>
  )
}

export default Index
