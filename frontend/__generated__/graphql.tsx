export type Maybe<T> = T | null;

export interface BoardWhereUniqueInput {
  id?: Maybe<string>;
}

export interface BoardWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  owner?: Maybe<UserWhereInput>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  query?: Maybe<string>;

  query_not?: Maybe<string>;

  query_in?: Maybe<string[]>;

  query_not_in?: Maybe<string[]>;

  query_lt?: Maybe<string>;

  query_lte?: Maybe<string>;

  query_gt?: Maybe<string>;

  query_gte?: Maybe<string>;

  query_contains?: Maybe<string>;

  query_not_contains?: Maybe<string>;

  query_starts_with?: Maybe<string>;

  query_not_starts_with?: Maybe<string>;

  query_ends_with?: Maybe<string>;

  query_not_ends_with?: Maybe<string>;

  columns_every?: Maybe<ColumnWhereInput>;

  columns_some?: Maybe<ColumnWhereInput>;

  columns_none?: Maybe<ColumnWhereInput>;

  AND?: Maybe<BoardWhereInput[]>;

  OR?: Maybe<BoardWhereInput[]>;

  NOT?: Maybe<BoardWhereInput[]>;
}

export interface UserWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  gitHubId?: Maybe<string>;

  gitHubId_not?: Maybe<string>;

  gitHubId_in?: Maybe<string[]>;

  gitHubId_not_in?: Maybe<string[]>;

  gitHubId_lt?: Maybe<string>;

  gitHubId_lte?: Maybe<string>;

  gitHubId_gt?: Maybe<string>;

  gitHubId_gte?: Maybe<string>;

  gitHubId_contains?: Maybe<string>;

  gitHubId_not_contains?: Maybe<string>;

  gitHubId_starts_with?: Maybe<string>;

  gitHubId_not_starts_with?: Maybe<string>;

  gitHubId_ends_with?: Maybe<string>;

  gitHubId_not_ends_with?: Maybe<string>;

  boards_every?: Maybe<BoardWhereInput>;

  boards_some?: Maybe<BoardWhereInput>;

  boards_none?: Maybe<BoardWhereInput>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface ColumnWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  board?: Maybe<BoardWhereInput>;

  index?: Maybe<number>;

  index_not?: Maybe<number>;

  index_in?: Maybe<number[]>;

  index_not_in?: Maybe<number[]>;

  index_lt?: Maybe<number>;

  index_lte?: Maybe<number>;

  index_gt?: Maybe<number>;

  index_gte?: Maybe<number>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  query?: Maybe<string>;

  query_not?: Maybe<string>;

  query_in?: Maybe<string[]>;

  query_not_in?: Maybe<string[]>;

  query_lt?: Maybe<string>;

  query_lte?: Maybe<string>;

  query_gt?: Maybe<string>;

  query_gte?: Maybe<string>;

  query_contains?: Maybe<string>;

  query_not_contains?: Maybe<string>;

  query_starts_with?: Maybe<string>;

  query_not_starts_with?: Maybe<string>;

  query_ends_with?: Maybe<string>;

  query_not_ends_with?: Maybe<string>;

  AND?: Maybe<ColumnWhereInput[]>;

  OR?: Maybe<ColumnWhereInput[]>;

  NOT?: Maybe<ColumnWhereInput[]>;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface GitHubIssueOrder {
  /** The field in which to order issues by. */
  field: GitHubIssueOrderField;
  /** The direction in which to order issues by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ways in which to filter lists of issues. */
export interface GitHubIssueFilters {
  /** List issues assigned to given name. Pass in `null` for issues with no assigned user, and `*` for issues assigned to any user. */
  assignee?: Maybe<string>;
  /** List issues created by given name. */
  createdBy?: Maybe<string>;
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<string[]>;
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<string>;
  /** List issues by given milestone argument. If an string representation of an integer is passed, it should refer to a milestone by its number field. Pass in `null` for issues with no milestone, and `*` for issues that are assigned to any milestone. */
  milestone?: Maybe<string>;
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<GitHubDateTime>;
  /** List issues filtered by the list of states given. */
  states?: Maybe<GitHubIssueState[]>;
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: Maybe<boolean>;
}
/** Ways in which star connections can be ordered. */
export interface GitHubStarOrder {
  /** The field in which to order nodes by. */
  field: GitHubStarOrderField;
  /** The direction in which to order nodes. */
  direction: GitHubOrderDirection;
}
/** Ordering options for repository connections */
export interface GitHubRepositoryOrder {
  /** The field to order repositories by. */
  field: GitHubRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ordering options for user status connections. */
export interface GitHubUserStatusOrder {
  /** The field to order user statuses by. */
  field: GitHubUserStatusOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ways in which lists of projects can be ordered upon return. */
export interface GitHubProjectOrder {
  /** The field in which to order projects by. */
  field: GitHubProjectOrderField;
  /** The direction in which to order projects by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ways in which team connections can be ordered. */
export interface GitHubTeamOrder {
  /** The field in which to order nodes by. */
  field: GitHubTeamOrderField;
  /** The direction in which to order nodes. */
  direction: GitHubOrderDirection;
}
/** Ordering options for team member connections */
export interface GitHubTeamMemberOrder {
  /** The field to order team members by. */
  field: GitHubTeamMemberOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ordering options for team repository connections */
export interface GitHubTeamRepositoryOrder {
  /** The field to order repositories by. */
  field: GitHubTeamRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ways in which lists of reactions can be ordered upon return. */
export interface GitHubReactionOrder {
  /** The field in which to order reactions by. */
  field: GitHubReactionOrderField;
  /** The direction in which to order reactions by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface GitHubPullRequestOrder {
  /** The field in which to order pull requests by. */
  field: GitHubPullRequestOrderField;
  /** The direction in which to order pull requests by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ordering options for deployment connections */
export interface GitHubDeploymentOrder {
  /** The field to order deployments by. */
  field: GitHubDeploymentOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Specifies an author for filtering Git commits. */
export interface GitHubCommitAuthor {
  /** ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails. */
  id?: Maybe<string>;
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<string[]>;
}
/** Ordering options for language connections. */
export interface GitHubLanguageOrder {
  /** The field to order languages by. */
  field: GitHubLanguageOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ordering options for milestone connections. */
export interface GitHubMilestoneOrder {
  /** The field to order milestones by. */
  field: GitHubMilestoneOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ways in which lists of git refs can be ordered upon return. */
export interface GitHubRefOrder {
  /** The field in which to order refs by. */
  field: GitHubRefOrderField;
  /** The direction in which to order refs by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ways in which lists of releases can be ordered upon return. */
export interface GitHubReleaseOrder {
  /** The field in which to order releases by. */
  field: GitHubReleaseOrderField;
  /** The direction in which to order releases by the specified field. */
  direction: GitHubOrderDirection;
}
/** Ordering options for commit contribution connections. */
export interface GitHubCommitContributionOrder {
  /** The field by which to order commit contributions. */
  field: GitHubCommitContributionOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ordering options for contribution connections. */
export interface GitHubContributionOrder {
  /** The field by which to order contributions. */
  field: GitHubContributionOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Ordering options for gist connections */
export interface GitHubGistOrder {
  /** The field to order repositories by. */
  field: GitHubGistOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Autogenerated input type of AcceptTopicSuggestion */
export interface GitHubAcceptTopicSuggestionInput {
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The name of the suggested topic. */
  name: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddAssigneesToAssignable */
export interface GitHubAddAssigneesToAssignableInput {
  /** The id of the assignable object to add assignees to. */
  assignableId: string;
  /** The id of users to add as assignees. */
  assigneeIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddComment */
export interface GitHubAddCommentInput {
  /** The Node ID of the subject to modify. */
  subjectId: string;
  /** The contents of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddLabelsToLabelable */
export interface GitHubAddLabelsToLabelableInput {
  /** The id of the labelable object to add labels to. */
  labelableId: string;
  /** The ids of the labels to add. */
  labelIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddProjectCard */
export interface GitHubAddProjectCardInput {
  /** The Node ID of the ProjectColumn. */
  projectColumnId: string;
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<string>;
  /** The note on the card. */
  note?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddProjectColumn */
export interface GitHubAddProjectColumnInput {
  /** The Node ID of the project. */
  projectId: string;
  /** The name of the column. */
  name: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddPullRequestReviewComment */
export interface GitHubAddPullRequestReviewCommentInput {
  /** The Node ID of the review to modify. */
  pullRequestReviewId: string;
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<GitHubGitObjectId>;
  /** The text of the comment. */
  body: string;
  /** The relative path of the file to comment on. */
  path?: Maybe<string>;
  /** The line index in the diff to comment on. */
  position?: Maybe<number>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddPullRequestReview */
export interface GitHubAddPullRequestReviewInput {
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<GitHubGitObjectId>;
  /** The contents of the review body comment. */
  body?: Maybe<string>;
  /** The event to perform on the pull request review. */
  event?: Maybe<GitHubPullRequestReviewEvent>;
  /** The review line comments. */
  comments?: Maybe<GitHubDraftPullRequestReviewComment[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Specifies a review comment to be left with a Pull Request Review. */
export interface GitHubDraftPullRequestReviewComment {
  /** Path to the file being commented on. */
  path: string;
  /** Position in the file to leave a comment on. */
  position: number;
  /** Body of the comment to leave. */
  body: string;
}
/** Autogenerated input type of AddReaction */
export interface GitHubAddReactionInput {
  /** The Node ID of the subject to modify. */
  subjectId: string;
  /** The name of the emoji to react with. */
  content: GitHubReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddStar */
export interface GitHubAddStarInput {
  /** The Starrable ID to star. */
  starrableId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ChangeUserStatus */
export interface GitHubChangeUserStatusInput {
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<string>;
  /** A short description of your current status. */
  message?: Maybe<string>;
  /** The ID of the organization whose members will be allowed to see the status. If omitted, the status will be publicly visible. */
  organizationId?: Maybe<string>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: Maybe<boolean>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ClearLabelsFromLabelable */
export interface GitHubClearLabelsFromLabelableInput {
  /** The id of the labelable object to clear the labels from. */
  labelableId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CloneProject */
export interface GitHubCloneProjectInput {
  /** The owner ID to create the project under. */
  targetOwnerId: string;
  /** The source project to clone. */
  sourceId: string;
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: boolean;
  /** The name of the project. */
  name: string;
  /** The description of the project. */
  body?: Maybe<string>;
  /** The visibility of the project, defaults to false (private). */
  public?: Maybe<boolean>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CloseIssue */
export interface GitHubCloseIssueInput {
  /** ID of the issue to be closed. */
  issueId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ClosePullRequest */
export interface GitHubClosePullRequestInput {
  /** ID of the pull request to be closed. */
  pullRequestId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export interface GitHubConvertProjectCardNoteToIssueInput {
  /** The ProjectCard ID to convert. */
  projectCardId: string;
  /** The ID of the repository to create the issue in. */
  repositoryId: string;
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<string>;
  /** The body of the newly created issue. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CreateBranchProtectionRule */
export interface GitHubCreateBranchProtectionRuleInput {
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: string;
  /** The glob-like pattern used to determine matching branches. */
  pattern: string;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CreateContentAttachment */
export interface GitHubCreateContentAttachmentInput {
  /** The node ID of the content_reference. */
  contentReferenceId: string;
  /** The title of the content attachment. */
  title: string;
  /** The body of the content attachment, which may contain markdown. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CreateIssue */
export interface GitHubCreateIssueInput {
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The title for the issue. */
  title: string;
  /** The body for the issue description. */
  body?: Maybe<string>;
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<string[]>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<string>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<string[]>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<string[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CreateProject */
export interface GitHubCreateProjectInput {
  /** The owner ID to create the project under. */
  ownerId: string;
  /** The name of project. */
  name: string;
  /** The description of project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of CreatePullRequest */
export interface GitHubCreatePullRequestInput {
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. */
  baseRefName: string;
  /** The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head_ref_name` with a user like this: `username:branch`. */
  headRefName: string;
  /** The title of the pull request. */
  title: string;
  /** The contents of the pull request. */
  body?: Maybe<string>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeclineTopicSuggestion */
export interface GitHubDeclineTopicSuggestionInput {
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The name of the suggested topic. */
  name: string;
  /** The reason why the suggested topic is declined. */
  reason: GitHubTopicSuggestionDeclineReason;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteBranchProtectionRule */
export interface GitHubDeleteBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteIssueComment */
export interface GitHubDeleteIssueCommentInput {
  /** The ID of the comment to delete. */
  id: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteIssue */
export interface GitHubDeleteIssueInput {
  /** The ID of the issue to delete. */
  issueId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProjectCard */
export interface GitHubDeleteProjectCardInput {
  /** The id of the card to delete. */
  cardId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProjectColumn */
export interface GitHubDeleteProjectColumnInput {
  /** The id of the column to delete. */
  columnId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProject */
export interface GitHubDeleteProjectInput {
  /** The Project ID to update. */
  projectId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeletePullRequestReviewComment */
export interface GitHubDeletePullRequestReviewCommentInput {
  /** The ID of the comment to delete. */
  id: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeletePullRequestReview */
export interface GitHubDeletePullRequestReviewInput {
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DismissPullRequestReview */
export interface GitHubDismissPullRequestReviewInput {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
  /** The contents of the pull request review dismissal message. */
  message: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ImportProject */
export interface GitHubImportProjectInput {
  /** The name of the Organization or User to create the Project under. */
  ownerName: string;
  /** The name of Project. */
  name: string;
  /** The description of Project. */
  body?: Maybe<string>;
  /** Whether the Project is public or not. */
  public?: Maybe<boolean>;
  /** A list of columns containing issues and pull requests. */
  columnImports: GitHubProjectColumnImport[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** A project column and a list of its issues and PRs. */
export interface GitHubProjectColumnImport {
  /** The name of the column. */
  columnName: string;
  /** The position of the column, starting from 0. */
  position: number;
  /** A list of issues and pull requests in the column. */
  issues?: Maybe<GitHubProjectCardImport[]>;
}
/** An issue or PR and its owning repository to be used in a project card. */
export interface GitHubProjectCardImport {
  /** Repository name with owner (owner/repository). */
  repository: string;
  /** The issue or pull request number. */
  number: number;
}
/** Autogenerated input type of LockLockable */
export interface GitHubLockLockableInput {
  /** ID of the issue or pull request to be locked. */
  lockableId: string;
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<GitHubLockReason>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of MergePullRequest */
export interface GitHubMergePullRequestInput {
  /** ID of the pull request to be merged. */
  pullRequestId: string;
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<string>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<string>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<GitHubGitObjectId>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of MinimizeComment */
export interface GitHubMinimizeCommentInput {
  /** The Node ID of the subject to modify. */
  subjectId: string;
  /** The classification of comment */
  classifier: GitHubReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of MoveProjectCard */
export interface GitHubMoveProjectCardInput {
  /** The id of the card to move. */
  cardId: string;
  /** The id of the column to move it into. */
  columnId: string;
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of MoveProjectColumn */
export interface GitHubMoveProjectColumnInput {
  /** The id of the column to move. */
  columnId: string;
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of PinIssue */
export interface GitHubPinIssueInput {
  /** The ID of the issue to be pinned */
  issueId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveAssigneesFromAssignable */
export interface GitHubRemoveAssigneesFromAssignableInput {
  /** The id of the assignable object to remove assignees from. */
  assignableId: string;
  /** The id of users to remove as assignees. */
  assigneeIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveLabelsFromLabelable */
export interface GitHubRemoveLabelsFromLabelableInput {
  /** The id of the Labelable to remove labels from. */
  labelableId: string;
  /** The ids of labels to remove. */
  labelIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveOutsideCollaborator */
export interface GitHubRemoveOutsideCollaboratorInput {
  /** The ID of the outside collaborator to remove. */
  userId: string;
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveReaction */
export interface GitHubRemoveReactionInput {
  /** The Node ID of the subject to modify. */
  subjectId: string;
  /** The name of the emoji reaction to remove. */
  content: GitHubReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveStar */
export interface GitHubRemoveStarInput {
  /** The Starrable ID to unstar. */
  starrableId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ReopenIssue */
export interface GitHubReopenIssueInput {
  /** ID of the issue to be opened. */
  issueId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ReopenPullRequest */
export interface GitHubReopenPullRequestInput {
  /** ID of the pull request to be reopened. */
  pullRequestId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RequestReviews */
export interface GitHubRequestReviewsInput {
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
  /** The Node IDs of the user to request. */
  userIds?: Maybe<string[]>;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<string[]>;
  /** Add users to the set rather than replace. */
  union?: Maybe<boolean>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of ResolveReviewThread */
export interface GitHubResolveReviewThreadInput {
  /** The ID of the thread to resolve */
  threadId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Ordering options for security vulnerability connections */
export interface GitHubSecurityVulnerabilityOrder {
  /** The field to order security vulnerabilities by. */
  field: GitHubSecurityVulnerabilityOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** An advisory identifier to filter results on. */
export interface GitHubSecurityAdvisoryIdentifierFilter {
  /** The identifier type. */
  type: GitHubSecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: string;
}
/** Ordering options for security advisory connections */
export interface GitHubSecurityAdvisoryOrder {
  /** The field to order security advisories by. */
  field: GitHubSecurityAdvisoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
}
/** Autogenerated input type of SubmitPullRequestReview */
export interface GitHubSubmitPullRequestReviewInput {
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId: string;
  /** The event to send to the Pull Request Review. */
  event: GitHubPullRequestReviewEvent;
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UnlockLockable */
export interface GitHubUnlockLockableInput {
  /** ID of the issue or pull request to be unlocked. */
  lockableId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UnmarkIssueAsDuplicate */
export interface GitHubUnmarkIssueAsDuplicateInput {
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: string;
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UnminimizeComment */
export interface GitHubUnminimizeCommentInput {
  /** The Node ID of the subject to modify. */
  subjectId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UnpinIssue */
export interface GitHubUnpinIssueInput {
  /** The ID of the issue to be unpinned */
  issueId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UnresolveReviewThread */
export interface GitHubUnresolveReviewThreadInput {
  /** The ID of the thread to unresolve */
  threadId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateBranchProtectionRule */
export interface GitHubUpdateBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: string;
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<string>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateIssueComment */
export interface GitHubUpdateIssueCommentInput {
  /** The ID of the IssueComment to modify. */
  id: string;
  /** The updated text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateIssue */
export interface GitHubUpdateIssueInput {
  /** The ID of the Issue to modify. */
  id: string;
  /** The title for the issue. */
  title?: Maybe<string>;
  /** The body for the issue description. */
  body?: Maybe<string>;
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<string[]>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<string>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<string[]>;
  /** The desired issue state. */
  state?: Maybe<GitHubIssueState>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<string[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateProjectCard */
export interface GitHubUpdateProjectCardInput {
  /** The ProjectCard ID to update. */
  projectCardId: string;
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<boolean>;
  /** The note of ProjectCard. */
  note?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateProjectColumn */
export interface GitHubUpdateProjectColumnInput {
  /** The ProjectColumn ID to update. */
  projectColumnId: string;
  /** The name of project column. */
  name: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateProject */
export interface GitHubUpdateProjectInput {
  /** The Project ID to update. */
  projectId: string;
  /** The name of project. */
  name?: Maybe<string>;
  /** The description of project. */
  body?: Maybe<string>;
  /** Whether the project is open or closed. */
  state?: Maybe<GitHubProjectState>;
  /** Whether the project is public or not. */
  public?: Maybe<boolean>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdatePullRequest */
export interface GitHubUpdatePullRequestInput {
  /** The Node ID of the pull request. */
  pullRequestId: string;
  /** The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. */
  baseRefName?: Maybe<string>;
  /** The title of the pull request. */
  title?: Maybe<string>;
  /** The contents of the pull request. */
  body?: Maybe<string>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<boolean>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdatePullRequestReviewComment */
export interface GitHubUpdatePullRequestReviewCommentInput {
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: string;
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdatePullRequestReview */
export interface GitHubUpdatePullRequestReviewInput {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
  /** The contents of the pull request review body. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateSubscription */
export interface GitHubUpdateSubscriptionInput {
  /** The Node ID of the subscribable object to modify. */
  subscribableId: string;
  /** The new state of the subscription. */
  state: GitHubSubscriptionState;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of UpdateTopics */
export interface GitHubUpdateTopicsInput {
  /** The Node ID of the repository. */
  repositoryId: string;
  /** An array of topic names. */
  topicNames: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}

export enum BoardOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  QueryAsc = "query_ASC",
  QueryDesc = "query_DESC"
}

export enum ColumnOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IndexAsc = "index_ASC",
  IndexDesc = "index_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  QueryAsc = "query_ASC",
  QueryDesc = "query_DESC"
}
/** Represents the individual results of a search. */
export enum GitHubSearchType {
  Issue = "ISSUE",
  Repository = "REPOSITORY",
  User = "USER"
}
/** The possible archived states of a project card. */
export enum GitHubProjectCardArchivedState {
  Archived = "ARCHIVED",
  NotArchived = "NOT_ARCHIVED"
}
/** A comment author association with repository. */
export enum GitHubCommentAuthorAssociation {
  Member = "MEMBER",
  Owner = "OWNER",
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  FirstTimer = "FIRST_TIMER",
  None = "NONE"
}
/** The possible errors that will prevent a user from updating a comment. */
export enum GitHubCommentCannotUpdateReason {
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  Locked = "LOCKED",
  LoginRequired = "LOGIN_REQUIRED",
  Maintenance = "MAINTENANCE",
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED",
  Denied = "DENIED"
}
/** Properties by which issue connections can be ordered. */
export enum GitHubIssueOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Comments = "COMMENTS"
}
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum GitHubOrderDirection {
  Asc = "ASC",
  Desc = "DESC"
}
/** The possible states of an issue. */
export enum GitHubIssueState {
  Open = "OPEN",
  Closed = "CLOSED"
}
/** The possible states of a pull request. */
export enum GitHubPullRequestState {
  Open = "OPEN",
  Closed = "CLOSED",
  Merged = "MERGED"
}
/** The possible states of a subscription. */
export enum GitHubSubscriptionState {
  Unsubscribed = "UNSUBSCRIBED",
  Subscribed = "SUBSCRIBED",
  Ignored = "IGNORED"
}
/** Properties by which star connections can be ordered. */
export enum GitHubStarOrderField {
  StarredAt = "STARRED_AT"
}
/** The possible reasons a given repository could be in a locked state. */
export enum GitHubRepositoryLockReason {
  Moving = "MOVING",
  Billing = "BILLING",
  Rename = "RENAME",
  Migrating = "MIGRATING"
}
/** The privacy of a repository */
export enum GitHubRepositoryPrivacy {
  Public = "PUBLIC",
  Private = "PRIVATE"
}
/** Properties by which repository connections can be ordered. */
export enum GitHubRepositoryOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT",
  Name = "NAME",
  Stargazers = "STARGAZERS"
}
/** The affiliation of a user to a repository */
export enum GitHubRepositoryAffiliation {
  Owner = "OWNER",
  Collaborator = "COLLABORATOR",
  OrganizationMember = "ORGANIZATION_MEMBER"
}
/** Properties by which user status connections can be ordered. */
export enum GitHubUserStatusOrderField {
  UpdatedAt = "UPDATED_AT"
}
/** Represents items that can be pinned to a profile page. */
export enum GitHubPinnableItemType {
  Repository = "REPOSITORY",
  Gist = "GIST"
}
/** The possible roles within an organization for its members. */
export enum GitHubOrganizationMemberRole {
  Member = "MEMBER",
  Admin = "ADMIN"
}
/** Properties by which project connections can be ordered. */
export enum GitHubProjectOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Name = "NAME"
}
/** State of the project; either 'open' or 'closed' */
export enum GitHubProjectState {
  Open = "OPEN",
  Closed = "CLOSED"
}
/** The possible organization invitation types. */
export enum GitHubOrganizationInvitationType {
  User = "USER",
  Email = "EMAIL"
}
/** The possible organization invitation roles. */
export enum GitHubOrganizationInvitationRole {
  DirectMember = "DIRECT_MEMBER",
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER",
  Reinstate = "REINSTATE"
}
/** The possible team privacy values. */
export enum GitHubTeamPrivacy {
  Secret = "SECRET",
  Visible = "VISIBLE"
}
/** The role of a user on a team. */
export enum GitHubTeamRole {
  Admin = "ADMIN",
  Member = "MEMBER"
}
/** Properties by which team connections can be ordered. */
export enum GitHubTeamOrderField {
  Name = "NAME"
}
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum GitHubTeamMembershipType {
  Immediate = "IMMEDIATE",
  ChildTeam = "CHILD_TEAM",
  All = "ALL"
}
/** The possible team member roles; either 'maintainer' or 'member'. */
export enum GitHubTeamMemberRole {
  Maintainer = "MAINTAINER",
  Member = "MEMBER"
}
/** Properties by which team member connections can be ordered. */
export enum GitHubTeamMemberOrderField {
  Login = "LOGIN",
  CreatedAt = "CREATED_AT"
}
/** Properties by which team repository connections can be ordered. */
export enum GitHubTeamRepositoryOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT",
  Name = "NAME",
  Permission = "PERMISSION",
  Stargazers = "STARGAZERS"
}
/** The access level to a repository */
export enum GitHubRepositoryPermission {
  Admin = "ADMIN",
  Write = "WRITE",
  Read = "READ"
}
/** Collaborators affiliation level with a subject. */
export enum GitHubCollaboratorAffiliation {
  Outside = "OUTSIDE",
  Direct = "DIRECT",
  All = "ALL"
}
/** The possible default permissions for repositories. */
export enum GitHubDefaultRepositoryPermissionField {
  None = "NONE",
  Read = "READ",
  Write = "WRITE",
  Admin = "ADMIN"
}
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum GitHubReactionContent {
  ThumbsUp = "THUMBS_UP",
  ThumbsDown = "THUMBS_DOWN",
  Laugh = "LAUGH",
  Hooray = "HOORAY",
  Confused = "CONFUSED",
  Heart = "HEART",
  Rocket = "ROCKET",
  Eyes = "EYES"
}
/** A list of fields that reactions can be ordered by. */
export enum GitHubReactionOrderField {
  CreatedAt = "CREATED_AT"
}
/** Properties by which pull_requests connections can be ordered. */
export enum GitHubPullRequestOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** Properties by which deployment connections can be ordered. */
export enum GitHubDeploymentOrderField {
  CreatedAt = "CREATED_AT"
}
/** The possible states for a deployment status. */
export enum GitHubDeploymentStatusState {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Error = "ERROR",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS"
}
/** The possible states in which a deployment can be. */
export enum GitHubDeploymentState {
  Abandoned = "ABANDONED",
  Active = "ACTIVE",
  Destroyed = "DESTROYED",
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS"
}
/** The state of a Git signature. */
export enum GitHubGitSignatureState {
  Valid = "VALID",
  Invalid = "INVALID",
  MalformedSig = "MALFORMED_SIG",
  UnknownKey = "UNKNOWN_KEY",
  BadEmail = "BAD_EMAIL",
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  NoUser = "NO_USER",
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  Unsigned = "UNSIGNED",
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  GpgverifyError = "GPGVERIFY_ERROR",
  NotSigningKey = "NOT_SIGNING_KEY",
  ExpiredKey = "EXPIRED_KEY",
  OcspPending = "OCSP_PENDING",
  OcspError = "OCSP_ERROR",
  BadCert = "BAD_CERT",
  OcspRevoked = "OCSP_REVOKED"
}
/** The possible commit status states. */
export enum GitHubStatusState {
  Expected = "EXPECTED",
  Error = "ERROR",
  Failure = "FAILURE",
  Pending = "PENDING",
  Success = "SUCCESS"
}
/** Properties by which language connections can be ordered. */
export enum GitHubLanguageOrderField {
  Size = "SIZE"
}
/** The possible states of a milestone. */
export enum GitHubMilestoneState {
  Open = "OPEN",
  Closed = "CLOSED"
}
/** Properties by which milestone connections can be ordered. */
export enum GitHubMilestoneOrderField {
  DueDate = "DUE_DATE",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Number = "NUMBER"
}
/** Properties by which ref connections can be ordered. */
export enum GitHubRefOrderField {
  TagCommitDate = "TAG_COMMIT_DATE",
  Alphabetical = "ALPHABETICAL"
}
/** Properties by which release connections can be ordered. */
export enum GitHubReleaseOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME"
}
/** The possible reasons that an issue or pull request was locked. */
export enum GitHubLockReason {
  OffTopic = "OFF_TOPIC",
  TooHeated = "TOO_HEATED",
  Resolved = "RESOLVED",
  Spam = "SPAM"
}
/** Whether or not a PullRequest can be merged. */
export enum GitHubMergeableState {
  Mergeable = "MERGEABLE",
  Conflicting = "CONFLICTING",
  Unknown = "UNKNOWN"
}
/** The possible states of a pull request review. */
export enum GitHubPullRequestReviewState {
  Pending = "PENDING",
  Commented = "COMMENTED",
  Approved = "APPROVED",
  ChangesRequested = "CHANGES_REQUESTED",
  Dismissed = "DISMISSED"
}
/** The possible states of a pull request review comment. */
export enum GitHubPullRequestReviewCommentState {
  Pending = "PENDING",
  Submitted = "SUBMITTED"
}
/** The possible durations that a user can be blocked for. */
export enum GitHubUserBlockDuration {
  OneDay = "ONE_DAY",
  ThreeDays = "THREE_DAYS",
  OneWeek = "ONE_WEEK",
  OneMonth = "ONE_MONTH",
  Permanent = "PERMANENT"
}
/** The possible item types found in a timeline. */
export enum GitHubPullRequestTimelineItemsItemType {
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  DeployedEvent = "DEPLOYED_EVENT",
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  MergedEvent = "MERGED_EVENT",
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  IssueComment = "ISSUE_COMMENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** Various content states of a ProjectCard */
export enum GitHubProjectCardState {
  ContentOnly = "CONTENT_ONLY",
  NoteOnly = "NOTE_ONLY",
  Redacted = "REDACTED"
}
/** The semantic purpose of the column - todo, in progress, or done. */
export enum GitHubProjectColumnPurpose {
  Todo = "TODO",
  InProgress = "IN_PROGRESS",
  Done = "DONE"
}
/** Properties by which commit contribution connections can be ordered. */
export enum GitHubCommitContributionOrderField {
  OccurredAt = "OCCURRED_AT",
  CommitCount = "COMMIT_COUNT"
}
/** Properties by which contribution connections can be ordered. */
export enum GitHubContributionOrderField {
  OccurredAt = "OCCURRED_AT"
}
/** The privacy of a Gist */
export enum GitHubGistPrivacy {
  Public = "PUBLIC",
  Secret = "SECRET",
  All = "ALL"
}
/** Properties by which gist connections can be ordered. */
export enum GitHubGistOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT"
}
/** The reason a repository is listed as 'contributed'. */
export enum GitHubRepositoryContributionType {
  Commit = "COMMIT",
  Issue = "ISSUE",
  PullRequest = "PULL_REQUEST",
  Repository = "REPOSITORY",
  PullRequestReview = "PULL_REQUEST_REVIEW"
}
/** The possible item types found in a timeline. */
export enum GitHubIssueTimelineItemsItemType {
  IssueComment = "ISSUE_COMMENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** The possible events to perform on a pull request review. */
export enum GitHubPullRequestReviewEvent {
  Comment = "COMMENT",
  Approve = "APPROVE",
  RequestChanges = "REQUEST_CHANGES",
  Dismiss = "DISMISS"
}
/** Reason that the suggested topic is declined. */
export enum GitHubTopicSuggestionDeclineReason {
  NotRelevant = "NOT_RELEVANT",
  TooSpecific = "TOO_SPECIFIC",
  PersonalPreference = "PERSONAL_PREFERENCE",
  TooGeneral = "TOO_GENERAL"
}
/** The possible states in which authentication can be configured with an identity provider. */
export enum GitHubIdentityProviderConfigurationState {
  Enforced = "ENFORCED",
  Configured = "CONFIGURED",
  Unconfigured = "UNCONFIGURED"
}
/** The possible PubSub channels for an issue. */
export enum GitHubIssuePubSubTopic {
  Updated = "UPDATED",
  Markasread = "MARKASREAD",
  Timeline = "TIMELINE",
  State = "STATE"
}
/** The reasons a piece of content can be reported or minimized. */
export enum GitHubReportedContentClassifiers {
  Spam = "SPAM",
  Abuse = "ABUSE",
  OffTopic = "OFF_TOPIC",
  Outdated = "OUTDATED",
  Resolved = "RESOLVED"
}
/** The possible PubSub channels for a pull request. */
export enum GitHubPullRequestPubSubTopic {
  Updated = "UPDATED",
  Markasread = "MARKASREAD",
  HeadRef = "HEAD_REF",
  Timeline = "TIMELINE",
  State = "STATE"
}
/** The affiliation type between collaborator and repository. */
export enum GitHubRepositoryCollaboratorAffiliation {
  All = "ALL",
  Outside = "OUTSIDE"
}
/** Severity of the vulnerability. */
export enum GitHubSecurityAdvisorySeverity {
  Low = "LOW",
  Moderate = "MODERATE",
  High = "HIGH",
  Critical = "CRITICAL"
}
/** Properties by which security vulnerability connections can be ordered. */
export enum GitHubSecurityVulnerabilityOrderField {
  UpdatedAt = "UPDATED_AT"
}
/** The possible ecosystems of a security vulnerability's package. */
export enum GitHubSecurityAdvisoryEcosystem {
  Rubygems = "RUBYGEMS",
  Npm = "NPM",
  Pip = "PIP",
  Maven = "MAVEN",
  Nuget = "NUGET"
}
/** Identifier formats available for advisories. */
export enum GitHubSecurityAdvisoryIdentifierType {
  Cve = "CVE",
  Ghsa = "GHSA"
}
/** Properties by which security advisory connections can be ordered. */
export enum GitHubSecurityAdvisoryOrderField {
  PublishedAt = "PUBLISHED_AT",
  UpdatedAt = "UPDATED_AT"
}

export type DateTime = any;

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
export type GitHubUri = any;

/** An ISO-8601 encoded UTC date string. */
export type GitHubDateTime = any;

/** A string containing HTML code. */
export type GitHubHtml = any;

/** A Git object ID. */
export type GitHubGitObjectId = any;

/** A valid x509 certificate string */
export type GitHubX509Certificate = any;

/** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
export type GitHubGitTimestamp = any;

/** Git SSH string */
export type GitHubGitSshRemote = any;

/** An ISO-8601 encoded date string. */
export type GitHubDate = any;

// ====================================================
// Documents
// ====================================================

export type DeleteBoardVariables = {
  id: string;
};

export type DeleteBoardMutation = {
  __typename?: "Mutation";

  deleteBoard: Maybe<DeleteBoardDeleteBoard>;
};

export type DeleteBoardDeleteBoard = {
  __typename?: "Board";

  id: string;
};

export type GetBoardVariables = {
  id: string;
};

export type GetBoardQuery = {
  __typename?: "Query";

  board: Maybe<GetBoardBoard>;
};

export type GetBoardBoard = {
  __typename?: "Board";

  id: string;

  name: string;

  query: string;

  columns: Maybe<GetBoardColumns[]>;
};

export type GetBoardColumns = {
  __typename?: "Column";

  id: string;

  index: number;

  name: string;

  query: string;
};

export type GetBoardsVariables = {};

export type GetBoardsQuery = {
  __typename?: "Query";

  signedInUser: GetBoardsSignedInUser;
};

export type GetBoardsSignedInUser = {
  __typename?: "User";

  boards: Maybe<GetBoardsBoards[]>;
};

export type GetBoardsBoards = {
  __typename?: "Board";

  id: string;

  name: string;

  query: string;
};

export type GetIsSignedInVariables = {};

export type GetIsSignedInQuery = {
  __typename?: "Query";

  isSignedIn: boolean;
};

export type GetViewerVariables = {};

export type GetViewerQuery = {
  __typename?: "Query";

  viewer: GetViewerViewer;
};

export type GetViewerViewer = {
  __typename?: "GitHubUser";

  login: string;

  name: Maybe<string>;

  avatarUrl: GitHubUri;
};

export type SignInVariables = {
  gitHubCode: string;
};

export type SignInMutation = {
  __typename?: "Mutation";

  signIn: SignInSignIn;
};

export type SignInSignIn = {
  __typename?: "SignInPayload";

  token: string;
};

export type SignOutVariables = {};

export type SignOutMutation = {
  __typename?: "Mutation";

  signOut: boolean;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const DeleteBoardDocument = gql`
  mutation deleteBoard($id: ID!) {
    deleteBoard(where: { id: $id }) {
      id
    }
  }
`;
export class DeleteBoardComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteBoardMutation, DeleteBoardVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteBoardMutation, DeleteBoardVariables>
        mutation={DeleteBoardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteBoardProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteBoardMutation, DeleteBoardVariables>
> &
  TChildProps;
export type DeleteBoardMutationFn = ReactApollo.MutationFn<
  DeleteBoardMutation,
  DeleteBoardVariables
>;
export function DeleteBoardHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteBoardMutation,
        DeleteBoardVariables,
        DeleteBoardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeleteBoardMutation,
    DeleteBoardVariables,
    DeleteBoardProps<TChildProps>
  >(DeleteBoardDocument, operationOptions);
}
export const GetBoardDocument = gql`
  query getBoard($id: ID!) {
    board(where: { id: $id }) {
      id
      name
      query
      columns(orderBy: index_ASC) {
        id
        index
        name
        query
      }
    }
  }
`;
export class GetBoardComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetBoardQuery, GetBoardVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetBoardQuery, GetBoardVariables>
        query={GetBoardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetBoardProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetBoardQuery, GetBoardVariables>
> &
  TChildProps;
export function GetBoardHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetBoardQuery,
        GetBoardVariables,
        GetBoardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetBoardQuery,
    GetBoardVariables,
    GetBoardProps<TChildProps>
  >(GetBoardDocument, operationOptions);
}
export const GetBoardsDocument = gql`
  query getBoards {
    signedInUser {
      boards {
        id
        name
        query
      }
    }
  }
`;
export class GetBoardsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetBoardsQuery, GetBoardsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetBoardsQuery, GetBoardsVariables>
        query={GetBoardsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetBoardsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetBoardsQuery, GetBoardsVariables>
> &
  TChildProps;
export function GetBoardsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetBoardsQuery,
        GetBoardsVariables,
        GetBoardsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetBoardsQuery,
    GetBoardsVariables,
    GetBoardsProps<TChildProps>
  >(GetBoardsDocument, operationOptions);
}
export const GetIsSignedInDocument = gql`
  query getIsSignedIn {
    isSignedIn
  }
`;
export class GetIsSignedInComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetIsSignedInQuery, GetIsSignedInVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetIsSignedInQuery, GetIsSignedInVariables>
        query={GetIsSignedInDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetIsSignedInProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetIsSignedInQuery, GetIsSignedInVariables>
> &
  TChildProps;
export function GetIsSignedInHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetIsSignedInQuery,
        GetIsSignedInVariables,
        GetIsSignedInProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetIsSignedInQuery,
    GetIsSignedInVariables,
    GetIsSignedInProps<TChildProps>
  >(GetIsSignedInDocument, operationOptions);
}
export const GetViewerDocument = gql`
  query getViewer {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;
export class GetViewerComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetViewerQuery, GetViewerVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetViewerQuery, GetViewerVariables>
        query={GetViewerDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetViewerProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetViewerQuery, GetViewerVariables>
> &
  TChildProps;
export function GetViewerHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetViewerQuery,
        GetViewerVariables,
        GetViewerProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetViewerQuery,
    GetViewerVariables,
    GetViewerProps<TChildProps>
  >(GetViewerDocument, operationOptions);
}
export const SignInDocument = gql`
  mutation signIn($gitHubCode: String!) {
    signIn(gitHubCode: $gitHubCode) {
      token
    }
  }
`;
export class SignInComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SignInMutation, SignInVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SignInMutation, SignInVariables>
        mutation={SignInDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SignInProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<SignInMutation, SignInVariables>
> &
  TChildProps;
export type SignInMutationFn = ReactApollo.MutationFn<
  SignInMutation,
  SignInVariables
>;
export function SignInHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SignInMutation,
        SignInVariables,
        SignInProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    SignInMutation,
    SignInVariables,
    SignInProps<TChildProps>
  >(SignInDocument, operationOptions);
}
export const SignOutDocument = gql`
  mutation signOut {
    signOut
  }
`;
export class SignOutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SignOutMutation, SignOutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SignOutMutation, SignOutVariables>
        mutation={SignOutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SignOutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<SignOutMutation, SignOutVariables>
> &
  TChildProps;
export type SignOutMutationFn = ReactApollo.MutationFn<
  SignOutMutation,
  SignOutVariables
>;
export function SignOutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SignOutMutation,
        SignOutVariables,
        SignOutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    SignOutMutation,
    SignOutVariables,
    SignOutProps<TChildProps>
  >(SignOutDocument, operationOptions);
}
