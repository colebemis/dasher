import React from 'react'
import theme from '../theme'
import {
  GitHubIssueState,
  GitHubPullRequestState,
  SearchGitHubQuery,
} from '../__generated__/graphql'
import { IssueIcon, MergeIcon, PullRequestIcon } from './Icon'

interface StateIconProps {
  issue: NonNullable<NonNullable<SearchGitHubQuery['search']['issues']>[0]>
}

const StateIcon: React.FC<StateIconProps & React.SVGProps<SVGSVGElement>> = ({
  issue,
  ...props
}) => {
  switch (issue.__typename) {
    case 'GitHubIssue':
      switch (issue.issueState) {
        case GitHubIssueState.Open:
          return <IssueIcon fill={theme.colors.green[6]} {...props} />

        case GitHubIssueState.Closed:
          return <IssueIcon fill={theme.colors.red[6]} {...props} />

        default:
          return null
      }

    case 'GitHubPullRequest':
      switch (issue.pullRequestState) {
        case GitHubPullRequestState.Open:
          return <PullRequestIcon fill={theme.colors.green[6]} {...props} />

        case GitHubPullRequestState.Closed:
          return <PullRequestIcon fill={theme.colors.red[6]} {...props} />

        case GitHubPullRequestState.Merged:
          return <MergeIcon fill={theme.colors.violet[6]} {...props} />

        default:
          return null
      }

    default:
      return null
  }
}

export default StateIcon
