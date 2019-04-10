import Private from '../components/Private'
import {
  GetViewerComponent,
  SignOutComponent,
  GetIsSignedInDocument,
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
      </div>
    </Private>
  )
}

export default Index
