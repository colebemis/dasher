import Color from 'color'
import React from 'react'
import timeDifference from '../lib/timeDifference'
import theme from '../theme'
import { SearchGitHubQuery } from '../__generated__/graphql'
import ExternalLink from './ExternalLink'
import StateIcon from './StateIcon'

interface IssueProps {
  issue: NonNullable<NonNullable<SearchGitHubQuery['search']['issues']>[0]>
}

const Issue: React.FC<IssueProps> = ({ issue }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: theme.space[4],
        paddingRight: theme.space[5],
      }}
    >
      <div css={{ marginRight: theme.space[3], flexShrink: 0 }}>
        <StateIcon issue={issue} css={{ verticalAlign: 'baseline' }} />
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ExternalLink
          href={issue.url}
          css={{
            marginBottom: theme.space[1],
            lineHeight: theme.lineHeights.tight,
            fontWeight: theme.fontWeights.medium,
          }}
        >
          {issue.title}
        </ExternalLink>
        <div
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: theme.fontSizes[1],
            color: theme.colors.gray[7],
          }}
        >
          <ExternalLink href={issue.repository.url}>
            {issue.repository.nameWithOwner}
          </ExternalLink>
          {issue.author ? (
            <>
              <span css={{ margin: `0 ${theme.space[1]}` }}>·</span>
              <ExternalLink href={issue.author.url}>
                {issue.author.login}
              </ExternalLink>
            </>
          ) : null}
          <span css={{ margin: `0 ${theme.space[1]}` }}>·</span>
          {timeDifference(new Date(issue.createdAt))}
        </div>
        {issue.labels && issue.labels.nodes && issue.labels.nodes.length > 0 ? (
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: theme.space[1],
            }}
          >
            {issue.labels.nodes.map(label => (
              // Using `!` below to remove null from label's type because
              // there will never (I think) be any null elements in the list.
              // This seems like a mistake in GitHub's GraphQL schema.
              <div
                key={label!.id}
                css={{
                  margin: `${theme.space[1]} ${theme.space[1]} 0 0`,
                  padding: `${theme.space[1]} 6px`,
                  fontSize: theme.fontSizes[0],
                  fontWeight: theme.fontWeights.semibold,
                  lineHeight: theme.lineHeights.none,
                  color: Color(`#${label!.color}`).isDark()
                    ? theme.colors.white
                    : theme.colors.black,
                  backgroundColor: `#${label!.color}`,
                  borderRadius: theme.radii[1],
                }}
              >
                {label!.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Issue
