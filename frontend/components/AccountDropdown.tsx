import Tippy from '@tippy.js/react'
import theme from '../theme'
import {
  GetIsSignedInDocument,
  GetViewerComponent,
  SignOutComponent,
} from '../__generated__/graphql'

const AccountDropdown: React.FC = () => {
  return (
    <GetViewerComponent>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data) return null
        return (
          <Tippy
            trigger="click"
            interactive={true}
            arrow={true}
            arrowType="round"
            appendTo="parent"
            onMount={({ reference }) => {
              reference.setAttribute('aria-expanded', 'true')
            }}
            onHide={({ reference }) => {
              reference.setAttribute('aria-expanded', 'false')
            }}
            css={{
              padding: `${theme.space[2]} 0`,
              textAlign: 'left',
              lineHeight: theme.lineHeights.normal,
              backgroundColor: theme.colors.gray[9],
              borderRadius: theme.radii[2],
              boxShadow: theme.shadows.large,
              '.tippy-roundarrow': {
                fill: theme.colors.gray[9],
              },
            }}
            content={
              <>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: '10rem',
                    padding: `${theme.space[1]} ${theme.space[4]} ${
                      theme.space[2]
                    }`,
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
                      color: theme.colors.gray[4],
                    }}
                  >
                    {data.viewer.login}
                  </span>
                </div>
                <div
                  css={{
                    width: '100%',
                    margin: `${theme.space[2]} 0`,
                    borderTop: `1px solid ${theme.colors.gray[7]}`,
                  }}
                />
                <SignOutComponent
                  refetchQueries={[{ query: GetIsSignedInDocument }]}
                >
                  {signOut => (
                    <button
                      onClick={() => signOut()}
                      css={{
                        width: '100%',
                        padding: `${theme.space[2]} ${theme.space[4]}`,
                        textAlign: 'left',
                        fontSize: theme.fontSizes[1],
                        lineHeight: theme.lineHeights.tight,
                        color: 'inherit',
                        backgroundColor: 'transparent',
                        border: 0,
                        appearance: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.colors.gray[8],
                        },
                      }}
                    >
                      Sign out
                    </button>
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
                background: 'transparent',
                border: 0,
                appearance: 'none',
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
          </Tippy>
        )
      }}
    </GetViewerComponent>
  )
}

export default AccountDropdown
