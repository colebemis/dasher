import React from 'react'
import theme from '../theme'
import ExternalLink from './ExternalLink'
import { SearchGitHubIssues } from '../__generated__/graphql'
import Color from 'color'

interface IssueProps {
  issue: SearchGitHubIssues
}

const Issue: React.FC<IssueProps> = ({ issue }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: theme.space[4],
      }}
    >
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
        <span
          css={{ fontSize: theme.fontSizes[1], color: theme.colors.gray[7] }}
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
        </span>
        {issue.labels && issue.labels.nodes && issue.labels.nodes.length > 0 ? (
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: theme.space[1],
            }}
          >
            {issue.labels.nodes.map(label => (
              <div
                css={{
                  margin: `${theme.space[1]} ${theme.space[1]} 0 0`,
                  padding: `${theme.space[1]} 6px`,
                  fontSize: theme.fontSizes[0],
                  fontWeight: theme.fontWeights.semibold,
                  lineHeight: theme.lineHeights.none,
                  color: Color(`#${label.color}`).isDark()
                    ? theme.colors.white
                    : theme.colors.black,
                  backgroundColor: `#${label.color}`,
                  borderRadius: theme.radii[1],
                }}
              >
                {label.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Issue
