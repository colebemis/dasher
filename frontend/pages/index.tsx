import Link from 'next/link'
import Private from '../components/Private'
import {
  GetBoardsComponent,
  GetIsSignedInDocument,
  GetViewerComponent,
  SignOutComponent,
} from '../__generated__/graphql'

const Index: React.FC<{}> = () => {
  return (
    <Private>
      <div>
        <h1>Home</h1>
        <SignOutComponent refetchQueries={[{ query: GetIsSignedInDocument }]}>
          {signOut => <button onClick={() => signOut()}>Sign out</button>}
        </SignOutComponent>
        <GetViewerComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            if (!data) return null
            return (
              <div>
                <img src={data.viewer.avatarUrl} width={50} />
                <p>{data.viewer.name}</p>
                <p>{data.viewer.login}</p>
              </div>
            )
          }}
        </GetViewerComponent>
        <GetBoardsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            if (!data || !data.signedInUser.boards) return null
            return (
              <ul>
                {data.signedInUser.boards.map(board => (
                  <li key={board.id}>
                    <Link href={`/board?id=${board.id}`}>
                      <a>
                        {board.name} ({board.query})
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )
          }}
        </GetBoardsComponent>
      </div>
    </Private>
  )
}

export default Index
