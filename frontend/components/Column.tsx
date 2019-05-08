import React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import theme from '../theme'
import {
  SearchGitHubDocument,
  SearchGitHubQuery,
} from '../__generated__/graphql'
import ColumnMenu from './ColumnMenu'
import { SpinnerIcon } from './Icon'
import Issue from './Issue'
import SecondaryButton from './SecondaryButton'

interface ColumnProps {
  boardId: string
  boardQuery: string
  id: string
  name: string
  query: string
}

const Column: React.FC<WithApolloClient<ColumnProps>> = ({
  boardId,
  boardQuery,
  id,
  name,
  query,
  client,
}) => {
  const [loading, setLoading] = React.useState(true)
  const [loadingMore, setLoadingMore] = React.useState(false)
  const [issueCount, setIssueCount] = React.useState(0)
  const [issues, setIssues] = React.useState<
    NonNullable<SearchGitHubQuery['search']['issues']>
  >([])
  const [hasNextPage, setHasNextPage] = React.useState(false)
  const [endCursor, setEndCursor] = React.useState<
    SearchGitHubQuery['search']['pageInfo']['endCursor']
  >(null)

  React.useEffect(() => {
    setLoading(true)
    client
      .query<SearchGitHubQuery>({
        query: SearchGitHubDocument,
        variables: { query: `${boardQuery} ${query}` },
      })
      .then(({ data }) => {
        setLoading(false)
        if (data.search.issues) {
          setIssueCount(data.search.issueCount)
          setIssues(data.search.issues)
          setHasNextPage(data.search.pageInfo.hasNextPage)
          setEndCursor(data.search.pageInfo.endCursor)
        }
      })
  }, [boardQuery, query])

  function loadMore() {
    setLoadingMore(true)
    client
      .query<SearchGitHubQuery>({
        query: SearchGitHubDocument,
        variables: { query: `${boardQuery} ${query}`, endCursor },
      })
      .then(({ data }) => {
        setLoadingMore(false)
        if (data.search.issues) {
          setIssues([...issues, ...data.search.issues])
          setHasNextPage(data.search.pageInfo.hasNextPage)
          setEndCursor(data.search.pageInfo.endCursor)
        }
      })
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        maxHeight: '100%',
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[2],
        boxShadow: theme.shadows.small,
        [theme.mediaQueries.medium]: {
          width: 360,
        },
      }}
    >
      <div
        css={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          padding: theme.space[2],
          borderBottom: `1px solid ${theme.colors.gray[1]}`,
        }}
      >
        <h2
          css={{
            margin: `0 ${theme.space[2]}`,
            fontSize: theme.fontSizes[3],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights.tight,
          }}
        >
          {name}
        </h2>
        {loading ? (
          <SpinnerIcon css={{ color: theme.colors.gray[4] }} />
        ) : (
          <span
            css={{
              padding: `0 6px`,
              fontSize: theme.fontSizes[0],
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.gray[7],
              backgroundColor: theme.colors.gray[1],
              borderRadius: 999,
            }}
          >
            {issueCount}
          </span>
        )}
        <div css={{ margin: '0 auto' }} />
        <ColumnMenu boardId={boardId} id={id} name={name} query={query} />
      </div>
      <div
        css={{
          overflow: 'auto',
          '& > :not(:last-child)': {
            borderBottom: `1px solid ${theme.colors.gray[1]}`,
          },
        }}
      >
        {!loading && issueCount === 0 ? (
          <div
            css={{
              padding: theme.space[6],
              textAlign: 'center',
              color: theme.colors.gray[7],
            }}
          >
            No results
          </div>
        ) : (
          <>
            {issues.map(issue => (
              // Using `!` below to remove null from issue's type because
              // there will never (I think) be any null elements in the list.
              // This seems like a mistake in GitHub's GraphQL schema.
              <Issue issue={issue!} />
            ))}
            {hasNextPage ? (
              <div css={{ padding: theme.space[4] }}>
                <SecondaryButton
                  onClick={() => loadMore()}
                  disabled={loadingMore}
                  css={{ width: '100%' }}
                >
                  {loadingMore ? 'Loading...' : 'Load more'}
                </SecondaryButton>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

export default withApollo(Column)
