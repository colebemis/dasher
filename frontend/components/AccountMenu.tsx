import theme from '../theme'
import {
  GetIsSignedInDocument,
  GetViewerComponent,
  SignOutComponent,
} from '../__generated__/graphql'
import Menu, { MenuDivider, MenuItem } from './Menu'

const AccountMenu: React.FC = () => {
  return (
    <GetViewerComponent>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data) return null
        return (
          <Menu
            placement="bottom-end"
            content={
              <>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: `${theme.space[2]} ${theme.space[4]}`,
                  }}
                >
                  <span
                    css={{
                      fontSize: theme.fontSizes[2],
                      fontWeight: theme.fontWeights.semibold,
                    }}
                  >
                    {data.viewer.name}
                  </span>
                  <span
                    css={{
                      fontSize: theme.fontSizes[1],
                      color: theme.colors.gray[7],
                    }}
                  >
                    {data.viewer.login}
                  </span>
                </div>
                <MenuDivider />
                <SignOutComponent
                  refetchQueries={[{ query: GetIsSignedInDocument }]}
                >
                  {signOut => (
                    <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
                  )}
                </SignOutComponent>
              </>
            }
          >
            <button
              aria-haspopup="true"
              aria-expanded="false"
              css={{
                padding: 0,
                backgroundColor: 'transparent',
                border: 0,
                appearance: 'none',
                cursor: 'pointer',
              }}
            >
              <img
                src={data.viewer.avatarUrl}
                css={{
                  width: '1.5rem',
                  height: '1.5rem',
                  verticalAlign: 'middle',
                  borderRadius: theme.radii[1],
                }}
              />
            </button>
          </Menu>
        )
      }}
    </GetViewerComponent>
  )
}

export default AccountMenu
