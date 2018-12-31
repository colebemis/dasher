import Link from 'next/link'
import { GetUsersComponent } from '../__generated__/graphql'

const Index: React.FunctionComponent<{}> = () => {
  return (
    <div css={{ color: 'red' }}>
      <GetUsersComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          if (!data) return <p>Not found</p>
          return (
            <ul>
              {data.users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )
        }}
      </GetUsersComponent>
      <Link href="/board?id=1">
        <a>Board 1</a>
      </Link>
    </div>
  )
}

export default Index
