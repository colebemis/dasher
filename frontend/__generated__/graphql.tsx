export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  GitHubURI: any;
  /** An ISO-8601 encoded UTC date string. */
  GitHubDateTime: any;
  /** A string containing HTML code. */
  GitHubHTML: any;
  /** A Git object ID. */
  GitHubGitObjectID: any;
  /** A valid x509 certificate string */
  GitHubX509Certificate: any;
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitHubGitTimestamp: any;
  /** Git SSH string */
  GitHubGitSSHRemote: any;
  /** An ISO-8601 encoded date string. */
  GitHubDate: any;
};

export type Board = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  owner: User;
  name: Scalars["String"];
  query: Scalars["String"];
  columns?: Maybe<Array<Column>>;
};

export type BoardColumnsArgs = {
  where?: Maybe<ColumnWhereInput>;
  orderBy?: Maybe<ColumnOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type BoardCreateInput = {
  name: Scalars["String"];
  query: Scalars["String"];
  columns?: Maybe<ColumnCreateManyWithoutBoardInput>;
};

export type BoardCreateOneWithoutColumnsInput = {
  create?: Maybe<BoardCreateWithoutColumnsInput>;
  connect?: Maybe<BoardWhereUniqueInput>;
};

export type BoardCreateWithoutColumnsInput = {
  owner: UserCreateOneWithoutBoardsInput;
  name: Scalars["String"];
  query: Scalars["String"];
};

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

export type BoardUpdateInput = {
  owner?: Maybe<UserUpdateOneRequiredWithoutBoardsInput>;
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  columns?: Maybe<ColumnUpdateManyWithoutBoardInput>;
};

export type BoardUpdateOneRequiredWithoutColumnsInput = {
  create?: Maybe<BoardCreateWithoutColumnsInput>;
  update?: Maybe<BoardUpdateWithoutColumnsDataInput>;
  upsert?: Maybe<BoardUpsertWithoutColumnsInput>;
  connect?: Maybe<BoardWhereUniqueInput>;
};

export type BoardUpdateWithoutColumnsDataInput = {
  owner?: Maybe<UserUpdateOneRequiredWithoutBoardsInput>;
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type BoardUpsertWithoutColumnsInput = {
  update: BoardUpdateWithoutColumnsDataInput;
  create: BoardCreateWithoutColumnsInput;
};

export type BoardWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  owner?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  query_not?: Maybe<Scalars["String"]>;
  query_in?: Maybe<Array<Scalars["String"]>>;
  query_not_in?: Maybe<Array<Scalars["String"]>>;
  query_lt?: Maybe<Scalars["String"]>;
  query_lte?: Maybe<Scalars["String"]>;
  query_gt?: Maybe<Scalars["String"]>;
  query_gte?: Maybe<Scalars["String"]>;
  query_contains?: Maybe<Scalars["String"]>;
  query_not_contains?: Maybe<Scalars["String"]>;
  query_starts_with?: Maybe<Scalars["String"]>;
  query_not_starts_with?: Maybe<Scalars["String"]>;
  query_ends_with?: Maybe<Scalars["String"]>;
  query_not_ends_with?: Maybe<Scalars["String"]>;
  columns_every?: Maybe<ColumnWhereInput>;
  columns_some?: Maybe<ColumnWhereInput>;
  columns_none?: Maybe<ColumnWhereInput>;
  AND?: Maybe<Array<BoardWhereInput>>;
  OR?: Maybe<Array<BoardWhereInput>>;
  NOT?: Maybe<Array<BoardWhereInput>>;
};

export type BoardWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Column = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  board: Board;
  name: Scalars["String"];
  query: Scalars["String"];
};

export type ColumnCreateInput = {
  board: BoardCreateOneWithoutColumnsInput;
  name: Scalars["String"];
  query: Scalars["String"];
};

export type ColumnCreateManyWithoutBoardInput = {
  create?: Maybe<Array<ColumnCreateWithoutBoardInput>>;
  connect?: Maybe<Array<ColumnWhereUniqueInput>>;
};

export type ColumnCreateWithoutBoardInput = {
  name: Scalars["String"];
  query: Scalars["String"];
};

export enum ColumnOrderByInput {
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

export type ColumnScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  query_not?: Maybe<Scalars["String"]>;
  query_in?: Maybe<Array<Scalars["String"]>>;
  query_not_in?: Maybe<Array<Scalars["String"]>>;
  query_lt?: Maybe<Scalars["String"]>;
  query_lte?: Maybe<Scalars["String"]>;
  query_gt?: Maybe<Scalars["String"]>;
  query_gte?: Maybe<Scalars["String"]>;
  query_contains?: Maybe<Scalars["String"]>;
  query_not_contains?: Maybe<Scalars["String"]>;
  query_starts_with?: Maybe<Scalars["String"]>;
  query_not_starts_with?: Maybe<Scalars["String"]>;
  query_ends_with?: Maybe<Scalars["String"]>;
  query_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<ColumnScalarWhereInput>>;
  OR?: Maybe<Array<ColumnScalarWhereInput>>;
  NOT?: Maybe<Array<ColumnScalarWhereInput>>;
};

export type ColumnUpdateInput = {
  board?: Maybe<BoardUpdateOneRequiredWithoutColumnsInput>;
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type ColumnUpdateManyDataInput = {
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type ColumnUpdateManyWithoutBoardInput = {
  create?: Maybe<Array<ColumnCreateWithoutBoardInput>>;
  delete?: Maybe<Array<ColumnWhereUniqueInput>>;
  connect?: Maybe<Array<ColumnWhereUniqueInput>>;
  set?: Maybe<Array<ColumnWhereUniqueInput>>;
  disconnect?: Maybe<Array<ColumnWhereUniqueInput>>;
  update?: Maybe<Array<ColumnUpdateWithWhereUniqueWithoutBoardInput>>;
  upsert?: Maybe<Array<ColumnUpsertWithWhereUniqueWithoutBoardInput>>;
  deleteMany?: Maybe<Array<ColumnScalarWhereInput>>;
  updateMany?: Maybe<Array<ColumnUpdateManyWithWhereNestedInput>>;
};

export type ColumnUpdateManyWithWhereNestedInput = {
  where: ColumnScalarWhereInput;
  data: ColumnUpdateManyDataInput;
};

export type ColumnUpdateWithoutBoardDataInput = {
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
  where: ColumnWhereUniqueInput;
  data: ColumnUpdateWithoutBoardDataInput;
};

export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
  where: ColumnWhereUniqueInput;
  update: ColumnUpdateWithoutBoardDataInput;
  create: ColumnCreateWithoutBoardInput;
};

export type ColumnWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  board?: Maybe<BoardWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  query_not?: Maybe<Scalars["String"]>;
  query_in?: Maybe<Array<Scalars["String"]>>;
  query_not_in?: Maybe<Array<Scalars["String"]>>;
  query_lt?: Maybe<Scalars["String"]>;
  query_lte?: Maybe<Scalars["String"]>;
  query_gt?: Maybe<Scalars["String"]>;
  query_gte?: Maybe<Scalars["String"]>;
  query_contains?: Maybe<Scalars["String"]>;
  query_not_contains?: Maybe<Scalars["String"]>;
  query_starts_with?: Maybe<Scalars["String"]>;
  query_not_starts_with?: Maybe<Scalars["String"]>;
  query_ends_with?: Maybe<Scalars["String"]>;
  query_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<ColumnWhereInput>>;
  OR?: Maybe<Array<ColumnWhereInput>>;
  NOT?: Maybe<Array<ColumnWhereInput>>;
};

export type ColumnWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** Autogenerated input type of AcceptTopicSuggestion */
export type GitHubAcceptTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the suggested topic. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AcceptTopicSuggestion */
export type GitHubAcceptTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The accepted topic. */
  topic?: Maybe<GitHubTopic>;
};

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHubActor = {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl: Scalars["GitHubURI"];
  /** The username of the actor. */
  login: Scalars["String"];
  /** The HTTP path for this actor. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this actor. */
  url: Scalars["GitHubURI"];
};

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHubActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Autogenerated input type of AddAssigneesToAssignable */
export type GitHubAddAssigneesToAssignableInput = {
  /** The id of the assignable object to add assignees to. */
  assignableId: Scalars["ID"];
  /** The id of users to add as assignees. */
  assigneeIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddAssigneesToAssignable */
export type GitHubAddAssigneesToAssignablePayload = {
  /** The item that was assigned. */
  assignable?: Maybe<GitHubAssignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of AddComment */
export type GitHubAddCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The contents of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddComment */
export type GitHubAddCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The edge from the subject's comment connection. */
  commentEdge?: Maybe<GitHubIssueCommentEdge>;
  /** The subject */
  subject?: Maybe<GitHubNode>;
  /** The edge from the subject's timeline connection. */
  timelineEdge?: Maybe<GitHubIssueTimelineItemEdge>;
};

/** Represents a 'added_to_project' event on a given issue or pull request. */
export type GitHubAddedToProjectEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of AddLabelsToLabelable */
export type GitHubAddLabelsToLabelableInput = {
  /** The id of the labelable object to add labels to. */
  labelableId: Scalars["ID"];
  /** The ids of the labels to add. */
  labelIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddLabelsToLabelable */
export type GitHubAddLabelsToLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was labeled. */
  labelable?: Maybe<GitHubLabelable>;
};

/** Autogenerated input type of AddProjectCard */
export type GitHubAddProjectCardInput = {
  /** The Node ID of the ProjectColumn. */
  projectColumnId: Scalars["ID"];
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<Scalars["ID"]>;
  /** The note on the card. */
  note?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddProjectCard */
export type GitHubAddProjectCardPayload = {
  /** The edge from the ProjectColumn's card connection. */
  cardEdge?: Maybe<GitHubProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The ProjectColumn */
  projectColumn?: Maybe<GitHubProjectColumn>;
};

/** Autogenerated input type of AddProjectColumn */
export type GitHubAddProjectColumnInput = {
  /** The Node ID of the project. */
  projectId: Scalars["ID"];
  /** The name of the column. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddProjectColumn */
export type GitHubAddProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The edge from the project's column connection. */
  columnEdge?: Maybe<GitHubProjectColumnEdge>;
  /** The project */
  project?: Maybe<GitHubProject>;
};

/** Autogenerated input type of AddPullRequestReviewComment */
export type GitHubAddPullRequestReviewCommentInput = {
  /** The Node ID of the review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<Scalars["GitHubGitObjectID"]>;
  /** The text of the comment. */
  body: Scalars["String"];
  /** The relative path of the file to comment on. */
  path?: Maybe<Scalars["String"]>;
  /** The line index in the diff to comment on. */
  position?: Maybe<Scalars["Int"]>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddPullRequestReviewComment */
export type GitHubAddPullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The newly created comment. */
  comment?: Maybe<GitHubPullRequestReviewComment>;
  /** The edge from the review's comment connection. */
  commentEdge?: Maybe<GitHubPullRequestReviewCommentEdge>;
};

/** Autogenerated input type of AddPullRequestReview */
export type GitHubAddPullRequestReviewInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"];
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<Scalars["GitHubGitObjectID"]>;
  /** The contents of the review body comment. */
  body?: Maybe<Scalars["String"]>;
  /** The event to perform on the pull request review. */
  event?: Maybe<GitHubPullRequestReviewEvent>;
  /** The review line comments. */
  comments?: Maybe<Array<Maybe<GitHubDraftPullRequestReviewComment>>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddPullRequestReview */
export type GitHubAddPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The newly created pull request review. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
  /** The edge from the pull request's review connection. */
  reviewEdge?: Maybe<GitHubPullRequestReviewEdge>;
};

/** Autogenerated input type of AddReaction */
export type GitHubAddReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The name of the emoji to react with. */
  content: GitHubReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddReaction */
export type GitHubAddReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The reaction object. */
  reaction?: Maybe<GitHubReaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHubReactable>;
};

/** Autogenerated input type of AddStar */
export type GitHubAddStarInput = {
  /** The Starrable ID to star. */
  starrableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddStar */
export type GitHubAddStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The starrable. */
  starrable?: Maybe<GitHubStarrable>;
};

/** A GitHub App. */
export type GitHubApp = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The description of the app. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"];
  /** A URL pointing to the app's logo. */
  logoUrl: Scalars["GitHubURI"];
  /** The name of the app. */
  name: Scalars["String"];
  /** A slug based on the name of the app for use in URLs. */
  slug: Scalars["String"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The URL to the app's homepage. */
  url: Scalars["GitHubURI"];
};

/** A GitHub App. */
export type GitHubAppLogoUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type GitHubAppEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubApp>;
};

/** An object that can have users assigned to it. */
export type GitHubAssignable = {
  /** A list of Users assigned to this object. */
  assignees: GitHubUserConnection;
};

/** An object that can have users assigned to it. */
export type GitHubAssignableAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents an 'assigned' event on any assignable object. */
export type GitHubAssignedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHubAssignable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the user who was assigned. */
  user?: Maybe<GitHubUser>;
};

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export type GitHubBaseRefChangedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export type GitHubBaseRefForcePushedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHubCommit>;
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHubCommit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  ref?: Maybe<GitHubRef>;
};

/** Represents a Git blame. */
export type GitHubBlame = {
  /** The list of ranges from a Git blame. */
  ranges: Array<GitHubBlameRange>;
};

/** Represents a range of information from a Git blame. */
export type GitHubBlameRange = {
  /** Identifies the recency of the change, from 1 (new) to 10 (old). This is
   * calculated as a 2-quantile and determines the length of distance between the
   * median age of all the changes in the file and the recency of the current
   * range's change.
   */
  age: Scalars["Int"];
  /** Identifies the line author */
  commit: GitHubCommit;
  /** The ending line for the range */
  endingLine: Scalars["Int"];
  /** The starting line for the range */
  startingLine: Scalars["Int"];
};

/** Represents a Git blob. */
export type GitHubBlob = GitHubNode &
  GitHubGitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** Byte size of Blob object */
    byteSize: Scalars["Int"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHubURI"];
    id: Scalars["ID"];
    /** Indicates whether the Blob is binary or text */
    isBinary: Scalars["Boolean"];
    /** Indicates whether the contents is truncated */
    isTruncated: Scalars["Boolean"];
    /** The Git object ID */
    oid: Scalars["GitHubGitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHubRepository;
    /** UTF8 text data or null if the Blob is binary */
    text?: Maybe<Scalars["String"]>;
  };

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHubBot = GitHubNode &
  GitHubActor &
  GitHubUniformResourceLocatable & {
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: Scalars["GitHubURI"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    /** The username of the actor. */
    login: Scalars["String"];
    /** The HTTP path for this bot */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this bot */
    url: Scalars["GitHubURI"];
  };

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHubBotAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHubBranchProtectionRule = GitHubNode & {
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  branchProtectionRuleConflicts: GitHubBranchProtectionRuleConflictConnection;
  /** The actor who created this branch protection rule. */
  creator?: Maybe<GitHubActor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews: Scalars["Boolean"];
  id: Scalars["ID"];
  /** Can admins overwrite branch protection. */
  isAdminEnforced: Scalars["Boolean"];
  /** Repository refs that are protected by this rule */
  matchingRefs: GitHubRefConnection;
  /** Identifies the protection rule pattern. */
  pattern: Scalars["String"];
  /** A list push allowances for this branch protection rule. */
  pushAllowances: GitHubPushAllowanceConnection;
  /** The repository associated with this branch protection rule. */
  repository?: Maybe<GitHubRepository>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews: Scalars["Boolean"];
  /** Are commits required to be signed. */
  requiresCommitSignatures: Scalars["Boolean"];
  /** Are status checks required to update matching branches. */
  requiresStatusChecks: Scalars["Boolean"];
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks: Scalars["Boolean"];
  /** Is pushing to matching branches restricted. */
  restrictsPushes: Scalars["Boolean"];
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals: Scalars["Boolean"];
  /** A list review dismissal allowances for this branch protection rule. */
  reviewDismissalAllowances: GitHubReviewDismissalAllowanceConnection;
};

/** A branch protection rule. */
export type GitHubBranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHubBranchProtectionRuleMatchingRefsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHubBranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHubBranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A conflict between two branch protection rules. */
export type GitHubBranchProtectionRuleConflict = {
  /** Identifies the branch protection rule. */
  branchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  /** Identifies the conflicting branch protection rule. */
  conflictingBranchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  /** Identifies the branch ref that has conflicting rules */
  ref?: Maybe<GitHubRef>;
};

/** The connection type for BranchProtectionRuleConflict. */
export type GitHubBranchProtectionRuleConflictConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubBranchProtectionRuleConflictEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubBranchProtectionRuleConflict>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubBranchProtectionRuleConflictEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubBranchProtectionRuleConflict>;
};

/** The connection type for BranchProtectionRule. */
export type GitHubBranchProtectionRuleConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubBranchProtectionRuleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubBranchProtectionRule>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubBranchProtectionRuleEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubBranchProtectionRule>;
};

/** Autogenerated input type of ChangeUserStatus */
export type GitHubChangeUserStatusInput = {
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<Scalars["String"]>;
  /** A short description of your current status. */
  message?: Maybe<Scalars["String"]>;
  /** The ID of the organization whose members will be allowed to see the status. If
   * omitted, the status will be publicly visible.
   */
  organizationId?: Maybe<Scalars["ID"]>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ChangeUserStatus */
export type GitHubChangeUserStatusPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Your updated status. */
  status?: Maybe<GitHubUserStatus>;
};

/** Autogenerated input type of ClearLabelsFromLabelable */
export type GitHubClearLabelsFromLabelableInput = {
  /** The id of the labelable object to clear the labels from. */
  labelableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ClearLabelsFromLabelable */
export type GitHubClearLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was unlabeled. */
  labelable?: Maybe<GitHubLabelable>;
};

/** Autogenerated input type of CloneProject */
export type GitHubCloneProjectInput = {
  /** The owner ID to create the project under. */
  targetOwnerId: Scalars["ID"];
  /** The source project to clone. */
  sourceId: Scalars["ID"];
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: Scalars["Boolean"];
  /** The name of the project. */
  name: Scalars["String"];
  /** The description of the project. */
  body?: Maybe<Scalars["String"]>;
  /** The visibility of the project, defaults to false (private). */
  public?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CloneProject */
export type GitHubCloneProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The id of the JobStatus for populating cloned fields. */
  jobStatusId?: Maybe<Scalars["String"]>;
  /** The new cloned project. */
  project?: Maybe<GitHubProject>;
};

/** An object that can be closed */
export type GitHubClosable = {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars["Boolean"];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars["GitHubDateTime"]>;
};

/** Represents a 'closed' event on any `Closable`. */
export type GitHubClosedEvent = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHubActor>;
    /** Object that was closed. */
    closable: GitHubClosable;
    /** Object which triggered the creation of this event. */
    closer?: Maybe<GitHubCloser>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    id: Scalars["ID"];
    /** The HTTP path for this closed event. */
    resourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this closed event. */
    url: Scalars["GitHubURI"];
  };

/** Autogenerated input type of CloseIssue */
export type GitHubCloseIssueInput = {
  /** ID of the issue to be closed. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CloseIssue */
export type GitHubCloseIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue that was closed. */
  issue?: Maybe<GitHubIssue>;
};

/** Autogenerated input type of ClosePullRequest */
export type GitHubClosePullRequestInput = {
  /** ID of the pull request to be closed. */
  pullRequestId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ClosePullRequest */
export type GitHubClosePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was closed. */
  pullRequest?: Maybe<GitHubPullRequest>;
};

/** The object which triggered a `ClosedEvent`. */
export type GitHubCloser = GitHubCommit | GitHubPullRequest;

/** The Code of Conduct for a repository */
export type GitHubCodeOfConduct = GitHubNode & {
  /** The body of the Code of Conduct */
  body?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The key for the Code of Conduct */
  key: Scalars["String"];
  /** The formal name of the Code of Conduct */
  name: Scalars["String"];
  /** The HTTP path for this Code of Conduct */
  resourcePath?: Maybe<Scalars["GitHubURI"]>;
  /** The HTTP URL for this Code of Conduct */
  url?: Maybe<Scalars["GitHubURI"]>;
};

/** Collaborators affiliation level with a subject. */
export enum GitHubCollaboratorAffiliation {
  /** All outside collaborators of an organization-owned subject. */
  Outside = "OUTSIDE",
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  Direct = "DIRECT",
  /** All collaborators the authenticated user can see. */
  All = "ALL"
}

/** Types that can be inside Collection Items. */
export type GitHubCollectionItemContent =
  | GitHubRepository
  | GitHubOrganization
  | GitHubUser;

/** Represents a comment. */
export type GitHubComment = {
  /** The actor who authored the comment. */
  author?: Maybe<GitHubActor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHubCommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars["String"];
  /** The body rendered to HTML. */
  bodyHTML: Scalars["GitHubHTML"];
  /** The body rendered to text. */
  bodyText: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars["Boolean"];
  /** The actor who edited the comment. */
  editor?: Maybe<GitHubActor>;
  id: Scalars["ID"];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars["Boolean"];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHubUserContentEditConnection>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars["Boolean"];
};

/** Represents a comment. */
export type GitHubCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A comment author association with repository. */
export enum GitHubCommentAuthorAssociation {
  /** Author is a member of the organization that owns the repository. */
  Member = "MEMBER",
  /** Author is the owner of the repository. */
  Owner = "OWNER",
  /** Author has been invited to collaborate on the repository. */
  Collaborator = "COLLABORATOR",
  /** Author has previously committed to the repository. */
  Contributor = "CONTRIBUTOR",
  /** Author has not previously committed to the repository. */
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  /** Author has not previously committed to GitHub. */
  FirstTimer = "FIRST_TIMER",
  /** Author has no association with the repository. */
  None = "NONE"
}

/** The possible errors that will prevent a user from updating a comment. */
export enum GitHubCommentCannotUpdateReason {
  /** You must be the author or have write access to this repository to update this comment. */
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  /** Unable to create comment because issue is locked. */
  Locked = "LOCKED",
  /** You must be logged in to update this comment. */
  LoginRequired = "LOGIN_REQUIRED",
  /** Repository is under maintenance. */
  Maintenance = "MAINTENANCE",
  /** At least one email address must be verified to update this comment. */
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED",
  /** You cannot update this comment */
  Denied = "DENIED"
}

/** Represents a 'comment_deleted' event on a given issue or pull request. */
export type GitHubCommentDeletedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Represents a Git commit. */
export type GitHubCommit = GitHubNode &
  GitHubGitObject &
  GitHubSubscribable &
  GitHubUniformResourceLocatable & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The number of additions in this commit. */
    additions: Scalars["Int"];
    /** The pull requests associated with a commit */
    associatedPullRequests?: Maybe<GitHubPullRequestConnection>;
    /** Authorship details of the commit. */
    author?: Maybe<GitHubGitActor>;
    /** Check if the committer and the author match. */
    authoredByCommitter: Scalars["Boolean"];
    /** The datetime when this commit was authored. */
    authoredDate: Scalars["GitHubDateTime"];
    /** Fetches `git blame` information. */
    blame: GitHubBlame;
    /** The number of changed files in this commit. */
    changedFiles: Scalars["Int"];
    /** Comments made on the commit. */
    comments: GitHubCommitCommentConnection;
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHubURI"];
    /** The datetime when this commit was committed. */
    committedDate: Scalars["GitHubDateTime"];
    /** Check if commited via GitHub web UI. */
    committedViaWeb: Scalars["Boolean"];
    /** Committership details of the commit. */
    committer?: Maybe<GitHubGitActor>;
    /** The number of deletions in this commit. */
    deletions: Scalars["Int"];
    /** The deployments associated with a commit. */
    deployments?: Maybe<GitHubDeploymentConnection>;
    /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
    history: GitHubCommitHistoryConnection;
    id: Scalars["ID"];
    /** The Git commit message */
    message: Scalars["String"];
    /** The Git commit message body */
    messageBody: Scalars["String"];
    /** The commit message body rendered to HTML. */
    messageBodyHTML: Scalars["GitHubHTML"];
    /** The Git commit message headline */
    messageHeadline: Scalars["String"];
    /** The commit message headline rendered to HTML. */
    messageHeadlineHTML: Scalars["GitHubHTML"];
    /** The Git object ID */
    oid: Scalars["GitHubGitObjectID"];
    /** The parents of a commit. */
    parents: GitHubCommitConnection;
    /** The datetime when this commit was pushed. */
    pushedDate?: Maybe<Scalars["GitHubDateTime"]>;
    /** The Repository this commit belongs to */
    repository: GitHubRepository;
    /** The HTTP path for this commit */
    resourcePath: Scalars["GitHubURI"];
    /** Commit signing information, if present. */
    signature?: Maybe<GitHubGitSignature>;
    /** Status information for this commit */
    status?: Maybe<GitHubStatus>;
    /** Returns a URL to download a tarball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    tarballUrl: Scalars["GitHubURI"];
    /** Commit's root Tree */
    tree: GitHubTree;
    /** The HTTP path for the tree of this commit */
    treeResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for the tree of this commit */
    treeUrl: Scalars["GitHubURI"];
    /** The HTTP URL for this commit */
    url: Scalars["GitHubURI"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHubSubscriptionState>;
    /** Returns a URL to download a zipball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    zipballUrl: Scalars["GitHubURI"];
  };

/** Represents a Git commit. */
export type GitHubCommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubPullRequestOrder>;
};

/** Represents a Git commit. */
export type GitHubCommitBlameArgs = {
  path: Scalars["String"];
};

/** Represents a Git commit. */
export type GitHubCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Git commit. */
export type GitHubCommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHubDeploymentOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Git commit. */
export type GitHubCommitHistoryArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  path?: Maybe<Scalars["String"]>;
  author?: Maybe<GitHubCommitAuthor>;
  since?: Maybe<Scalars["GitHubGitTimestamp"]>;
  until?: Maybe<Scalars["GitHubGitTimestamp"]>;
};

/** Represents a Git commit. */
export type GitHubCommitParentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Specifies an author for filtering Git commits. */
export type GitHubCommitAuthor = {
  /** ID of a User to filter by. If non-null, only commits authored by this user
   * will be returned. This field takes precedence over emails.
   */
  id?: Maybe<Scalars["ID"]>;
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<Array<Scalars["String"]>>;
};

/** Represents a comment on a given Commit. */
export type GitHubCommitComment = GitHubNode &
  GitHubComment &
  GitHubDeletable &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubReactable &
  GitHubRepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** Identifies the comment body. */
    body: Scalars["String"];
    /** Identifies the comment body rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the commit associated with the comment, if the commit exists. */
    commit?: Maybe<GitHubCommit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies the file path associated with the comment. */
    path?: Maybe<Scalars["String"]>;
    /** Identifies the line position associated with the comment. */
    position?: Maybe<Scalars["Int"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path permalink for this commit comment. */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL permalink for this commit comment. */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on a given Commit. */
export type GitHubCommitCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** Represents a comment on a given Commit. */
export type GitHubCommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for CommitComment. */
export type GitHubCommitCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCommitCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCommitComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCommitCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCommitComment>;
};

/** A thread of comments on a commit. */
export type GitHubCommitCommentThread = GitHubNode &
  GitHubRepositoryNode & {
    /** The comments that exist in this thread. */
    comments: GitHubCommitCommentConnection;
    /** The commit the comments were made on. */
    commit: GitHubCommit;
    id: Scalars["ID"];
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>;
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>;
    /** The repository associated with this node. */
    repository: GitHubRepository;
  };

/** A thread of comments on a commit. */
export type GitHubCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Commit. */
export type GitHubCommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCommit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Ordering options for commit contribution connections. */
export type GitHubCommitContributionOrder = {
  /** The field by which to order commit contributions. */
  field: GitHubCommitContributionOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which commit contribution connections can be ordered. */
export enum GitHubCommitContributionOrderField {
  /** Order commit contributions by when they were made. */
  OccurredAt = "OCCURRED_AT",
  /** Order commit contributions by how many commits they represent. */
  CommitCount = "COMMIT_COUNT"
}

/** This aggregates commits made by a user within one repository. */
export type GitHubCommitContributionsByRepository = {
  /** The commit contributions, each representing a day. */
  contributions: GitHubCreatedCommitContributionConnection;
  /** The repository in which the commits were made. */
  repository: GitHubRepository;
  /** The HTTP path for the user's commits to the repository in this time range. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for the user's commits to the repository in this time range. */
  url: Scalars["GitHubURI"];
};

/** This aggregates commits made by a user within one repository. */
export type GitHubCommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubCommitContributionOrder>;
};

/** An edge in a connection. */
export type GitHubCommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCommit>;
};

/** The connection type for Commit. */
export type GitHubCommitHistoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCommit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** A content attachment */
export type GitHubContentAttachment = {
  /** The body text of the content attachment. This parameter supports markdown. */
  body: Scalars["String"];
  /** The content reference that the content attachment is attached to. */
  contentReference: GitHubContentReference;
  /** Identifies the primary key from the database. */
  databaseId: Scalars["Int"];
  id: Scalars["ID"];
  /** The title of the content attachment. */
  title: Scalars["String"];
};

/** A content reference */
export type GitHubContentReference = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars["Int"];
  id: Scalars["ID"];
  /** The reference of the content reference. */
  reference: Scalars["String"];
};

/** Represents a contribution a user made on GitHub, such as opening an issue. */
export type GitHubContribution = {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** A calendar of contributions made on GitHub by a user. */
export type GitHubContributionCalendar = {
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  colors: Array<Scalars["String"]>;
  /** Determine if the color set was chosen because it's currently Halloween. */
  isHalloween: Scalars["Boolean"];
  /** A list of the months of contributions in this calendar. */
  months: Array<GitHubContributionCalendarMonth>;
  /** The count of total contributions in the calendar. */
  totalContributions: Scalars["Int"];
  /** A list of the weeks of contributions in this calendar. */
  weeks: Array<GitHubContributionCalendarWeek>;
};

/** Represents a single day of contributions on GitHub by a user. */
export type GitHubContributionCalendarDay = {
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  color: Scalars["String"];
  /** How many contributions were made by the user on this day. */
  contributionCount: Scalars["Int"];
  /** The day this square represents. */
  date: Scalars["GitHubDate"];
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  weekday: Scalars["Int"];
};

/** A month of contributions in a user's contribution graph. */
export type GitHubContributionCalendarMonth = {
  /** The date of the first day of this month. */
  firstDay: Scalars["GitHubDate"];
  /** The name of the month. */
  name: Scalars["String"];
  /** How many weeks started in this month. */
  totalWeeks: Scalars["Int"];
  /** The year the month occurred in. */
  year: Scalars["Int"];
};

/** A week of contributions in a user's contribution graph. */
export type GitHubContributionCalendarWeek = {
  /** The days of contributions in this week. */
  contributionDays: Array<GitHubContributionCalendarDay>;
  /** The date of the earliest square in this week. */
  firstDay: Scalars["GitHubDate"];
};

/** Ordering options for contribution connections. */
export type GitHubContributionOrder = {
  /** The field by which to order contributions. */
  field: GitHubContributionOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which contribution connections can be ordered. */
export enum GitHubContributionOrderField {
  /** Order contributions by when they were made. */
  OccurredAt = "OCCURRED_AT"
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollection = {
  /** Commit contributions made by the user, grouped by repository. */
  commitContributionsByRepository: Array<GitHubCommitContributionsByRepository>;
  /** A calendar of this user's contributions on GitHub. */
  contributionCalendar: GitHubContributionCalendar;
  /** The years the user has been making contributions with the most recent year first. */
  contributionYears: Array<Scalars["Int"]>;
  /** Determine if this collection's time span ends in the current month. */
  doesEndInCurrentMonth: Scalars["Boolean"];
  /** The date of the first restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  earliestRestrictedContributionDate?: Maybe<Scalars["GitHubDate"]>;
  /** The ending date and time of this collection. */
  endedAt: Scalars["GitHubDateTime"];
  /** The first issue the user opened on GitHub. This will be null if that issue was
   * opened outside the collection's time range and ignoreTimeRange is false. If
   * the issue is not visible but the user has opted to show private contributions,
   * a RestrictedContribution will be returned.
   */
  firstIssueContribution?: Maybe<GitHubCreatedIssueOrRestrictedContribution>;
  /** The first pull request the user opened on GitHub. This will be null if that
   * pull request was opened outside the collection's time range and
   * ignoreTimeRange is not true. If the pull request is not visible but the user
   * has opted to show private contributions, a RestrictedContribution will be returned.
   */
  firstPullRequestContribution?: Maybe<
    GitHubCreatedPullRequestOrRestrictedContribution
  >;
  /** The first repository the user created on GitHub. This will be null if that
   * first repository was created outside the collection's time range and
   * ignoreTimeRange is false. If the repository is not visible, then a
   * RestrictedContribution is returned.
   */
  firstRepositoryContribution?: Maybe<
    GitHubCreatedRepositoryOrRestrictedContribution
  >;
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  hasActivityInThePast: Scalars["Boolean"];
  /** Determine if there are any contributions in this collection. */
  hasAnyContributions: Scalars["Boolean"];
  /** Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: Scalars["Boolean"];
  /** Whether or not the collector's time span is all within the same day. */
  isSingleDay: Scalars["Boolean"];
  /** A list of issues the user opened. */
  issueContributions: GitHubCreatedIssueContributionConnection;
  /** Issue contributions made by the user, grouped by repository. */
  issueContributionsByRepository: Array<GitHubIssueContributionsByRepository>;
  /** When the user signed up for GitHub. This will be null if that sign up date
   * falls outside the collection's time range and ignoreTimeRange is false.
   */
  joinedGitHubContribution?: Maybe<GitHubJoinedGitHubContribution>;
  /** The date of the most recent restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  latestRestrictedContributionDate?: Maybe<Scalars["GitHubDate"]>;
  /** When this collection's time range does not include any activity from the user, use this
   * to get a different collection from an earlier time range that does have activity.
   */
  mostRecentCollectionWithActivity?: Maybe<GitHubContributionsCollection>;
  /** Returns a different contributions collection from an earlier time range than this one
   * that does not have any contributions.
   */
  mostRecentCollectionWithoutActivity?: Maybe<GitHubContributionsCollection>;
  /** The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution?: Maybe<GitHubCreatedIssueContribution>;
  /** The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution?: Maybe<GitHubCreatedPullRequestContribution>;
  /** Pull request contributions made by the user. */
  pullRequestContributions: GitHubCreatedPullRequestContributionConnection;
  /** Pull request contributions made by the user, grouped by repository. */
  pullRequestContributionsByRepository: Array<
    GitHubPullRequestContributionsByRepository
  >;
  /** Pull request review contributions made by the user. */
  pullRequestReviewContributions: GitHubCreatedPullRequestReviewContributionConnection;
  /** Pull request review contributions made by the user, grouped by repository. */
  pullRequestReviewContributionsByRepository: Array<
    GitHubPullRequestReviewContributionsByRepository
  >;
  /** A list of repositories owned by the user that the user created in this time range. */
  repositoryContributions: GitHubCreatedRepositoryContributionConnection;
  /** A count of contributions made by the user that the viewer cannot access. Only
   * non-zero when the user has chosen to share their private contribution counts.
   */
  restrictedContributionsCount: Scalars["Int"];
  /** The beginning date and time of this collection. */
  startedAt: Scalars["GitHubDateTime"];
  /** How many commits were made by the user in this time span. */
  totalCommitContributions: Scalars["Int"];
  /** How many issues the user opened. */
  totalIssueContributions: Scalars["Int"];
  /** How many pull requests the user opened. */
  totalPullRequestContributions: Scalars["Int"];
  /** How many pull request reviews the user left. */
  totalPullRequestReviewContributions: Scalars["Int"];
  /** How many different repositories the user committed to. */
  totalRepositoriesWithContributedCommits: Scalars["Int"];
  /** How many different repositories the user opened issues in. */
  totalRepositoriesWithContributedIssues: Scalars["Int"];
  /** How many different repositories the user left pull request reviews in. */
  totalRepositoriesWithContributedPullRequestReviews: Scalars["Int"];
  /** How many different repositories the user opened pull requests in. */
  totalRepositoriesWithContributedPullRequests: Scalars["Int"];
  /** How many repositories the user created. */
  totalRepositoryContributions: Scalars["Int"];
  /** The user who made the contributions in this collection. */
  user: GitHubUser;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionFirstIssueContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionFirstPullRequestContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionFirstRepositoryContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionJoinedGitHubContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHubContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
};

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export type GitHubConvertedNoteToIssueEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export type GitHubConvertProjectCardNoteToIssueInput = {
  /** The ProjectCard ID to convert. */
  projectCardId: Scalars["ID"];
  /** The ID of the repository to create the issue in. */
  repositoryId: Scalars["ID"];
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<Scalars["String"]>;
  /** The body of the newly created issue. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
export type GitHubConvertProjectCardNoteToIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHubProjectCard>;
};

/** Autogenerated input type of CreateBranchProtectionRule */
export type GitHubCreateBranchProtectionRuleInput = {
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: Scalars["ID"];
  /** The glob-like pattern used to determine matching branches. */
  pattern: Scalars["String"];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateBranchProtectionRule */
export type GitHubCreateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of CreateContentAttachment */
export type GitHubCreateContentAttachmentInput = {
  /** The node ID of the content_reference. */
  contentReferenceId: Scalars["ID"];
  /** The title of the content attachment. */
  title: Scalars["String"];
  /** The body of the content attachment, which may contain markdown. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents the contribution a user made by committing to a repository. */
export type GitHubCreatedCommitContribution = GitHubContribution & {
  /** How many commits were made on this day to this repository by the user. */
  commitCount: Scalars["Int"];
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The repository the user made a commit in. */
  repository: GitHubRepository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** The connection type for CreatedCommitContribution. */
export type GitHubCreatedCommitContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCreatedCommitContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCreatedCommitContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of commits across days and repositories in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCreatedCommitContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCreatedCommitContribution>;
};

/** Represents the contribution a user made on GitHub by opening an issue. */
export type GitHubCreatedIssueContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** The issue that was opened. */
  issue: GitHubIssue;
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** The connection type for CreatedIssueContribution. */
export type GitHubCreatedIssueContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCreatedIssueContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCreatedIssueContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCreatedIssueContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCreatedIssueContribution>;
};

/** Represents either a issue the viewer can access or a restricted contribution. */
export type GitHubCreatedIssueOrRestrictedContribution =
  | GitHubCreatedIssueContribution
  | GitHubRestrictedContribution;

/** Represents the contribution a user made on GitHub by opening a pull request. */
export type GitHubCreatedPullRequestContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The pull request that was opened. */
  pullRequest: GitHubPullRequest;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** The connection type for CreatedPullRequestContribution. */
export type GitHubCreatedPullRequestContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCreatedPullRequestContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCreatedPullRequestContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCreatedPullRequestContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCreatedPullRequestContribution>;
};

/** Represents either a pull request the viewer can access or a restricted contribution. */
export type GitHubCreatedPullRequestOrRestrictedContribution =
  | GitHubCreatedPullRequestContribution
  | GitHubRestrictedContribution;

/** Represents the contribution a user made by leaving a review on a pull request. */
export type GitHubCreatedPullRequestReviewContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The pull request the user reviewed. */
  pullRequest: GitHubPullRequest;
  /** The review the user left on the pull request. */
  pullRequestReview: GitHubPullRequestReview;
  /** The repository containing the pull request that the user reviewed. */
  repository: GitHubRepository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** The connection type for CreatedPullRequestReviewContribution. */
export type GitHubCreatedPullRequestReviewContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCreatedPullRequestReviewContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCreatedPullRequestReviewContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCreatedPullRequestReviewContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCreatedPullRequestReviewContribution>;
};

/** Represents the contribution a user made on GitHub by creating a repository. */
export type GitHubCreatedRepositoryContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The repository that was created. */
  repository: GitHubRepository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** The connection type for CreatedRepositoryContribution. */
export type GitHubCreatedRepositoryContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubCreatedRepositoryContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubCreatedRepositoryContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubCreatedRepositoryContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubCreatedRepositoryContribution>;
};

/** Represents either a repository the viewer can access or a restricted contribution. */
export type GitHubCreatedRepositoryOrRestrictedContribution =
  | GitHubCreatedRepositoryContribution
  | GitHubRestrictedContribution;

/** Autogenerated input type of CreateIssue */
export type GitHubCreateIssueInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The title for the issue. */
  title: Scalars["String"];
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>;
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateIssue */
export type GitHubCreateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new issue. */
  issue?: Maybe<GitHubIssue>;
};

/** Autogenerated input type of CreateProject */
export type GitHubCreateProjectInput = {
  /** The owner ID to create the project under. */
  ownerId: Scalars["ID"];
  /** The name of project. */
  name: Scalars["String"];
  /** The description of project. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateProject */
export type GitHubCreateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new project. */
  project?: Maybe<GitHubProject>;
};

/** Autogenerated input type of CreatePullRequest */
export type GitHubCreatePullRequestInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository. You cannot update the base branch on a pull request to point
   * to another repository.
   */
  baseRefName: Scalars["String"];
  /** The name of the branch where your changes are implemented. For cross-repository pull requests
   * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
   */
  headRefName: Scalars["String"];
  /** The title of the pull request. */
  title: Scalars["String"];
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreatePullRequest */
export type GitHubCreatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new pull request. */
  pullRequest?: Maybe<GitHubPullRequest>;
};

/** Represents a mention made by one issue or pull request to another. */
export type GitHubCrossReferencedEvent = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHubActor>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    id: Scalars["ID"];
    /** Reference originated in a different repository. */
    isCrossRepository: Scalars["Boolean"];
    /** Identifies when the reference was made. */
    referencedAt: Scalars["GitHubDateTime"];
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["GitHubURI"];
    /** Issue or pull request that made the reference. */
    source: GitHubReferencedSubject;
    /** Issue or pull request to which the reference was made. */
    target: GitHubReferencedSubject;
    /** The HTTP URL for this pull request. */
    url: Scalars["GitHubURI"];
    /** Checks if the target will be closed when the source is merged. */
    willCloseTarget: Scalars["Boolean"];
  };

/** Autogenerated input type of DeclineTopicSuggestion */
export type GitHubDeclineTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the suggested topic. */
  name: Scalars["String"];
  /** The reason why the suggested topic is declined. */
  reason: GitHubTopicSuggestionDeclineReason;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeclineTopicSuggestion */
export type GitHubDeclineTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The declined topic. */
  topic?: Maybe<GitHubTopic>;
};

/** The possible default permissions for repositories. */
export enum GitHubDefaultRepositoryPermissionField {
  /** No access */
  None = "NONE",
  /** Can read repos by default */
  Read = "READ",
  /** Can read and write repos by default */
  Write = "WRITE",
  /** Can read, write, and administrate repos by default */
  Admin = "ADMIN"
}

/** Entities that can be deleted. */
export type GitHubDeletable = {
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars["Boolean"];
};

/** Autogenerated input type of DeleteBranchProtectionRule */
export type GitHubDeleteBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteBranchProtectionRule */
export type GitHubDeleteBranchProtectionRulePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of DeleteIssueComment */
export type GitHubDeleteIssueCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteIssueComment */
export type GitHubDeleteIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of DeleteIssue */
export type GitHubDeleteIssueInput = {
  /** The ID of the issue to delete. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteIssue */
export type GitHubDeleteIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The repository the issue belonged to */
  repository?: Maybe<GitHubRepository>;
};

/** Autogenerated input type of DeleteProjectCard */
export type GitHubDeleteProjectCardInput = {
  /** The id of the card to delete. */
  cardId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProjectCard */
export type GitHubDeleteProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The column the deleted card was in. */
  column?: Maybe<GitHubProjectColumn>;
  /** The deleted card ID. */
  deletedCardId?: Maybe<Scalars["ID"]>;
};

/** Autogenerated input type of DeleteProjectColumn */
export type GitHubDeleteProjectColumnInput = {
  /** The id of the column to delete. */
  columnId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProjectColumn */
export type GitHubDeleteProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The deleted column ID. */
  deletedColumnId?: Maybe<Scalars["ID"]>;
  /** The project the deleted column was in. */
  project?: Maybe<GitHubProject>;
};

/** Autogenerated input type of DeleteProject */
export type GitHubDeleteProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProject */
export type GitHubDeleteProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The repository or organization the project was removed from. */
  owner?: Maybe<GitHubProjectOwner>;
};

/** Autogenerated input type of DeletePullRequestReviewComment */
export type GitHubDeletePullRequestReviewCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeletePullRequestReviewComment */
export type GitHubDeletePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request review the deleted comment belonged to. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
};

/** Autogenerated input type of DeletePullRequestReview */
export type GitHubDeletePullRequestReviewInput = {
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeletePullRequestReview */
export type GitHubDeletePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The deleted pull request review. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
};

/** Represents a 'demilestoned' event on a given issue or pull request. */
export type GitHubDemilestonedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  milestoneTitle: Scalars["String"];
  /** Object referenced by event. */
  subject: GitHubMilestoneItem;
};

/** Represents a 'deployed' event on a given pull request. */
export type GitHubDeployedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The deployment associated with the 'deployed' event. */
  deployment: GitHubDeployment;
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
  /** The ref associated with the 'deployed' event. */
  ref?: Maybe<GitHubRef>;
};

/** A repository deploy key. */
export type GitHubDeployKey = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** The deploy key. */
  key: Scalars["String"];
  /** Whether or not the deploy key is read only. */
  readOnly: Scalars["Boolean"];
  /** The deploy key title. */
  title: Scalars["String"];
  /** Whether or not the deploy key has been verified. */
  verified: Scalars["Boolean"];
};

/** The connection type for DeployKey. */
export type GitHubDeployKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubDeployKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubDeployKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubDeployKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubDeployKey>;
};

/** Represents triggered deployment instance. */
export type GitHubDeployment = GitHubNode & {
  /** Identifies the commit sha of the deployment. */
  commit?: Maybe<GitHubCommit>;
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  commitOid: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the actor who triggered the deployment. */
  creator?: Maybe<GitHubActor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The deployment description. */
  description?: Maybe<Scalars["String"]>;
  /** The environment to which this deployment was made. */
  environment?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The latest status of this deployment. */
  latestStatus?: Maybe<GitHubDeploymentStatus>;
  /** Extra information that a deployment system might need. */
  payload?: Maybe<Scalars["String"]>;
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  ref?: Maybe<GitHubRef>;
  /** Identifies the repository associated with the deployment. */
  repository: GitHubRepository;
  /** The current state of the deployment. */
  state?: Maybe<GitHubDeploymentState>;
  /** A list of statuses associated with the deployment. */
  statuses?: Maybe<GitHubDeploymentStatusConnection>;
  /** The deployment task. */
  task?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** Represents triggered deployment instance. */
export type GitHubDeploymentStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Deployment. */
export type GitHubDeploymentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubDeploymentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubDeployment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubDeploymentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubDeployment>;
};

/** Represents a 'deployment_environment_changed' event on a given pull request. */
export type GitHubDeploymentEnvironmentChangedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The deployment status that updated the deployment environment. */
  deploymentStatus: GitHubDeploymentStatus;
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
};

/** Ordering options for deployment connections */
export type GitHubDeploymentOrder = {
  /** The field to order deployments by. */
  field: GitHubDeploymentOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which deployment connections can be ordered. */
export enum GitHubDeploymentOrderField {
  /** Order collection by creation time */
  CreatedAt = "CREATED_AT"
}

/** The possible states in which a deployment can be. */
export enum GitHubDeploymentState {
  /** The pending deployment was not updated after 30 minutes. */
  Abandoned = "ABANDONED",
  /** The deployment is currently active. */
  Active = "ACTIVE",
  /** An inactive transient deployment. */
  Destroyed = "DESTROYED",
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment has queued */
  Queued = "QUEUED",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS"
}

/** Describes the status of a given deployment attempt. */
export type GitHubDeploymentStatus = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the actor who triggered the deployment. */
  creator?: Maybe<GitHubActor>;
  /** Identifies the deployment associated with status. */
  deployment: GitHubDeployment;
  /** Identifies the description of the deployment. */
  description?: Maybe<Scalars["String"]>;
  /** Identifies the environment URL of the deployment. */
  environmentUrl?: Maybe<Scalars["GitHubURI"]>;
  id: Scalars["ID"];
  /** Identifies the log URL of the deployment. */
  logUrl?: Maybe<Scalars["GitHubURI"]>;
  /** Identifies the current state of the deployment. */
  state: GitHubDeploymentStatusState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** The connection type for DeploymentStatus. */
export type GitHubDeploymentStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubDeploymentStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubDeploymentStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubDeploymentStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubDeploymentStatus>;
};

/** The possible states for a deployment status. */
export enum GitHubDeploymentStatusState {
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment was successful. */
  Success = "SUCCESS",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment is queued */
  Queued = "QUEUED",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS"
}

/** Autogenerated input type of DismissPullRequestReview */
export type GitHubDismissPullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The contents of the pull request review dismissal message. */
  message: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DismissPullRequestReview */
export type GitHubDismissPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The dismissed pull request review. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
};

/** Specifies a review comment to be left with a Pull Request Review. */
export type GitHubDraftPullRequestReviewComment = {
  /** Path to the file being commented on. */
  path: Scalars["String"];
  /** Position in the file to leave a comment on. */
  position: Scalars["Int"];
  /** Body of the comment to leave. */
  body: Scalars["String"];
};

/** An external identity provisioned by SAML SSO or SCIM. */
export type GitHubExternalIdentity = GitHubNode & {
  /** The GUID for this identity */
  guid: Scalars["String"];
  id: Scalars["ID"];
  /** Organization invitation for this SCIM-provisioned external identity */
  organizationInvitation?: Maybe<GitHubOrganizationInvitation>;
  /** SAML Identity attributes */
  samlIdentity?: Maybe<GitHubExternalIdentitySamlAttributes>;
  /** SCIM Identity attributes */
  scimIdentity?: Maybe<GitHubExternalIdentityScimAttributes>;
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  user?: Maybe<GitHubUser>;
};

/** The connection type for ExternalIdentity. */
export type GitHubExternalIdentityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubExternalIdentityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubExternalIdentity>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubExternalIdentityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubExternalIdentity>;
};

/** SAML attributes for the External Identity */
export type GitHubExternalIdentitySamlAttributes = {
  /** The NameID of the SAML identity */
  nameId?: Maybe<Scalars["String"]>;
};

/** SCIM attributes for the External Identity */
export type GitHubExternalIdentityScimAttributes = {
  /** The userName of the SCIM identity */
  username?: Maybe<Scalars["String"]>;
};

/** The connection type for User. */
export type GitHubFollowerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** The connection type for User. */
export type GitHubFollowingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** A Gist. */
export type GitHubGist = GitHubNode &
  GitHubStarrable & {
    /** A list of comments associated with the gist */
    comments: GitHubGistCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** The gist description. */
    description?: Maybe<Scalars["String"]>;
    /** The files in this gist. */
    files?: Maybe<Array<Maybe<GitHubGistFile>>>;
    id: Scalars["ID"];
    /** Identifies if the gist is a fork. */
    isFork: Scalars["Boolean"];
    /** Whether the gist is public or not. */
    isPublic: Scalars["Boolean"];
    /** The gist name. */
    name: Scalars["String"];
    /** The gist owner. */
    owner?: Maybe<GitHubRepositoryOwner>;
    /** Identifies when the gist was last pushed to. */
    pushedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of users who have starred this starrable. */
    stargazers: GitHubStargazerConnection;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
  };

/** A Gist. */
export type GitHubGistCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A Gist. */
export type GitHubGistFilesArgs = {
  limit: Scalars["Int"];
};

/** A Gist. */
export type GitHubGistStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubStarOrder>;
};

/** Represents a comment on an Gist. */
export type GitHubGistComment = GitHubNode &
  GitHubComment &
  GitHubDeletable &
  GitHubUpdatable &
  GitHubUpdatableComment & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the gist. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** Identifies the comment body. */
    body: Scalars["String"];
    /** The comment body rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    /** The associated gist. */
    gist: GitHubGist;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on an Gist. */
export type GitHubGistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for GistComment. */
export type GitHubGistCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubGistCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubGistComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubGistCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubGistComment>;
};

/** The connection type for Gist. */
export type GitHubGistConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubGistEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubGist>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubGistEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubGist>;
};

/** A file in a gist. */
export type GitHubGistFile = {
  /** The file name encoded to remove characters that are invalid in URL paths. */
  encodedName?: Maybe<Scalars["String"]>;
  /** The gist file encoding. */
  encoding?: Maybe<Scalars["String"]>;
  /** The file extension from the file name. */
  extension?: Maybe<Scalars["String"]>;
  /** Indicates if this file is an image. */
  isImage: Scalars["Boolean"];
  /** Whether the file's contents were truncated. */
  isTruncated: Scalars["Boolean"];
  /** The programming language this file is written in. */
  language?: Maybe<GitHubLanguage>;
  /** The gist file name. */
  name?: Maybe<Scalars["String"]>;
  /** The gist file size in bytes. */
  size?: Maybe<Scalars["Int"]>;
  /** UTF8 text data or null if the file is binary */
  text?: Maybe<Scalars["String"]>;
};

/** A file in a gist. */
export type GitHubGistFileTextArgs = {
  truncate?: Maybe<Scalars["Int"]>;
};

/** Ordering options for gist connections */
export type GitHubGistOrder = {
  /** The field to order repositories by. */
  field: GitHubGistOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which gist connections can be ordered. */
export enum GitHubGistOrderField {
  /** Order gists by creation time */
  CreatedAt = "CREATED_AT",
  /** Order gists by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order gists by push time */
  PushedAt = "PUSHED_AT"
}

/** The privacy of a Gist */
export enum GitHubGistPrivacy {
  /** Public */
  Public = "PUBLIC",
  /** Secret */
  Secret = "SECRET",
  /** Gists that are public and secret */
  All = "ALL"
}

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHubGitActor = {
  /** A URL pointing to the author's public avatar. */
  avatarUrl: Scalars["GitHubURI"];
  /** The timestamp of the Git action (authoring or committing). */
  date?: Maybe<Scalars["GitHubGitTimestamp"]>;
  /** The email in the Git commit. */
  email?: Maybe<Scalars["String"]>;
  /** The name in the Git commit. */
  name?: Maybe<Scalars["String"]>;
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  user?: Maybe<GitHubUser>;
};

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHubGitActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Represents information about the GitHub instance. */
export type GitHubGitHubMetadata = {
  /** Returns a String that's a SHA of `github-services` */
  gitHubServicesSha: Scalars["GitHubGitObjectID"];
  /** IP addresses that users connect to for git operations */
  gitIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** IP addresses that service hooks are sent from */
  hookIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** IP addresses that the importer connects from */
  importerIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** Whether or not users are verified */
  isPasswordAuthenticationVerifiable: Scalars["Boolean"];
  /** IP addresses for GitHub Pages' A records */
  pagesIpAddresses?: Maybe<Array<Scalars["String"]>>;
};

/** Represents a Git object. */
export type GitHubGitObject = {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars["String"];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars["GitHubURI"];
  id: Scalars["ID"];
  /** The Git object ID */
  oid: Scalars["GitHubGitObjectID"];
  /** The Repository the Git object belongs to */
  repository: GitHubRepository;
};

/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export type GitHubGitSignature = {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHubUser>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHubGitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** The state of a Git signature. */
export enum GitHubGitSignatureState {
  /** Valid signature and verified by GitHub */
  Valid = "VALID",
  /** Invalid signature */
  Invalid = "INVALID",
  /** Malformed signature */
  MalformedSig = "MALFORMED_SIG",
  /** Key used for signing not known to GitHub */
  UnknownKey = "UNKNOWN_KEY",
  /** Invalid email used for signing */
  BadEmail = "BAD_EMAIL",
  /** Email used for signing unverified on GitHub */
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  /** Email used for signing not known to GitHub */
  NoUser = "NO_USER",
  /** Unknown signature type */
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  /** Unsigned */
  Unsigned = "UNSIGNED",
  /** Internal error - the GPG verification service is unavailable at the moment */
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  /** Internal error - the GPG verification service misbehaved */
  GpgverifyError = "GPGVERIFY_ERROR",
  /** The usage flags for the key that signed this don't allow signing */
  NotSigningKey = "NOT_SIGNING_KEY",
  /** Signing key expired */
  ExpiredKey = "EXPIRED_KEY",
  /** Valid signature, pending certificate revocation checking */
  OcspPending = "OCSP_PENDING",
  /** Valid siganture, though certificate revocation check failed */
  OcspError = "OCSP_ERROR",
  /** The signing certificate or its chain could not be verified */
  BadCert = "BAD_CERT",
  /** One or more certificates in chain has been revoked */
  OcspRevoked = "OCSP_REVOKED"
}

/** Represents a GPG signature on a Commit or Tag. */
export type GitHubGpgSignature = GitHubGitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Hex-encoded ID of the key that signed this object. */
  keyId?: Maybe<Scalars["String"]>;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHubUser>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHubGitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** Represents a 'head_ref_deleted' event on a given pull request. */
export type GitHubHeadRefDeletedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  headRef?: Maybe<GitHubRef>;
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  headRefName: Scalars["String"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
};

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export type GitHubHeadRefForcePushedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHubCommit>;
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHubCommit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  ref?: Maybe<GitHubRef>;
};

/** Represents a 'head_ref_restored' event on a given pull request. */
export type GitHubHeadRefRestoredEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
};

/** The possible states in which authentication can be configured with an identity provider. */
export enum GitHubIdentityProviderConfigurationState {
  /** Authentication with an identity provider is configured and enforced. */
  Enforced = "ENFORCED",
  /** Authentication with an identity provider is configured but not enforced. */
  Configured = "CONFIGURED",
  /** Authentication with an identity provider is not configured. */
  Unconfigured = "UNCONFIGURED"
}

/** Autogenerated input type of ImportProject */
export type GitHubImportProjectInput = {
  /** The name of the Organization or User to create the Project under. */
  ownerName: Scalars["String"];
  /** The name of Project. */
  name: Scalars["String"];
  /** The description of Project. */
  body?: Maybe<Scalars["String"]>;
  /** Whether the Project is public or not. */
  public?: Maybe<Scalars["Boolean"]>;
  /** A list of columns containing issues and pull requests. */
  columnImports: Array<GitHubProjectColumnImport>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssue = GitHubNode &
  GitHubAssignable &
  GitHubClosable &
  GitHubComment &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubLabelable &
  GitHubLockable &
  GitHubReactable &
  GitHubRepositoryNode &
  GitHubSubscribable &
  GitHubUniformResourceLocatable & {
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<GitHubLockReason>;
    /** A list of Users assigned to this object. */
    assignees: GitHubUserConnection;
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** Identifies the body of the issue. */
    body: Scalars["String"];
    /** Identifies the body of the issue rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** Identifies the body of the issue rendered to text. */
    bodyText: Scalars["String"];
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of comments associated with the Issue. */
    comments: GitHubIssueCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** A list of labels associated with the object. */
    labels?: Maybe<GitHubLabelConnection>;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** `true` if the object is locked */
    locked: Scalars["Boolean"];
    /** Identifies the milestone associated with the issue. */
    milestone?: Maybe<GitHubMilestone>;
    /** Identifies the issue number. */
    number: Scalars["Int"];
    /** A list of Users that are participating in the Issue conversation. */
    participants: GitHubUserConnection;
    /** List of project cards associated with this issue. */
    projectCards: GitHubProjectCardConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path for this issue */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the state of the issue. */
    state: GitHubIssueState;
    /** A list of events, comments, commits, etc. associated with the issue. */
    timeline: GitHubIssueTimelineConnection;
    /** A list of events, comments, commits, etc. associated with the issue. */
    timelineItems: GitHubIssueTimelineItemsConnection;
    /** Identifies the issue title. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this issue */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHubSubscriptionState>;
  };

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueParticipantsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHubProjectCardArchivedState>>>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueTimelineArgs = {
  since?: Maybe<Scalars["GitHubDateTime"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueTimelineItemsArgs = {
  since?: Maybe<Scalars["GitHubDateTime"]>;
  skip?: Maybe<Scalars["Int"]>;
  itemTypes?: Maybe<Array<GitHubIssueTimelineItemsItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHubIssueUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a comment on an Issue. */
export type GitHubIssueComment = GitHubNode &
  GitHubComment &
  GitHubDeletable &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubReactable &
  GitHubRepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** The body as Markdown. */
    body: Scalars["String"];
    /** The body rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** Identifies the issue associated with the comment. */
    issue: GitHubIssue;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Returns the pull request associated with the comment, if this comment was made on a
     * pull request.
     */
    pullRequest?: Maybe<GitHubPullRequest>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path for this issue comment */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this issue comment */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on an Issue. */
export type GitHubIssueCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** Represents a comment on an Issue. */
export type GitHubIssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for IssueComment. */
export type GitHubIssueCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubIssueCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubIssueComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubIssueCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubIssueComment>;
};

/** The connection type for Issue. */
export type GitHubIssueConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubIssueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubIssue>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates issues opened by a user within one repository. */
export type GitHubIssueContributionsByRepository = {
  /** The issue contributions. */
  contributions: GitHubCreatedIssueContributionConnection;
  /** The repository in which the issues were opened. */
  repository: GitHubRepository;
};

/** This aggregates issues opened by a user within one repository. */
export type GitHubIssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** An edge in a connection. */
export type GitHubIssueEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubIssue>;
};

/** Ways in which to filter lists of issues. */
export type GitHubIssueFilters = {
  /** List issues assigned to given name. Pass in `null` for issues with no assigned
   * user, and `*` for issues assigned to any user.
   */
  assignee?: Maybe<Scalars["String"]>;
  /** List issues created by given name. */
  createdBy?: Maybe<Scalars["String"]>;
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<Array<Scalars["String"]>>;
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<Scalars["String"]>;
  /** List issues by given milestone argument. If an string representation of an
   * integer is passed, it should refer to a milestone by its number field. Pass in
   * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
   */
  milestone?: Maybe<Scalars["String"]>;
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<Scalars["GitHubDateTime"]>;
  /** List issues filtered by the list of states given. */
  states?: Maybe<Array<GitHubIssueState>>;
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: Maybe<Scalars["Boolean"]>;
};

/** Ways in which lists of issues can be ordered upon return. */
export type GitHubIssueOrder = {
  /** The field in which to order issues by. */
  field: GitHubIssueOrderField;
  /** The direction in which to order issues by the specified field. */
  direction: GitHubOrderDirection;
};

/** Properties by which issue connections can be ordered. */
export enum GitHubIssueOrderField {
  /** Order issues by creation time */
  CreatedAt = "CREATED_AT",
  /** Order issues by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order issues by comment count */
  Comments = "COMMENTS"
}

/** Used for return value of Repository.issueOrPullRequest. */
export type GitHubIssueOrPullRequest = GitHubIssue | GitHubPullRequest;

/** The possible PubSub channels for an issue. */
export enum GitHubIssuePubSubTopic {
  /** The channel ID for observing issue updates. */
  Updated = "UPDATED",
  /** The channel ID for marking an issue as read. */
  Markasread = "MARKASREAD",
  /** The channel ID for updating items on the issue timeline. */
  Timeline = "TIMELINE",
  /** The channel ID for observing issue state updates. */
  State = "STATE"
}

/** The possible states of an issue. */
export enum GitHubIssueState {
  /** An issue that is still open */
  Open = "OPEN",
  /** An issue that has been closed */
  Closed = "CLOSED"
}

/** The connection type for IssueTimelineItem. */
export type GitHubIssueTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubIssueTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubIssueTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An item in an issue timeline */
export type GitHubIssueTimelineItem =
  | GitHubCommit
  | GitHubIssueComment
  | GitHubCrossReferencedEvent
  | GitHubClosedEvent
  | GitHubReopenedEvent
  | GitHubSubscribedEvent
  | GitHubUnsubscribedEvent
  | GitHubReferencedEvent
  | GitHubAssignedEvent
  | GitHubUnassignedEvent
  | GitHubLabeledEvent
  | GitHubUnlabeledEvent
  | GitHubUserBlockedEvent
  | GitHubMilestonedEvent
  | GitHubDemilestonedEvent
  | GitHubRenamedTitleEvent
  | GitHubLockedEvent
  | GitHubUnlockedEvent
  | GitHubTransferredEvent;

/** An edge in a connection. */
export type GitHubIssueTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubIssueTimelineItem>;
};

/** An item in an issue timeline */
export type GitHubIssueTimelineItems =
  | GitHubIssueComment
  | GitHubCrossReferencedEvent
  | GitHubAddedToProjectEvent
  | GitHubAssignedEvent
  | GitHubClosedEvent
  | GitHubCommentDeletedEvent
  | GitHubConvertedNoteToIssueEvent
  | GitHubDemilestonedEvent
  | GitHubLabeledEvent
  | GitHubLockedEvent
  | GitHubMentionedEvent
  | GitHubMilestonedEvent
  | GitHubMovedColumnsInProjectEvent
  | GitHubPinnedEvent
  | GitHubReferencedEvent
  | GitHubRemovedFromProjectEvent
  | GitHubRenamedTitleEvent
  | GitHubReopenedEvent
  | GitHubSubscribedEvent
  | GitHubTransferredEvent
  | GitHubUnassignedEvent
  | GitHubUnlabeledEvent
  | GitHubUnlockedEvent
  | GitHubUserBlockedEvent
  | GitHubUnpinnedEvent
  | GitHubUnsubscribedEvent;

/** The connection type for IssueTimelineItems. */
export type GitHubIssueTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubIssueTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubIssueTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"];
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** An edge in a connection. */
export type GitHubIssueTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubIssueTimelineItems>;
};

/** The possible item types found in a timeline. */
export enum GitHubIssueTimelineItemsItemType {
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}

/** Represents a user signing up for a GitHub account. */
export type GitHubJoinedGitHubContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHubLabel = GitHubNode & {
  /** Identifies the label color. */
  color: Scalars["String"];
  /** Identifies the date and time when the label was created. */
  createdAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** A brief description of this label. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Indicates whether or not this is a default label. */
  isDefault: Scalars["Boolean"];
  /** A list of issues associated with this label. */
  issues: GitHubIssueConnection;
  /** Identifies the label name. */
  name: Scalars["String"];
  /** A list of pull requests associated with this label. */
  pullRequests: GitHubPullRequestConnection;
  /** The repository associated with this label. */
  repository: GitHubRepository;
  /** The HTTP path for this label. */
  resourcePath: Scalars["GitHubURI"];
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** The HTTP URL for this label. */
  url: Scalars["GitHubURI"];
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHubLabelIssuesArgs = {
  orderBy?: Maybe<GitHubIssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHubIssueState>>;
  filterBy?: Maybe<GitHubIssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHubLabelPullRequestsArgs = {
  states?: Maybe<Array<GitHubPullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubIssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An object that can have labels assigned to it. */
export type GitHubLabelable = {
  /** A list of labels associated with the object. */
  labels?: Maybe<GitHubLabelConnection>;
};

/** An object that can have labels assigned to it. */
export type GitHubLabelableLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Label. */
export type GitHubLabelConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubLabelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubLabel>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a 'labeled' event on a given issue or pull request. */
export type GitHubLabeledEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the label associated with the 'labeled' event. */
  label: GitHubLabel;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHubLabelable;
};

/** An edge in a connection. */
export type GitHubLabelEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubLabel>;
};

/** Represents a given language found in repositories. */
export type GitHubLanguage = GitHubNode & {
  /** The color defined for the current language. */
  color?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The name of the current language. */
  name: Scalars["String"];
};

/** A list of languages associated with the parent. */
export type GitHubLanguageConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubLanguageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubLanguage>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** The total size in bytes of files written in that language. */
  totalSize: Scalars["Int"];
};

/** Represents the language of a repository. */
export type GitHubLanguageEdge = {
  cursor: Scalars["String"];
  node: GitHubLanguage;
  /** The number of bytes of code written in the language. */
  size: Scalars["Int"];
};

/** Ordering options for language connections. */
export type GitHubLanguageOrder = {
  /** The field to order languages by. */
  field: GitHubLanguageOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which language connections can be ordered. */
export enum GitHubLanguageOrderField {
  /** Order languages by the size of all files containing the language */
  Size = "SIZE"
}

/** A repository's open source license */
export type GitHubLicense = GitHubNode & {
  /** The full text of the license */
  body: Scalars["String"];
  /** The conditions set by the license */
  conditions: Array<Maybe<GitHubLicenseRule>>;
  /** A human-readable description of the license */
  description?: Maybe<Scalars["String"]>;
  /** Whether the license should be featured */
  featured: Scalars["Boolean"];
  /** Whether the license should be displayed in license pickers */
  hidden: Scalars["Boolean"];
  id: Scalars["ID"];
  /** Instructions on how to implement the license */
  implementation?: Maybe<Scalars["String"]>;
  /** The lowercased SPDX ID of the license */
  key: Scalars["String"];
  /** The limitations set by the license */
  limitations: Array<Maybe<GitHubLicenseRule>>;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: Scalars["String"];
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: Maybe<Scalars["String"]>;
  /** The permissions set by the license */
  permissions: Array<Maybe<GitHubLicenseRule>>;
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: Scalars["Boolean"];
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: Maybe<Scalars["String"]>;
  /** URL to the license on <https://choosealicense.com> */
  url?: Maybe<Scalars["GitHubURI"]>;
};

/** Describes a License's conditions, permissions, and limitations */
export type GitHubLicenseRule = {
  /** A description of the rule */
  description: Scalars["String"];
  /** The machine-readable rule key */
  key: Scalars["String"];
  /** The human-readable rule label */
  label: Scalars["String"];
};

/** An object that can be locked. */
export type GitHubLockable = {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<GitHubLockReason>;
  /** `true` if the object is locked */
  locked: Scalars["Boolean"];
};

/** Represents a 'locked' event on a given issue or pull request. */
export type GitHubLockedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Reason that the conversation was locked (optional). */
  lockReason?: Maybe<GitHubLockReason>;
  /** Object that was locked. */
  lockable: GitHubLockable;
};

/** Autogenerated input type of LockLockable */
export type GitHubLockLockableInput = {
  /** ID of the issue or pull request to be locked. */
  lockableId: Scalars["ID"];
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<GitHubLockReason>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of LockLockable */
export type GitHubLockLockablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was locked. */
  lockedRecord?: Maybe<GitHubLockable>;
};

/** The possible reasons that an issue or pull request was locked. */
export enum GitHubLockReason {
  /** The issue or pull request was locked because the conversation was off-topic. */
  OffTopic = "OFF_TOPIC",
  /** The issue or pull request was locked because the conversation was too heated. */
  TooHeated = "TOO_HEATED",
  /** The issue or pull request was locked because the conversation was resolved. */
  Resolved = "RESOLVED",
  /** The issue or pull request was locked because the conversation was spam. */
  Spam = "SPAM"
}

/** A public description of a Marketplace category. */
export type GitHubMarketplaceCategory = GitHubNode & {
  /** The category's description. */
  description?: Maybe<Scalars["String"]>;
  /** The technical description of how apps listed in this category work with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The category's name. */
  name: Scalars["String"];
  /** How many Marketplace listings have this as their primary category. */
  primaryListingCount: Scalars["Int"];
  /** The HTTP path for this Marketplace category. */
  resourcePath: Scalars["GitHubURI"];
  /** How many Marketplace listings have this as their secondary category. */
  secondaryListingCount: Scalars["Int"];
  /** The short name of the category used in its URL. */
  slug: Scalars["String"];
  /** The HTTP URL for this Marketplace category. */
  url: Scalars["GitHubURI"];
};

/** A listing in the GitHub integration marketplace. */
export type GitHubMarketplaceListing = GitHubNode & {
  /** The GitHub App this listing represents. */
  app?: Maybe<GitHubApp>;
  /** URL to the listing owner's company site. */
  companyUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  configurationResourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  configurationUrl: Scalars["GitHubURI"];
  /** URL to the listing's documentation. */
  documentationUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The listing's detailed description. */
  extendedDescription?: Maybe<Scalars["String"]>;
  /** The listing's detailed description rendered to HTML. */
  extendedDescriptionHTML: Scalars["GitHubHTML"];
  /** The listing's introductory description. */
  fullDescription: Scalars["String"];
  /** The listing's introductory description rendered to HTML. */
  fullDescriptionHTML: Scalars["GitHubHTML"];
  /** Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace. */
  hasApprovalBeenRequested: Scalars["Boolean"];
  /** Does this listing have any plans with a free trial? */
  hasPublishedFreeTrialPlans: Scalars["Boolean"];
  /** Does this listing have a terms of service link? */
  hasTermsOfService: Scalars["Boolean"];
  /** A technical description of how this app works with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>;
  /** The listing's technical description rendered to HTML. */
  howItWorksHTML: Scalars["GitHubHTML"];
  id: Scalars["ID"];
  /** URL to install the product to the viewer's account or organization. */
  installationUrl?: Maybe<Scalars["GitHubURI"]>;
  /** Whether this listing's app has been installed for the current viewer */
  installedForViewer: Scalars["Boolean"];
  /** Whether this listing has been approved for display in the Marketplace. */
  isApproved: Scalars["Boolean"];
  /** Whether this listing has been removed from the Marketplace. */
  isArchived: Scalars["Boolean"];
  /** Whether this listing has been removed from the Marketplace. */
  isDelisted: Scalars["Boolean"];
  /** Whether this listing is still an editable draft that has not been submitted
   * for review and is not publicly visible in the Marketplace.
   */
  isDraft: Scalars["Boolean"];
  /** Whether the product this listing represents is available as part of a paid plan. */
  isPaid: Scalars["Boolean"];
  /** Whether this listing has been approved for display in the Marketplace. */
  isPublic: Scalars["Boolean"];
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  isRejected: Scalars["Boolean"];
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  isUnverified: Scalars["Boolean"];
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  isUnverifiedPending: Scalars["Boolean"];
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromDraft: Scalars["Boolean"];
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromUnverified: Scalars["Boolean"];
  /** Whether this listing has been approved for verified display in the Marketplace. */
  isVerified: Scalars["Boolean"];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"];
  /** URL for the listing's logo image. */
  logoUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The listing's full name. */
  name: Scalars["String"];
  /** The listing's very short description without a trailing period or ampersands. */
  normalizedShortDescription: Scalars["String"];
  /** URL to the listing's detailed pricing. */
  pricingUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The category that best describes the listing. */
  primaryCategory: GitHubMarketplaceCategory;
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  privacyPolicyUrl: Scalars["GitHubURI"];
  /** The HTTP path for the Marketplace listing. */
  resourcePath: Scalars["GitHubURI"];
  /** The URLs for the listing's screenshots. */
  screenshotUrls: Array<Maybe<Scalars["String"]>>;
  /** An alternate category that describes the listing. */
  secondaryCategory?: Maybe<GitHubMarketplaceCategory>;
  /** The listing's very short description. */
  shortDescription: Scalars["String"];
  /** The short name of the listing used in its URL. */
  slug: Scalars["String"];
  /** URL to the listing's status page. */
  statusUrl?: Maybe<Scalars["GitHubURI"]>;
  /** An email address for support for this listing's app. */
  supportEmail?: Maybe<Scalars["String"]>;
  /** Either a URL or an email address for support for this listing's app, may
   * return an empty string for listings that do not require a support URL.
   */
  supportUrl: Scalars["GitHubURI"];
  /** URL to the listing's terms of service. */
  termsOfServiceUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The HTTP URL for the Marketplace listing. */
  url: Scalars["GitHubURI"];
  /** Can the current viewer add plans for this Marketplace listing. */
  viewerCanAddPlans: Scalars["Boolean"];
  /** Can the current viewer approve this Marketplace listing. */
  viewerCanApprove: Scalars["Boolean"];
  /** Can the current viewer delist this Marketplace listing. */
  viewerCanDelist: Scalars["Boolean"];
  /** Can the current viewer edit this Marketplace listing. */
  viewerCanEdit: Scalars["Boolean"];
  /** Can the current viewer edit the primary and secondary category of this
   * Marketplace listing.
   */
  viewerCanEditCategories: Scalars["Boolean"];
  /** Can the current viewer edit the plans for this Marketplace listing. */
  viewerCanEditPlans: Scalars["Boolean"];
  /** Can the current viewer return this Marketplace listing to draft state
   * so it becomes editable again.
   */
  viewerCanRedraft: Scalars["Boolean"];
  /** Can the current viewer reject this Marketplace listing by returning it to
   * an editable draft state or rejecting it entirely.
   */
  viewerCanReject: Scalars["Boolean"];
  /** Can the current viewer request this listing be reviewed for display in
   * the Marketplace as verified.
   */
  viewerCanRequestApproval: Scalars["Boolean"];
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  viewerHasPurchased: Scalars["Boolean"];
  /** Indicates if the current user has purchased a subscription to this Marketplace listing
   * for all of the organizations the user owns.
   */
  viewerHasPurchasedForAllOrganizations: Scalars["Boolean"];
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  viewerIsListingAdmin: Scalars["Boolean"];
};

/** A listing in the GitHub integration marketplace. */
export type GitHubMarketplaceListingLogoUrlArgs = {
  size: Scalars["Int"];
};

/** Look up Marketplace Listings */
export type GitHubMarketplaceListingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubMarketplaceListingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubMarketplaceListing>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubMarketplaceListingEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubMarketplaceListing>;
};

/** Entities that have members who can set status messages. */
export type GitHubMemberStatusable = {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: GitHubUserStatusConnection;
};

/** Entities that have members who can set status messages. */
export type GitHubMemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubUserStatusOrder>;
};

/** Represents a 'mentioned' event on a given issue or pull request. */
export type GitHubMentionedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Whether or not a PullRequest can be merged. */
export enum GitHubMergeableState {
  /** The pull request can be merged. */
  Mergeable = "MERGEABLE",
  /** The pull request cannot be merged due to merge conflicts. */
  Conflicting = "CONFLICTING",
  /** The mergeability of the pull request is still being calculated. */
  Unknown = "UNKNOWN"
}

/** Represents a 'merged' event on a given pull request. */
export type GitHubMergedEvent = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHubActor>;
    /** Identifies the commit associated with the `merge` event. */
    commit?: Maybe<GitHubCommit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    id: Scalars["ID"];
    /** Identifies the Ref associated with the `merge` event. */
    mergeRef?: Maybe<GitHubRef>;
    /** Identifies the name of the Ref associated with the `merge` event. */
    mergeRefName: Scalars["String"];
    /** PullRequest referenced by event. */
    pullRequest: GitHubPullRequest;
    /** The HTTP path for this merged event. */
    resourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this merged event. */
    url: Scalars["GitHubURI"];
  };

/** Autogenerated input type of MergePullRequest */
export type GitHubMergePullRequestInput = {
  /** ID of the pull request to be merged. */
  pullRequestId: Scalars["ID"];
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<Scalars["String"]>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<Scalars["String"]>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<Scalars["GitHubGitObjectID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MergePullRequest */
export type GitHubMergePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was merged. */
  pullRequest?: Maybe<GitHubPullRequest>;
};

/** Represents a Milestone object on a given repository. */
export type GitHubMilestone = GitHubNode &
  GitHubClosable &
  GitHubUniformResourceLocatable & {
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the actor who created the milestone. */
    creator?: Maybe<GitHubActor>;
    /** Identifies the description of the milestone. */
    description?: Maybe<Scalars["String"]>;
    /** Identifies the due date of the milestone. */
    dueOn?: Maybe<Scalars["GitHubDateTime"]>;
    id: Scalars["ID"];
    /** A list of issues associated with the milestone. */
    issues: GitHubIssueConnection;
    /** Identifies the number of the milestone. */
    number: Scalars["Int"];
    /** A list of pull requests associated with the milestone. */
    pullRequests: GitHubPullRequestConnection;
    /** The repository associated with this milestone. */
    repository: GitHubRepository;
    /** The HTTP path for this milestone */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the state of the milestone. */
    state: GitHubMilestoneState;
    /** Identifies the title of the milestone. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this milestone */
    url: Scalars["GitHubURI"];
  };

/** Represents a Milestone object on a given repository. */
export type GitHubMilestoneIssuesArgs = {
  orderBy?: Maybe<GitHubIssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHubIssueState>>;
  filterBy?: Maybe<GitHubIssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Milestone object on a given repository. */
export type GitHubMilestonePullRequestsArgs = {
  states?: Maybe<Array<GitHubPullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubIssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Milestone. */
export type GitHubMilestoneConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubMilestoneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubMilestone>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a 'milestoned' event on a given issue or pull request. */
export type GitHubMilestonedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the milestone title associated with the 'milestoned' event. */
  milestoneTitle: Scalars["String"];
  /** Object referenced by event. */
  subject: GitHubMilestoneItem;
};

/** An edge in a connection. */
export type GitHubMilestoneEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubMilestone>;
};

/** Types that can be inside a Milestone. */
export type GitHubMilestoneItem = GitHubIssue | GitHubPullRequest;

/** Ordering options for milestone connections. */
export type GitHubMilestoneOrder = {
  /** The field to order milestones by. */
  field: GitHubMilestoneOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which milestone connections can be ordered. */
export enum GitHubMilestoneOrderField {
  /** Order milestones by when they are due. */
  DueDate = "DUE_DATE",
  /** Order milestones by when they were created. */
  CreatedAt = "CREATED_AT",
  /** Order milestones by when they were last updated. */
  UpdatedAt = "UPDATED_AT",
  /** Order milestones by their number. */
  Number = "NUMBER"
}

/** The possible states of a milestone. */
export enum GitHubMilestoneState {
  /** A milestone that is still open. */
  Open = "OPEN",
  /** A milestone that has been closed. */
  Closed = "CLOSED"
}

/** Autogenerated input type of MinimizeComment */
export type GitHubMinimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The classification of comment */
  classifier: GitHubReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export type GitHubMovedColumnsInProjectEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of MoveProjectCard */
export type GitHubMoveProjectCardInput = {
  /** The id of the card to move. */
  cardId: Scalars["ID"];
  /** The id of the column to move it into. */
  columnId: Scalars["ID"];
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MoveProjectCard */
export type GitHubMoveProjectCardPayload = {
  /** The new edge of the moved card. */
  cardEdge?: Maybe<GitHubProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of MoveProjectColumn */
export type GitHubMoveProjectColumnInput = {
  /** The id of the column to move. */
  columnId: Scalars["ID"];
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MoveProjectColumn */
export type GitHubMoveProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new edge of the moved column. */
  columnEdge?: Maybe<GitHubProjectColumnEdge>;
};

/** An object with an ID. */
export type GitHubNode = {
  /** ID of the object. */
  id: Scalars["ID"];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum GitHubOrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = "ASC",
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = "DESC"
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganization = GitHubNode &
  GitHubActor &
  GitHubRegistryPackageOwner &
  GitHubRegistryPackageSearch &
  GitHubProjectOwner &
  GitHubRepositoryOwner &
  GitHubUniformResourceLocatable &
  GitHubMemberStatusable &
  GitHubProfileOwner & {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"];
    /** A URL pointing to the organization's public avatar. */
    avatarUrl: Scalars["GitHubURI"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The organization's public profile description. */
    description?: Maybe<Scalars["String"]>;
    /** The organization's public email. */
    email?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Whether the organization has verified its profile email and website. */
    isVerified: Scalars["Boolean"];
    /** Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: GitHubProfileItemShowcase;
    /** The organization's public profile location. */
    location?: Maybe<Scalars["String"]>;
    /** The organization's login name. */
    login: Scalars["String"];
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: GitHubUserStatusConnection;
    /** A list of users who are members of this organization. */
    membersWithRole: GitHubOrganizationMemberConnection;
    /** The organization's public profile name. */
    name?: Maybe<Scalars["String"]>;
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["GitHubURI"];
    /** The billing email for the organization. */
    organizationBillingEmail?: Maybe<Scalars["String"]>;
    /** A list of users who have been invited to join this organization. */
    pendingMembers: GitHubUserConnection;
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: GitHubPinnableItemConnection;
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: GitHubPinnableItemConnection;
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"];
    /** A list of repositories this user has pinned to their profile */
    pinnedRepositories: GitHubRepositoryConnection;
    /** Find project by number. */
    project?: Maybe<GitHubProject>;
    /** A list of projects under the owner. */
    projects: GitHubProjectConnection;
    /** The HTTP path listing organization's projects */
    projectsResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL listing organization's projects */
    projectsUrl: Scalars["GitHubURI"];
    /** A list of repositories that the user owns. */
    repositories: GitHubRepositoryConnection;
    /** Find Repository. */
    repository?: Maybe<GitHubRepository>;
    /** When true the organization requires all members, billing managers, and outside
     * collaborators to enable two-factor authentication.
     */
    requiresTwoFactorAuthentication?: Maybe<Scalars["Boolean"]>;
    /** The HTTP path for this organization. */
    resourcePath: Scalars["GitHubURI"];
    /** The Organization's SAML identity providers */
    samlIdentityProvider?: Maybe<GitHubOrganizationIdentityProvider>;
    /** Find an organization's team by its slug. */
    team?: Maybe<GitHubTeam>;
    /** A list of teams in this organization. */
    teams: GitHubTeamConnection;
    /** The HTTP path listing organization's teams */
    teamsResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL listing organization's teams */
    teamsUrl: Scalars["GitHubURI"];
    /** The HTTP URL for this organization. */
    url: Scalars["GitHubURI"];
    /** Organization is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Viewer can create repositories on this organization */
    viewerCanCreateRepositories: Scalars["Boolean"];
    /** Viewer can create teams on this organization. */
    viewerCanCreateTeams: Scalars["Boolean"];
    /** Viewer is an active member of this organization. */
    viewerIsAMember: Scalars["Boolean"];
    /** The organization's public profile URL. */
    websiteUrl?: Maybe<Scalars["GitHubURI"]>;
  };

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationAnyPinnableItemsArgs = {
  type?: Maybe<GitHubPinnableItemType>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubUserStatusOrder>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationPendingMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationPinnableItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationPinnedItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationProjectArgs = {
  number: Scalars["Int"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationProjectsArgs = {
  orderBy?: Maybe<GitHubProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHubProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationRepositoryArgs = {
  name: Scalars["String"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationTeamArgs = {
  slug: Scalars["String"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHubOrganizationTeamsArgs = {
  privacy?: Maybe<GitHubTeamPrivacy>;
  role?: Maybe<GitHubTeamRole>;
  query?: Maybe<Scalars["String"]>;
  userLogins?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHubTeamOrder>;
  ldapMapped?: Maybe<Scalars["Boolean"]>;
  rootTeamsOnly: Scalars["Boolean"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Organization. */
export type GitHubOrganizationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubOrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubOrganization>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubOrganizationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubOrganization>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHubOrganizationIdentityProvider = GitHubNode & {
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod?: Maybe<Scalars["GitHubURI"]>;
  /** External Identities provisioned by this Identity Provider */
  externalIdentities: GitHubExternalIdentityConnection;
  id: Scalars["ID"];
  /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars["GitHubX509Certificate"]>;
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: Maybe<Scalars["String"]>;
  /** Organization this Identity Provider belongs to */
  organization?: Maybe<GitHubOrganization>;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod?: Maybe<Scalars["GitHubURI"]>;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars["GitHubURI"]>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHubOrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Invitation for a user to an organization. */
export type GitHubOrganizationInvitation = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The email address of the user invited to the organization. */
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The type of invitation that was sent (e.g. email, user). */
  invitationType: GitHubOrganizationInvitationType;
  /** The user who was invited to the organization. */
  invitee?: Maybe<GitHubUser>;
  /** The user who created the invitation. */
  inviter: GitHubUser;
  /** The organization the invite is for */
  organization: GitHubOrganization;
  /** The user's pending role in the organization (e.g. member, owner). */
  role: GitHubOrganizationInvitationRole;
};

/** The connection type for OrganizationInvitation. */
export type GitHubOrganizationInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubOrganizationInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubOrganizationInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubOrganizationInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubOrganizationInvitation>;
};

/** The possible organization invitation roles. */
export enum GitHubOrganizationInvitationRole {
  /** The user is invited to be a direct member of the organization. */
  DirectMember = "DIRECT_MEMBER",
  /** The user is invited to be an admin of the organization. */
  Admin = "ADMIN",
  /** The user is invited to be a billing manager of the organization. */
  BillingManager = "BILLING_MANAGER",
  /** The user's previous role will be reinstated. */
  Reinstate = "REINSTATE"
}

/** The possible organization invitation types. */
export enum GitHubOrganizationInvitationType {
  /** The invitation was to an existing user. */
  User = "USER",
  /** The invitation was to an email address. */
  Email = "EMAIL"
}

/** The connection type for User. */
export type GitHubOrganizationMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubOrganizationMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user within an organization. */
export type GitHubOrganizationMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  hasTwoFactorEnabled?: Maybe<Scalars["Boolean"]>;
  /** The item at the end of the edge. */
  node?: Maybe<GitHubUser>;
  /** The role this user has in the organization. */
  role?: Maybe<GitHubOrganizationMemberRole>;
};

/** The possible roles within an organization for its members. */
export enum GitHubOrganizationMemberRole {
  /** The user is a member of the organization. */
  Member = "MEMBER",
  /** The user is an administrator of the organization. */
  Admin = "ADMIN"
}

/** Information about pagination in a connection. */
export type GitHubPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Types that can grant permissions on a repository to a user */
export type GitHubPermissionGranter =
  | GitHubOrganization
  | GitHubRepository
  | GitHubTeam;

/** A level of permission and source for a user's access to a repository. */
export type GitHubPermissionSource = {
  /** The organization the repository belongs to. */
  organization: GitHubOrganization;
  /** The level of access this source has granted to the user. */
  permission: GitHubDefaultRepositoryPermissionField;
  /** The source of this permission. */
  source: GitHubPermissionGranter;
};

/** Autogenerated input type of PinIssue */
export type GitHubPinIssueInput = {
  /** The ID of the issue to be pinned */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Types that can be pinned to a profile page. */
export type GitHubPinnableItem = GitHubGist | GitHubRepository;

/** The connection type for PinnableItem. */
export type GitHubPinnableItemConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPinnableItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPinnableItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPinnableItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPinnableItem>;
};

/** Represents items that can be pinned to a profile page. */
export enum GitHubPinnableItemType {
  /** A repository. */
  Repository = "REPOSITORY",
  /** A gist. */
  Gist = "GIST"
}

/** Represents a 'pinned' event on a given issue or pull request. */
export type GitHubPinnedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHubIssue;
};

/** A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHubProfileItemShowcase = {
  /** Whether or not the owner has pinned any repositories or gists. */
  hasPinnedItems: Scalars["Boolean"];
  /** The repositories and gists in the showcase. If the profile owner has any
   * pinned items, those will be returned. Otherwise, the profile owner's popular
   * repositories will be returned.
   */
  items: GitHubPinnableItemConnection;
};

/** A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHubProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHubProfileOwner = {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars["Boolean"];
  /** The public profile email. */
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: GitHubProfileItemShowcase;
  /** The public profile location. */
  location?: Maybe<Scalars["String"]>;
  /** The username used to login. */
  login: Scalars["String"];
  /** The public profile name. */
  name?: Maybe<Scalars["String"]>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: GitHubPinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: GitHubPinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars["Int"];
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars["Boolean"];
  /** The public profile website URL. */
  websiteUrl?: Maybe<Scalars["GitHubURI"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHubProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<GitHubPinnableItemType>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHubProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHubProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHubProject = GitHubNode &
  GitHubClosable &
  GitHubUpdatable & {
    /** The project's description body. */
    body?: Maybe<Scalars["String"]>;
    /** The projects description body rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** List of columns in the project */
    columns: GitHubProjectColumnConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** The actor who originally created the project. */
    creator?: Maybe<GitHubActor>;
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    /** The project's name. */
    name: Scalars["String"];
    /** The project's number. */
    number: Scalars["Int"];
    /** The project's owner. Currently limited to repositories, organizations, and users. */
    owner: GitHubProjectOwner;
    /** List of pending cards in this project */
    pendingCards: GitHubProjectCardConnection;
    /** The HTTP path for this project */
    resourcePath: Scalars["GitHubURI"];
    /** Whether the project is open or closed. */
    state: GitHubProjectState;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this project */
    url: Scalars["GitHubURI"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
  };

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHubProjectColumnsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHubProjectPendingCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHubProjectCardArchivedState>>>;
};

/** A card in a project. */
export type GitHubProjectCard = GitHubNode & {
  /** The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  column?: Maybe<GitHubProjectColumn>;
  /** The card content item */
  content?: Maybe<GitHubProjectCardItem>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The actor who created this card */
  creator?: Maybe<GitHubActor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Whether the card is archived */
  isArchived: Scalars["Boolean"];
  /** The card note */
  note?: Maybe<Scalars["String"]>;
  /** The project that contains this card. */
  project: GitHubProject;
  /** The HTTP path for this card */
  resourcePath: Scalars["GitHubURI"];
  /** The state of ProjectCard */
  state?: Maybe<GitHubProjectCardState>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The HTTP URL for this card */
  url: Scalars["GitHubURI"];
};

/** The possible archived states of a project card. */
export enum GitHubProjectCardArchivedState {
  /** A project card that is archived */
  Archived = "ARCHIVED",
  /** A project card that is not archived */
  NotArchived = "NOT_ARCHIVED"
}

/** The connection type for ProjectCard. */
export type GitHubProjectCardConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubProjectCardEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubProjectCard>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubProjectCardEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubProjectCard>;
};

/** An issue or PR and its owning repository to be used in a project card. */
export type GitHubProjectCardImport = {
  /** Repository name with owner (owner/repository). */
  repository: Scalars["String"];
  /** The issue or pull request number. */
  number: Scalars["Int"];
};

/** Types that can be inside Project Cards. */
export type GitHubProjectCardItem = GitHubIssue | GitHubPullRequest;

/** Various content states of a ProjectCard */
export enum GitHubProjectCardState {
  /** The card has content only. */
  ContentOnly = "CONTENT_ONLY",
  /** The card has a note only. */
  NoteOnly = "NOTE_ONLY",
  /** The card is redacted. */
  Redacted = "REDACTED"
}

/** A column inside a project. */
export type GitHubProjectColumn = GitHubNode & {
  /** List of cards in the column */
  cards: GitHubProjectCardConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** The project column's name. */
  name: Scalars["String"];
  /** The project that contains this column. */
  project: GitHubProject;
  /** The semantic purpose of the column */
  purpose?: Maybe<GitHubProjectColumnPurpose>;
  /** The HTTP path for this project column */
  resourcePath: Scalars["GitHubURI"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The HTTP URL for this project column */
  url: Scalars["GitHubURI"];
};

/** A column inside a project. */
export type GitHubProjectColumnCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHubProjectCardArchivedState>>>;
};

/** The connection type for ProjectColumn. */
export type GitHubProjectColumnConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubProjectColumnEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubProjectColumn>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubProjectColumnEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubProjectColumn>;
};

/** A project column and a list of its issues and PRs. */
export type GitHubProjectColumnImport = {
  /** The name of the column. */
  columnName: Scalars["String"];
  /** The position of the column, starting from 0. */
  position: Scalars["Int"];
  /** A list of issues and pull requests in the column. */
  issues?: Maybe<Array<GitHubProjectCardImport>>;
};

/** The semantic purpose of the column - todo, in progress, or done. */
export enum GitHubProjectColumnPurpose {
  /** The column contains cards still to be worked on */
  Todo = "TODO",
  /** The column contains cards which are currently being worked on */
  InProgress = "IN_PROGRESS",
  /** The column contains cards which are complete */
  Done = "DONE"
}

/** A list of projects associated with the owner. */
export type GitHubProjectConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubProject>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubProjectEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubProject>;
};

/** Ways in which lists of projects can be ordered upon return. */
export type GitHubProjectOrder = {
  /** The field in which to order projects by. */
  field: GitHubProjectOrderField;
  /** The direction in which to order projects by the specified field. */
  direction: GitHubOrderDirection;
};

/** Properties by which project connections can be ordered. */
export enum GitHubProjectOrderField {
  /** Order projects by creation time */
  CreatedAt = "CREATED_AT",
  /** Order projects by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order projects by name */
  Name = "NAME"
}

/** Represents an owner of a Project. */
export type GitHubProjectOwner = {
  id: Scalars["ID"];
  /** Find project by number. */
  project?: Maybe<GitHubProject>;
  /** A list of projects under the owner. */
  projects: GitHubProjectConnection;
  /** The HTTP path listing owners projects */
  projectsResourcePath: Scalars["GitHubURI"];
  /** The HTTP URL listing owners projects */
  projectsUrl: Scalars["GitHubURI"];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars["Boolean"];
};

/** Represents an owner of a Project. */
export type GitHubProjectOwnerProjectArgs = {
  number: Scalars["Int"];
};

/** Represents an owner of a Project. */
export type GitHubProjectOwnerProjectsArgs = {
  orderBy?: Maybe<GitHubProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHubProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** State of the project; either 'open' or 'closed' */
export enum GitHubProjectState {
  /** The project is open. */
  Open = "OPEN",
  /** The project is closed. */
  Closed = "CLOSED"
}

/** A user's public key. */
export type GitHubPublicKey = GitHubNode & {
  /** The last time this authorization was used to perform an action */
  accessedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The fingerprint for this PublicKey */
  fingerprint?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Whether this PublicKey is read-only or not */
  isReadOnly: Scalars["Boolean"];
  /** The public key string */
  key: Scalars["String"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** The connection type for PublicKey. */
export type GitHubPublicKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPublicKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPublicKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPublicKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPublicKey>;
};

/** A repository pull request. */
export type GitHubPullRequest = GitHubNode &
  GitHubAssignable &
  GitHubClosable &
  GitHubComment &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubLabelable &
  GitHubLockable &
  GitHubReactable &
  GitHubRepositoryNode &
  GitHubSubscribable &
  GitHubUniformResourceLocatable & {
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<GitHubLockReason>;
    /** The number of additions in this pull request. */
    additions: Scalars["Int"];
    /** A list of Users assigned to this object. */
    assignees: GitHubUserConnection;
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** Identifies the base Ref associated with the pull request. */
    baseRef?: Maybe<GitHubRef>;
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    baseRefName: Scalars["String"];
    /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
    baseRefOid: Scalars["GitHubGitObjectID"];
    /** The repository associated with this pull request's base Ref. */
    baseRepository?: Maybe<GitHubRepository>;
    /** The body as Markdown. */
    body: Scalars["String"];
    /** The body rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** The number of changed files in this pull request. */
    changedFiles: Scalars["Int"];
    /** `true` if the pull request is closed */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of comments associated with the pull request. */
    comments: GitHubIssueCommentConnection;
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    commits: GitHubPullRequestCommitConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The number of deletions in this pull request. */
    deletions: Scalars["Int"];
    /** The actor who edited this pull request's body. */
    editor?: Maybe<GitHubActor>;
    /** Lists the files changed within this pull request. */
    files?: Maybe<GitHubPullRequestChangedFileConnection>;
    /** Identifies the head Ref associated with the pull request. */
    headRef?: Maybe<GitHubRef>;
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    headRefName: Scalars["String"];
    /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
    headRefOid: Scalars["GitHubGitObjectID"];
    /** The repository associated with this pull request's head Ref. */
    headRepository?: Maybe<GitHubRepository>;
    /** The owner of the repository associated with this pull request's head Ref. */
    headRepositoryOwner?: Maybe<GitHubRepositoryOwner>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** The head and base repositories are different. */
    isCrossRepository: Scalars["Boolean"];
    /** A list of labels associated with the object. */
    labels?: Maybe<GitHubLabelConnection>;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** `true` if the pull request is locked */
    locked: Scalars["Boolean"];
    /** Indicates whether maintainers can modify the pull request. */
    maintainerCanModify: Scalars["Boolean"];
    /** The commit that was created when this pull request was merged. */
    mergeCommit?: Maybe<GitHubCommit>;
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    mergeable: GitHubMergeableState;
    /** Whether or not the pull request was merged. */
    merged: Scalars["Boolean"];
    /** The date and time that the pull request was merged. */
    mergedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** The actor who merged the pull request. */
    mergedBy?: Maybe<GitHubActor>;
    /** Identifies the milestone associated with the pull request. */
    milestone?: Maybe<GitHubMilestone>;
    /** Identifies the pull request number. */
    number: Scalars["Int"];
    /** A list of Users that are participating in the Pull Request conversation. */
    participants: GitHubUserConnection;
    /** The permalink to the pull request. */
    permalink: Scalars["GitHubURI"];
    /** The commit that GitHub automatically generated to test if this pull request
     * could be merged. This field will not return a value if the pull request is
     * merged, or if the test merge commit is still being generated. See the
     * `mergeable` field for more details on the mergeability of the pull request.
     */
    potentialMergeCommit?: Maybe<GitHubCommit>;
    /** List of project cards associated with this pull request. */
    projectCards: GitHubProjectCardConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["GitHubURI"];
    /** The HTTP path for reverting this pull request. */
    revertResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for reverting this pull request. */
    revertUrl: Scalars["GitHubURI"];
    /** A list of review requests associated with the pull request. */
    reviewRequests?: Maybe<GitHubReviewRequestConnection>;
    /** The list of all review threads for this pull request. */
    reviewThreads: GitHubPullRequestReviewThreadConnection;
    /** A list of reviews associated with the pull request. */
    reviews?: Maybe<GitHubPullRequestReviewConnection>;
    /** Identifies the state of the pull request. */
    state: GitHubPullRequestState;
    /** A list of reviewer suggestions based on commit history and past review comments. */
    suggestedReviewers: Array<Maybe<GitHubSuggestedReviewer>>;
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timeline: GitHubPullRequestTimelineConnection;
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timelineItems: GitHubPullRequestTimelineItemsConnection;
    /** Identifies the pull request title. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this pull request. */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Whether or not the viewer can apply suggestion. */
    viewerCanApplySuggestion: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHubSubscriptionState>;
  };

/** A repository pull request. */
export type GitHubPullRequestAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestCommitsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestFilesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestParticipantsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHubProjectCardArchivedState>>>;
};

/** A repository pull request. */
export type GitHubPullRequestReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** A repository pull request. */
export type GitHubPullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestReviewsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  states?: Maybe<Array<GitHubPullRequestReviewState>>;
  author?: Maybe<Scalars["String"]>;
};

/** A repository pull request. */
export type GitHubPullRequestTimelineArgs = {
  since?: Maybe<Scalars["GitHubDateTime"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars["GitHubDateTime"]>;
  skip?: Maybe<Scalars["Int"]>;
  itemTypes?: Maybe<Array<GitHubPullRequestTimelineItemsItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHubPullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A file changed in a pull request. */
export type GitHubPullRequestChangedFile = {
  /** The number of additions to the file. */
  additions: Scalars["Int"];
  /** The number of deletions to the file. */
  deletions: Scalars["Int"];
  /** The path of the file. */
  path: Scalars["String"];
};

/** The connection type for PullRequestChangedFile. */
export type GitHubPullRequestChangedFileConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestChangedFileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestChangedFile>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPullRequestChangedFileEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestChangedFile>;
};

/** Represents a Git commit part of a pull request. */
export type GitHubPullRequestCommit = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** The Git commit object */
    commit: GitHubCommit;
    id: Scalars["ID"];
    /** The pull request this commit belongs to */
    pullRequest: GitHubPullRequest;
    /** The HTTP path for this pull request commit */
    resourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this pull request commit */
    url: Scalars["GitHubURI"];
  };

/** Represents a commit comment thread part of a pull request. */
export type GitHubPullRequestCommitCommentThread = GitHubNode &
  GitHubRepositoryNode & {
    /** The comments that exist in this thread. */
    comments: GitHubCommitCommentConnection;
    /** The commit the comments were made on. */
    commit: GitHubCommit;
    id: Scalars["ID"];
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>;
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>;
    /** The pull request this commit comment thread belongs to */
    pullRequest: GitHubPullRequest;
    /** The repository associated with this node. */
    repository: GitHubRepository;
  };

/** Represents a commit comment thread part of a pull request. */
export type GitHubPullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for PullRequestCommit. */
export type GitHubPullRequestCommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestCommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestCommit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPullRequestCommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestCommit>;
};

/** The connection type for PullRequest. */
export type GitHubPullRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates pull requests opened by a user within one repository. */
export type GitHubPullRequestContributionsByRepository = {
  /** The pull request contributions. */
  contributions: GitHubCreatedPullRequestContributionConnection;
  /** The repository in which the pull requests were opened. */
  repository: GitHubRepository;
};

/** This aggregates pull requests opened by a user within one repository. */
export type GitHubPullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** An edge in a connection. */
export type GitHubPullRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequest>;
};

/** Ways in which lists of issues can be ordered upon return. */
export type GitHubPullRequestOrder = {
  /** The field in which to order pull requests by. */
  field: GitHubPullRequestOrderField;
  /** The direction in which to order pull requests by the specified field. */
  direction: GitHubOrderDirection;
};

/** Properties by which pull_requests connections can be ordered. */
export enum GitHubPullRequestOrderField {
  /** Order pull_requests by creation time */
  CreatedAt = "CREATED_AT",
  /** Order pull_requests by update time */
  UpdatedAt = "UPDATED_AT"
}

/** The possible PubSub channels for a pull request. */
export enum GitHubPullRequestPubSubTopic {
  /** The channel ID for observing pull request updates. */
  Updated = "UPDATED",
  /** The channel ID for marking an pull request as read. */
  Markasread = "MARKASREAD",
  /** The channel ID for observing head ref updates. */
  HeadRef = "HEAD_REF",
  /** The channel ID for updating items on the pull request timeline. */
  Timeline = "TIMELINE",
  /** The channel ID for observing pull request state updates. */
  State = "STATE"
}

/** A review object for a given pull request. */
export type GitHubPullRequestReview = GitHubNode &
  GitHubComment &
  GitHubDeletable &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubReactable &
  GitHubRepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** Identifies the pull request review body. */
    body: Scalars["String"];
    /** The body of this review rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The body of this review rendered as plain text. */
    bodyText: Scalars["String"];
    /** A list of review comments for the current pull request review. */
    comments: GitHubPullRequestReviewCommentConnection;
    /** Identifies the commit associated with this pull request review. */
    commit?: Maybe<GitHubCommit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** A list of teams that this review was made on behalf of. */
    onBehalfOf: GitHubTeamConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Identifies the pull request associated with this pull request review. */
    pullRequest: GitHubPullRequest;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path permalink for this PullRequestReview. */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the current state of the pull request review. */
    state: GitHubPullRequestReviewState;
    /** Identifies when the Pull Request Review was submitted */
    submittedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL permalink for this PullRequestReview. */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** A review object for a given pull request. */
export type GitHubPullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review object for a given pull request. */
export type GitHubPullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review object for a given pull request. */
export type GitHubPullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** A review object for a given pull request. */
export type GitHubPullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review comment associated with a given repository pull request. */
export type GitHubPullRequestReviewComment = GitHubNode &
  GitHubComment &
  GitHubDeletable &
  GitHubUpdatable &
  GitHubUpdatableComment &
  GitHubReactable &
  GitHubRepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHubActor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHubCommentAuthorAssociation;
    /** The comment body of this review comment. */
    body: Scalars["String"];
    /** The comment body of this review comment rendered to HTML. */
    bodyHTML: Scalars["GitHubHTML"];
    /** The comment body of this review comment rendered as plain text. */
    bodyText: Scalars["String"];
    /** Identifies the commit associated with the comment. */
    commit: GitHubCommit;
    /** Identifies when the comment was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The diff hunk to which the comment applies. */
    diffHunk: Scalars["String"];
    /** Identifies when the comment was created in a draft state. */
    draftedAt: Scalars["GitHubDateTime"];
    /** The actor who edited the comment. */
    editor?: Maybe<GitHubActor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies the original commit associated with the comment. */
    originalCommit?: Maybe<GitHubCommit>;
    /** The original line index in the diff to which the comment applies. */
    originalPosition: Scalars["Int"];
    /** Identifies when the comment body is outdated */
    outdated: Scalars["Boolean"];
    /** The path to which the comment applies. */
    path: Scalars["String"];
    /** The line index in the diff to which the comment applies. */
    position?: Maybe<Scalars["Int"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** The pull request associated with this review comment. */
    pullRequest: GitHubPullRequest;
    /** The pull request review associated with this review comment. */
    pullRequestReview?: Maybe<GitHubPullRequestReview>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHubReactionConnection;
    /** The comment this is a reply to. */
    replyTo?: Maybe<GitHubPullRequestReviewComment>;
    /** The repository associated with this node. */
    repository: GitHubRepository;
    /** The HTTP path permalink for this review comment. */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the state of the comment. */
    state: GitHubPullRequestReviewCommentState;
    /** Identifies when the comment was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL permalink for this review comment. */
    url: Scalars["GitHubURI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHubUserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** A review comment associated with a given repository pull request. */
export type GitHubPullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** A review comment associated with a given repository pull request. */
export type GitHubPullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for PullRequestReviewComment. */
export type GitHubPullRequestReviewCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestReviewCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestReviewComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPullRequestReviewCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestReviewComment>;
};

/** The possible states of a pull request review comment. */
export enum GitHubPullRequestReviewCommentState {
  /** A comment that is part of a pending review */
  Pending = "PENDING",
  /** A comment that is part of a submitted review */
  Submitted = "SUBMITTED"
}

/** The connection type for PullRequestReview. */
export type GitHubPullRequestReviewConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestReview>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates pull request reviews made by a user within one repository. */
export type GitHubPullRequestReviewContributionsByRepository = {
  /** The pull request review contributions. */
  contributions: GitHubCreatedPullRequestReviewContributionConnection;
  /** The repository in which the pull request reviews were made. */
  repository: GitHubRepository;
};

/** This aggregates pull request reviews made by a user within one repository. */
export type GitHubPullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubContributionOrder>;
};

/** An edge in a connection. */
export type GitHubPullRequestReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestReview>;
};

/** The possible events to perform on a pull request review. */
export enum GitHubPullRequestReviewEvent {
  /** Submit general feedback without explicit approval. */
  Comment = "COMMENT",
  /** Submit feedback and approve merging these changes. */
  Approve = "APPROVE",
  /** Submit feedback that must be addressed before merging. */
  RequestChanges = "REQUEST_CHANGES",
  /** Dismiss review so it now longer effects merging. */
  Dismiss = "DISMISS"
}

/** The possible states of a pull request review. */
export enum GitHubPullRequestReviewState {
  /** A review that has not yet been submitted. */
  Pending = "PENDING",
  /** An informational review. */
  Commented = "COMMENTED",
  /** A review allowing the pull request to merge. */
  Approved = "APPROVED",
  /** A review blocking the pull request from merging. */
  ChangesRequested = "CHANGES_REQUESTED",
  /** A review that has been dismissed. */
  Dismissed = "DISMISSED"
}

/** A threaded list of comments for a given pull request. */
export type GitHubPullRequestReviewThread = GitHubNode & {
  /** A list of pull request comments associated with the thread. */
  comments: GitHubPullRequestReviewCommentConnection;
  id: Scalars["ID"];
  /** Whether this thread has been resolved */
  isResolved: Scalars["Boolean"];
  /** Identifies the pull request associated with this thread. */
  pullRequest: GitHubPullRequest;
  /** Identifies the repository associated with this thread. */
  repository: GitHubRepository;
  /** The user who resolved this thread */
  resolvedBy?: Maybe<GitHubUser>;
  /** Whether or not the viewer can resolve this thread */
  viewerCanResolve: Scalars["Boolean"];
  /** Whether or not the viewer can unresolve this thread */
  viewerCanUnresolve: Scalars["Boolean"];
};

/** A threaded list of comments for a given pull request. */
export type GitHubPullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Review comment threads for a pull request review. */
export type GitHubPullRequestReviewThreadConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestReviewThreadEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestReviewThread>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPullRequestReviewThreadEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestReviewThread>;
};

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
export type GitHubPullRequestRevisionMarker = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The last commit the viewer has seen. */
  lastSeenCommit: GitHubCommit;
  /** The pull request to which the marker belongs. */
  pullRequest: GitHubPullRequest;
};

/** The possible states of a pull request. */
export enum GitHubPullRequestState {
  /** A pull request that is still open. */
  Open = "OPEN",
  /** A pull request that has been closed without being merged. */
  Closed = "CLOSED",
  /** A pull request that has been closed by being merged. */
  Merged = "MERGED"
}

/** The connection type for PullRequestTimelineItem. */
export type GitHubPullRequestTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An item in an pull request timeline */
export type GitHubPullRequestTimelineItem =
  | GitHubCommit
  | GitHubCommitCommentThread
  | GitHubPullRequestReview
  | GitHubPullRequestReviewThread
  | GitHubPullRequestReviewComment
  | GitHubIssueComment
  | GitHubClosedEvent
  | GitHubReopenedEvent
  | GitHubSubscribedEvent
  | GitHubUnsubscribedEvent
  | GitHubMergedEvent
  | GitHubReferencedEvent
  | GitHubCrossReferencedEvent
  | GitHubAssignedEvent
  | GitHubUnassignedEvent
  | GitHubLabeledEvent
  | GitHubUnlabeledEvent
  | GitHubMilestonedEvent
  | GitHubDemilestonedEvent
  | GitHubRenamedTitleEvent
  | GitHubLockedEvent
  | GitHubUnlockedEvent
  | GitHubDeployedEvent
  | GitHubDeploymentEnvironmentChangedEvent
  | GitHubHeadRefDeletedEvent
  | GitHubHeadRefRestoredEvent
  | GitHubHeadRefForcePushedEvent
  | GitHubBaseRefForcePushedEvent
  | GitHubReviewRequestedEvent
  | GitHubReviewRequestRemovedEvent
  | GitHubReviewDismissedEvent
  | GitHubUserBlockedEvent;

/** An edge in a connection. */
export type GitHubPullRequestTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestTimelineItem>;
};

/** An item in a pull request timeline */
export type GitHubPullRequestTimelineItems =
  | GitHubPullRequestCommit
  | GitHubPullRequestCommitCommentThread
  | GitHubPullRequestReview
  | GitHubPullRequestReviewThread
  | GitHubPullRequestRevisionMarker
  | GitHubBaseRefChangedEvent
  | GitHubBaseRefForcePushedEvent
  | GitHubDeployedEvent
  | GitHubDeploymentEnvironmentChangedEvent
  | GitHubHeadRefDeletedEvent
  | GitHubHeadRefForcePushedEvent
  | GitHubHeadRefRestoredEvent
  | GitHubMergedEvent
  | GitHubReviewDismissedEvent
  | GitHubReviewRequestedEvent
  | GitHubReviewRequestRemovedEvent
  | GitHubIssueComment
  | GitHubCrossReferencedEvent
  | GitHubAddedToProjectEvent
  | GitHubAssignedEvent
  | GitHubClosedEvent
  | GitHubCommentDeletedEvent
  | GitHubConvertedNoteToIssueEvent
  | GitHubDemilestonedEvent
  | GitHubLabeledEvent
  | GitHubLockedEvent
  | GitHubMentionedEvent
  | GitHubMilestonedEvent
  | GitHubMovedColumnsInProjectEvent
  | GitHubPinnedEvent
  | GitHubReferencedEvent
  | GitHubRemovedFromProjectEvent
  | GitHubRenamedTitleEvent
  | GitHubReopenedEvent
  | GitHubSubscribedEvent
  | GitHubTransferredEvent
  | GitHubUnassignedEvent
  | GitHubUnlabeledEvent
  | GitHubUnlockedEvent
  | GitHubUserBlockedEvent
  | GitHubUnpinnedEvent
  | GitHubUnsubscribedEvent;

/** The connection type for PullRequestTimelineItems. */
export type GitHubPullRequestTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPullRequestTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPullRequestTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"];
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** An edge in a connection. */
export type GitHubPullRequestTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPullRequestTimelineItems>;
};

/** The possible item types found in a timeline. */
export enum GitHubPullRequestTimelineItemsItemType {
  /** Represents a Git commit part of a pull request. */
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  /** Represents a commit comment thread part of a pull request. */
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  /** A review object for a given pull request. */
  PullRequestReview = "PULL_REQUEST_REVIEW",
  /** A threaded list of comments for a given pull request. */
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'deployed' event on a given pull request. */
  DeployedEvent = "DEPLOYED_EVENT",
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'head_ref_restored' event on a given pull request. */
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  /** Represents a 'merged' event on a given pull request. */
  MergedEvent = "MERGED_EVENT",
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  /** Represents an 'review_requested' event on a given pull request. */
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  /** Represents an 'review_request_removed' event on a given pull request. */
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}

/** A team or user who has the ability to push to a protected branch. */
export type GitHubPushAllowance = GitHubNode & {
  /** The actor that can push. */
  actor?: Maybe<GitHubPushAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  id: Scalars["ID"];
};

/** Types that can be an actor. */
export type GitHubPushAllowanceActor = GitHubUser | GitHubTeam;

/** The connection type for PushAllowance. */
export type GitHubPushAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubPushAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubPushAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubPushAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubPushAllowance>;
};

/** Represents the client's rate limit. */
export type GitHubRateLimit = {
  /** The point cost for the current query counting against the rate limit. */
  cost: Scalars["Int"];
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  limit: Scalars["Int"];
  /** The maximum number of nodes this query may return */
  nodeCount: Scalars["Int"];
  /** The number of points remaining in the current rate limit window. */
  remaining: Scalars["Int"];
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  resetAt: Scalars["GitHubDateTime"];
};

/** Represents a subject that can be reacted on. */
export type GitHubReactable = {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHubReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHubReactionConnection;
  /** Can user react to this subject */
  viewerCanReact: Scalars["Boolean"];
};

/** Represents a subject that can be reacted on. */
export type GitHubReactableReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHubReactionContent>;
  orderBy?: Maybe<GitHubReactionOrder>;
};

/** The connection type for User. */
export type GitHubReactingUserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReactingUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user that's made a reaction. */
export type GitHubReactingUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHubUser;
  /** The moment when the user made the reaction. */
  reactedAt: Scalars["GitHubDateTime"];
};

/** An emoji reaction to a particular piece of content. */
export type GitHubReaction = GitHubNode & {
  /** Identifies the emoji reaction. */
  content: GitHubReactionContent;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** The reactable piece of content */
  reactable: GitHubReactable;
  /** Identifies the user who created this reaction. */
  user?: Maybe<GitHubUser>;
};

/** A list of reactions that have been left on the subject. */
export type GitHubReactionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubReaction>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"];
};

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum GitHubReactionContent {
  /** Represents the 👍 emoji. */
  ThumbsUp = "THUMBS_UP",
  /** Represents the 👎 emoji. */
  ThumbsDown = "THUMBS_DOWN",
  /** Represents the 😄 emoji. */
  Laugh = "LAUGH",
  /** Represents the 🎉 emoji. */
  Hooray = "HOORAY",
  /** Represents the 😕 emoji. */
  Confused = "CONFUSED",
  /** Represents the ❤️ emoji. */
  Heart = "HEART",
  /** Represents the 🚀 emoji. */
  Rocket = "ROCKET",
  /** Represents the 👀 emoji. */
  Eyes = "EYES"
}

/** An edge in a connection. */
export type GitHubReactionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubReaction>;
};

/** A group of emoji reactions to a particular piece of content. */
export type GitHubReactionGroup = {
  /** Identifies the emoji reaction. */
  content: GitHubReactionContent;
  /** Identifies when the reaction was created. */
  createdAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** The subject that was reacted to. */
  subject: GitHubReactable;
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  users: GitHubReactingUserConnection;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"];
};

/** A group of emoji reactions to a particular piece of content. */
export type GitHubReactionGroupUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Ways in which lists of reactions can be ordered upon return. */
export type GitHubReactionOrder = {
  /** The field in which to order reactions by. */
  field: GitHubReactionOrderField;
  /** The direction in which to order reactions by the specified field. */
  direction: GitHubOrderDirection;
};

/** A list of fields that reactions can be ordered by. */
export enum GitHubReactionOrderField {
  /** Allows ordering a list of reactions by when they were created. */
  CreatedAt = "CREATED_AT"
}

/** Represents a Git reference. */
export type GitHubRef = GitHubNode & {
  /** A list of pull requests with this ref as the head ref. */
  associatedPullRequests: GitHubPullRequestConnection;
  id: Scalars["ID"];
  /** The ref name. */
  name: Scalars["String"];
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  prefix: Scalars["String"];
  /** The repository the ref belongs to. */
  repository: GitHubRepository;
  /** The object the ref points to. */
  target: GitHubGitObject;
};

/** Represents a Git reference. */
export type GitHubRefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<GitHubPullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubIssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Ref. */
export type GitHubRefConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubRefEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRef>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubRefEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubRef>;
};

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export type GitHubReferencedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the commit associated with the 'referenced' event. */
  commit?: Maybe<GitHubCommit>;
  /** Identifies the repository associated with the 'referenced' event. */
  commitRepository: GitHubRepository;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars["Boolean"];
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  isDirectReference: Scalars["Boolean"];
  /** Object referenced by event. */
  subject: GitHubReferencedSubject;
};

/** Any referencable object */
export type GitHubReferencedSubject = GitHubIssue | GitHubPullRequest;

/** Ways in which lists of git refs can be ordered upon return. */
export type GitHubRefOrder = {
  /** The field in which to order refs by. */
  field: GitHubRefOrderField;
  /** The direction in which to order refs by the specified field. */
  direction: GitHubOrderDirection;
};

/** Properties by which ref connections can be ordered. */
export enum GitHubRefOrderField {
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  TagCommitDate = "TAG_COMMIT_DATE",
  /** Order refs by their alphanumeric name */
  Alphabetical = "ALPHABETICAL"
}

/** Represents an owner of a registry package. */
export type GitHubRegistryPackageOwner = {
  id: Scalars["ID"];
};

/** Represents an interface to search packages on an object. */
export type GitHubRegistryPackageSearch = {
  id: Scalars["ID"];
};

/** A release contains the content for a release. */
export type GitHubRelease = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** The author of the release */
    author?: Maybe<GitHubUser>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the description of the release. */
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Whether or not the release is a draft */
    isDraft: Scalars["Boolean"];
    /** Whether or not the release is a prerelease */
    isPrerelease: Scalars["Boolean"];
    /** Identifies the title of the release. */
    name?: Maybe<Scalars["String"]>;
    /** Identifies the date and time when the release was created. */
    publishedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** List of releases assets which are dependent on this release. */
    releaseAssets: GitHubReleaseAssetConnection;
    /** The HTTP path for this issue */
    resourcePath: Scalars["GitHubURI"];
    /** The Git tag the release points to */
    tag?: Maybe<GitHubRef>;
    /** The name of the release's Git tag */
    tagName: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this issue */
    url: Scalars["GitHubURI"];
  };

/** A release contains the content for a release. */
export type GitHubReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** A release asset contains the content for a release asset. */
export type GitHubReleaseAsset = GitHubNode & {
  /** The asset's content-type */
  contentType: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The number of times this asset was downloaded */
  downloadCount: Scalars["Int"];
  /** Identifies the URL where you can download the release asset via the browser. */
  downloadUrl: Scalars["GitHubURI"];
  id: Scalars["ID"];
  /** Identifies the title of the release asset. */
  name: Scalars["String"];
  /** Release that the asset is associated with */
  release?: Maybe<GitHubRelease>;
  /** The size (in bytes) of the asset */
  size: Scalars["Int"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The user that performed the upload */
  uploadedBy: GitHubUser;
  /** Identifies the URL of the release asset. */
  url: Scalars["GitHubURI"];
};

/** The connection type for ReleaseAsset. */
export type GitHubReleaseAssetConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReleaseAssetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubReleaseAsset>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubReleaseAssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubReleaseAsset>;
};

/** The connection type for Release. */
export type GitHubReleaseConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReleaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRelease>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubRelease>;
};

/** Ways in which lists of releases can be ordered upon return. */
export type GitHubReleaseOrder = {
  /** The field in which to order releases by. */
  field: GitHubReleaseOrderField;
  /** The direction in which to order releases by the specified field. */
  direction: GitHubOrderDirection;
};

/** Properties by which release connections can be ordered. */
export enum GitHubReleaseOrderField {
  /** Order releases by creation time */
  CreatedAt = "CREATED_AT",
  /** Order releases alphabetically by name */
  Name = "NAME"
}

/** Autogenerated input type of RemoveAssigneesFromAssignable */
export type GitHubRemoveAssigneesFromAssignableInput = {
  /** The id of the assignable object to remove assignees from. */
  assignableId: Scalars["ID"];
  /** The id of users to remove as assignees. */
  assigneeIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveAssigneesFromAssignable */
export type GitHubRemoveAssigneesFromAssignablePayload = {
  /** The item that was unassigned. */
  assignable?: Maybe<GitHubAssignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents a 'removed_from_project' event on a given issue or pull request. */
export type GitHubRemovedFromProjectEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of RemoveLabelsFromLabelable */
export type GitHubRemoveLabelsFromLabelableInput = {
  /** The id of the Labelable to remove labels from. */
  labelableId: Scalars["ID"];
  /** The ids of labels to remove. */
  labelIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveLabelsFromLabelable */
export type GitHubRemoveLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The Labelable the labels were removed from. */
  labelable?: Maybe<GitHubLabelable>;
};

/** Autogenerated input type of RemoveOutsideCollaborator */
export type GitHubRemoveOutsideCollaboratorInput = {
  /** The ID of the outside collaborator to remove. */
  userId: Scalars["ID"];
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveOutsideCollaborator */
export type GitHubRemoveOutsideCollaboratorPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The user that was removed as an outside collaborator. */
  removedUser?: Maybe<GitHubUser>;
};

/** Autogenerated input type of RemoveReaction */
export type GitHubRemoveReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The name of the emoji reaction to remove. */
  content: GitHubReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveReaction */
export type GitHubRemoveReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The reaction object. */
  reaction?: Maybe<GitHubReaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHubReactable>;
};

/** Autogenerated input type of RemoveStar */
export type GitHubRemoveStarInput = {
  /** The Starrable ID to unstar. */
  starrableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveStar */
export type GitHubRemoveStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The starrable. */
  starrable?: Maybe<GitHubStarrable>;
};

/** Represents a 'renamed' event on a given issue or pull request */
export type GitHubRenamedTitleEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the current title of the issue or pull request. */
  currentTitle: Scalars["String"];
  id: Scalars["ID"];
  /** Identifies the previous title of the issue or pull request. */
  previousTitle: Scalars["String"];
  /** Subject that was renamed. */
  subject: GitHubRenamedTitleSubject;
};

/** An object which has a renamable title */
export type GitHubRenamedTitleSubject = GitHubIssue | GitHubPullRequest;

/** Represents a 'reopened' event on any `Closable`. */
export type GitHubReopenedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Object that was reopened. */
  closable: GitHubClosable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
};

/** Autogenerated input type of ReopenIssue */
export type GitHubReopenIssueInput = {
  /** ID of the issue to be opened. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ReopenIssue */
export type GitHubReopenIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue that was opened. */
  issue?: Maybe<GitHubIssue>;
};

/** Autogenerated input type of ReopenPullRequest */
export type GitHubReopenPullRequestInput = {
  /** ID of the pull request to be reopened. */
  pullRequestId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ReopenPullRequest */
export type GitHubReopenPullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was reopened. */
  pullRequest?: Maybe<GitHubPullRequest>;
};

/** The reasons a piece of content can be reported or minimized. */
export enum GitHubReportedContentClassifiers {
  /** A spammy piece of content */
  Spam = "SPAM",
  /** An abusive or harassing piece of content */
  Abuse = "ABUSE",
  /** An irrelevant piece of content */
  OffTopic = "OFF_TOPIC",
  /** An outdated piece of content */
  Outdated = "OUTDATED",
  /** The content has been resolved */
  Resolved = "RESOLVED"
}

/** A repository contains the content for a project. */
export type GitHubRepository = GitHubNode &
  GitHubProjectOwner &
  GitHubRegistryPackageOwner &
  GitHubSubscribable &
  GitHubStarrable &
  GitHubUniformResourceLocatable &
  GitHubRepositoryInfo & {
    /** A list of users that can be assigned to issues in this repository. */
    assignableUsers: GitHubUserConnection;
    /** A list of branch protection rules for this repository. */
    branchProtectionRules: GitHubBranchProtectionRuleConnection;
    /** Returns the code of conduct for this repository */
    codeOfConduct?: Maybe<GitHubCodeOfConduct>;
    /** A list of collaborators associated with the repository. */
    collaborators?: Maybe<GitHubRepositoryCollaboratorConnection>;
    /** A list of commit comments associated with the repository. */
    commitComments: GitHubCommitCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The Ref associated with the repository's default branch. */
    defaultBranchRef?: Maybe<GitHubRef>;
    /** A list of deploy keys that are on this repository. */
    deployKeys: GitHubDeployKeyConnection;
    /** Deployments associated with the repository */
    deployments: GitHubDeploymentConnection;
    /** The description of the repository. */
    description?: Maybe<Scalars["String"]>;
    /** The description of the repository rendered to HTML. */
    descriptionHTML: Scalars["GitHubHTML"];
    /** The number of kilobytes this repository occupies on disk. */
    diskUsage?: Maybe<Scalars["Int"]>;
    /** Returns how many forks there are of this repository in the whole network. */
    forkCount: Scalars["Int"];
    /** A list of direct forked repositories. */
    forks: GitHubRepositoryConnection;
    /** Indicates if the repository has issues feature enabled. */
    hasIssuesEnabled: Scalars["Boolean"];
    /** Indicates if the repository has wiki feature enabled. */
    hasWikiEnabled: Scalars["Boolean"];
    /** The repository's URL. */
    homepageUrl?: Maybe<Scalars["GitHubURI"]>;
    id: Scalars["ID"];
    /** Indicates if the repository is unmaintained. */
    isArchived: Scalars["Boolean"];
    /** Returns whether or not this repository disabled. */
    isDisabled: Scalars["Boolean"];
    /** Identifies if the repository is a fork. */
    isFork: Scalars["Boolean"];
    /** Indicates if the repository has been locked or not. */
    isLocked: Scalars["Boolean"];
    /** Identifies if the repository is a mirror. */
    isMirror: Scalars["Boolean"];
    /** Identifies if the repository is private. */
    isPrivate: Scalars["Boolean"];
    /** Returns a single issue from the current repository by number. */
    issue?: Maybe<GitHubIssue>;
    /** Returns a single issue-like object from the current repository by number. */
    issueOrPullRequest?: Maybe<GitHubIssueOrPullRequest>;
    /** A list of issues that have been opened in the repository. */
    issues: GitHubIssueConnection;
    /** Returns a single label by name */
    label?: Maybe<GitHubLabel>;
    /** A list of labels associated with the repository. */
    labels?: Maybe<GitHubLabelConnection>;
    /** A list containing a breakdown of the language composition of the repository. */
    languages?: Maybe<GitHubLanguageConnection>;
    /** The license associated with the repository */
    licenseInfo?: Maybe<GitHubLicense>;
    /** The reason the repository has been locked. */
    lockReason?: Maybe<GitHubRepositoryLockReason>;
    /** A list of Users that can be mentioned in the context of the repository. */
    mentionableUsers: GitHubUserConnection;
    /** Whether or not PRs are merged with a merge commit on this repository. */
    mergeCommitAllowed: Scalars["Boolean"];
    /** Returns a single milestone from the current repository by number. */
    milestone?: Maybe<GitHubMilestone>;
    /** A list of milestones associated with the repository. */
    milestones?: Maybe<GitHubMilestoneConnection>;
    /** The repository's original mirror URL. */
    mirrorUrl?: Maybe<Scalars["GitHubURI"]>;
    /** The name of the repository. */
    name: Scalars["String"];
    /** The repository's name with owner. */
    nameWithOwner: Scalars["String"];
    /** A Git object in the repository */
    object?: Maybe<GitHubGitObject>;
    /** The User owner of the repository. */
    owner: GitHubRepositoryOwner;
    /** The repository parent, if this is a fork. */
    parent?: Maybe<GitHubRepository>;
    /** The primary language of the repository's code. */
    primaryLanguage?: Maybe<GitHubLanguage>;
    /** Find project by number. */
    project?: Maybe<GitHubProject>;
    /** A list of projects under the owner. */
    projects: GitHubProjectConnection;
    /** The HTTP path listing the repository's projects */
    projectsResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL listing the repository's projects */
    projectsUrl: Scalars["GitHubURI"];
    /** Returns a single pull request from the current repository by number. */
    pullRequest?: Maybe<GitHubPullRequest>;
    /** A list of pull requests that have been opened in the repository. */
    pullRequests: GitHubPullRequestConnection;
    /** Identifies when the repository was last pushed to. */
    pushedAt?: Maybe<Scalars["GitHubDateTime"]>;
    /** Whether or not rebase-merging is enabled on this repository. */
    rebaseMergeAllowed: Scalars["Boolean"];
    /** Fetch a given ref from the repository */
    ref?: Maybe<GitHubRef>;
    /** Fetch a list of refs from the repository */
    refs?: Maybe<GitHubRefConnection>;
    /** Lookup a single release given various criteria. */
    release?: Maybe<GitHubRelease>;
    /** List of releases which are dependent on this repository. */
    releases: GitHubReleaseConnection;
    /** A list of applied repository-topic associations for this repository. */
    repositoryTopics: GitHubRepositoryTopicConnection;
    /** The HTTP path for this repository */
    resourcePath: Scalars["GitHubURI"];
    /** A description of the repository, rendered to HTML without any links in it. */
    shortDescriptionHTML: Scalars["GitHubHTML"];
    /** Whether or not squash-merging is enabled on this repository. */
    squashMergeAllowed: Scalars["Boolean"];
    /** The SSH URL to clone this repository */
    sshUrl: Scalars["GitHubGitSSHRemote"];
    /** A list of users who have starred this starrable. */
    stargazers: GitHubStargazerConnection;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this repository */
    url: Scalars["GitHubURI"];
    /** Indicates whether the viewer has admin permissions on this repository. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Indicates whether the viewer can update the topics of this repository. */
    viewerCanUpdateTopics: Scalars["Boolean"];
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
    /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
    viewerPermission?: Maybe<GitHubRepositoryPermission>;
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHubSubscriptionState>;
    /** A list of users watching the repository. */
    watchers: GitHubUserConnection;
  };

/** A repository contains the content for a project. */
export type GitHubRepositoryAssignableUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryCollaboratorsArgs = {
  affiliation?: Maybe<GitHubCollaboratorAffiliation>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryDeployKeysArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHubDeploymentOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryForksArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryIssueArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryIssueOrPullRequestArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryIssuesArgs = {
  orderBy?: Maybe<GitHubIssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHubIssueState>>;
  filterBy?: Maybe<GitHubIssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryLabelArgs = {
  name: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryLanguagesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubLanguageOrder>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryMentionableUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryMilestoneArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryMilestonesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  states?: Maybe<Array<GitHubMilestoneState>>;
  orderBy?: Maybe<GitHubMilestoneOrder>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryObjectArgs = {
  oid?: Maybe<Scalars["GitHubGitObjectID"]>;
  expression?: Maybe<Scalars["String"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryProjectArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryProjectsArgs = {
  orderBy?: Maybe<GitHubProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHubProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryPullRequestArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryPullRequestsArgs = {
  states?: Maybe<Array<GitHubPullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubIssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryRefArgs = {
  qualifiedName: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryRefsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  refPrefix: Scalars["String"];
  direction?: Maybe<GitHubOrderDirection>;
  orderBy?: Maybe<GitHubRefOrder>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryReleaseArgs = {
  tagName: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryReleasesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubReleaseOrder>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryShortDescriptionHtmlArgs = {
  limit: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHubRepositoryStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubStarOrder>;
};

/** A repository contains the content for a project. */
export type GitHubRepositoryWatchersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The affiliation of a user to a repository */
export enum GitHubRepositoryAffiliation {
  /** Repositories that are owned by the authenticated user. */
  Owner = "OWNER",
  /** Repositories that the user has been added to as a collaborator. */
  Collaborator = "COLLABORATOR",
  /** Repositories that the user has access to through being a member of an
   * organization. This includes every repository on every team that the user is on.
   */
  OrganizationMember = "ORGANIZATION_MEMBER"
}

/** The affiliation type between collaborator and repository. */
export enum GitHubRepositoryCollaboratorAffiliation {
  /** All collaborators of the repository. */
  All = "ALL",
  /** All outside collaborators of an organization-owned repository. */
  Outside = "OUTSIDE"
}

/** The connection type for User. */
export type GitHubRepositoryCollaboratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubRepositoryCollaboratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user who is a collaborator of a repository. */
export type GitHubRepositoryCollaboratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHubUser;
  /** The permission the user has on the repository. */
  permission: GitHubRepositoryPermission;
  /** A list of sources for the user's access to the repository. */
  permissionSources?: Maybe<Array<GitHubPermissionSource>>;
};

/** A list of repositories owned by the subject. */
export type GitHubRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRepository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** The total size in kilobytes of all repositories in the connection. */
  totalDiskUsage: Scalars["Int"];
};

/** The reason a repository is listed as 'contributed'. */
export enum GitHubRepositoryContributionType {
  /** Created a commit */
  Commit = "COMMIT",
  /** Created an issue */
  Issue = "ISSUE",
  /** Created a pull request */
  PullRequest = "PULL_REQUEST",
  /** Created the repository */
  Repository = "REPOSITORY",
  /** Reviewed a pull request */
  PullRequestReview = "PULL_REQUEST_REVIEW"
}

/** An edge in a connection. */
export type GitHubRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubRepository>;
};

/** A subset of repository info. */
export type GitHubRepositoryInfo = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The description of the repository. */
  description?: Maybe<Scalars["String"]>;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars["GitHubHTML"];
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars["Int"];
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars["Boolean"];
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars["Boolean"];
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars["GitHubURI"]>;
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars["Boolean"];
  /** Identifies if the repository is a fork. */
  isFork: Scalars["Boolean"];
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars["Boolean"];
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars["Boolean"];
  /** Identifies if the repository is private. */
  isPrivate: Scalars["Boolean"];
  /** The license associated with the repository */
  licenseInfo?: Maybe<GitHubLicense>;
  /** The reason the repository has been locked. */
  lockReason?: Maybe<GitHubRepositoryLockReason>;
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars["GitHubURI"]>;
  /** The name of the repository. */
  name: Scalars["String"];
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"];
  /** The User owner of the repository. */
  owner: GitHubRepositoryOwner;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** The HTTP path for this repository */
  resourcePath: Scalars["GitHubURI"];
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars["GitHubHTML"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The HTTP URL for this repository */
  url: Scalars["GitHubURI"];
};

/** A subset of repository info. */
export type GitHubRepositoryInfoShortDescriptionHtmlArgs = {
  limit: Scalars["Int"];
};

/** An invitation for a user to be added to a repository. */
export type GitHubRepositoryInvitation = GitHubNode & {
  id: Scalars["ID"];
  /** The user who received the invitation. */
  invitee: GitHubUser;
  /** The user who created the invitation. */
  inviter: GitHubUser;
  /** The permission granted on this repository by this invitation. */
  permission: GitHubRepositoryPermission;
  /** The Repository the user is invited to. */
  repository?: Maybe<GitHubRepositoryInfo>;
};

/** An edge in a connection. */
export type GitHubRepositoryInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubRepositoryInvitation>;
};

/** The possible reasons a given repository could be in a locked state. */
export enum GitHubRepositoryLockReason {
  /** The repository is locked due to a move. */
  Moving = "MOVING",
  /** The repository is locked due to a billing related reason. */
  Billing = "BILLING",
  /** The repository is locked due to a rename. */
  Rename = "RENAME",
  /** The repository is locked due to a migration. */
  Migrating = "MIGRATING"
}

/** Represents a object that belongs to a repository. */
export type GitHubRepositoryNode = {
  /** The repository associated with this node. */
  repository: GitHubRepository;
};

/** Ordering options for repository connections */
export type GitHubRepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHubRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which repository connections can be ordered. */
export enum GitHubRepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS"
}

/** Represents an owner of a Repository. */
export type GitHubRepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl: Scalars["GitHubURI"];
  id: Scalars["ID"];
  /** The username used to login. */
  login: Scalars["String"];
  /** A list of repositories this user has pinned to their profile */
  pinnedRepositories: GitHubRepositoryConnection;
  /** A list of repositories that the user owns. */
  repositories: GitHubRepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<GitHubRepository>;
  /** The HTTP URL for the owner. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for the owner. */
  url: Scalars["GitHubURI"];
};

/** Represents an owner of a Repository. */
export type GitHubRepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Represents an owner of a Repository. */
export type GitHubRepositoryOwnerPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents an owner of a Repository. */
export type GitHubRepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** Represents an owner of a Repository. */
export type GitHubRepositoryOwnerRepositoryArgs = {
  name: Scalars["String"];
};

/** The access level to a repository */
export enum GitHubRepositoryPermission {
  /** Can read, clone, push, and add collaborators */
  Admin = "ADMIN",
  /** Can read, clone and push */
  Write = "WRITE",
  /** Can read and clone */
  Read = "READ"
}

/** The privacy of a repository */
export enum GitHubRepositoryPrivacy {
  /** Public */
  Public = "PUBLIC",
  /** Private */
  Private = "PRIVATE"
}

/** A repository-topic connects a repository to a topic. */
export type GitHubRepositoryTopic = GitHubNode &
  GitHubUniformResourceLocatable & {
    id: Scalars["ID"];
    /** The HTTP path for this repository-topic. */
    resourcePath: Scalars["GitHubURI"];
    /** The topic. */
    topic: GitHubTopic;
    /** The HTTP URL for this repository-topic. */
    url: Scalars["GitHubURI"];
  };

/** The connection type for RepositoryTopic. */
export type GitHubRepositoryTopicConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubRepositoryTopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRepositoryTopic>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubRepositoryTopicEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubRepositoryTopic>;
};

/** Types that can be requested reviewers. */
export type GitHubRequestedReviewer = GitHubUser | GitHubTeam;

/** Autogenerated input type of RequestReviews */
export type GitHubRequestReviewsInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"];
  /** The Node IDs of the user to request. */
  userIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<Array<Scalars["ID"]>>;
  /** Add users to the set rather than replace. */
  union?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RequestReviews */
export type GitHubRequestReviewsPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that is getting requests. */
  pullRequest?: Maybe<GitHubPullRequest>;
  /** The edge from the pull request to the requested reviewers. */
  requestedReviewersEdge?: Maybe<GitHubUserEdge>;
};

/** Autogenerated input type of ResolveReviewThread */
export type GitHubResolveReviewThreadInput = {
  /** The ID of the thread to resolve */
  threadId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ResolveReviewThread */
export type GitHubResolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The thread to resolve. */
  thread?: Maybe<GitHubPullRequestReviewThread>;
};

/** Represents a private contribution a user made on GitHub. */
export type GitHubRestrictedContribution = GitHubContribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHubDateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHubURI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHubURI"];
  /** The user who made this contribution. */
  user: GitHubUser;
};

/** A team or user who has the ability to dismiss a review on a protected branch. */
export type GitHubReviewDismissalAllowance = GitHubNode & {
  /** The actor that can dismiss. */
  actor?: Maybe<GitHubReviewDismissalAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  id: Scalars["ID"];
};

/** Types that can be an actor. */
export type GitHubReviewDismissalAllowanceActor = GitHubUser | GitHubTeam;

/** The connection type for ReviewDismissalAllowance. */
export type GitHubReviewDismissalAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReviewDismissalAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubReviewDismissalAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubReviewDismissalAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubReviewDismissalAllowance>;
};

/** Represents a 'review_dismissed' event on a given issue or pull request. */
export type GitHubReviewDismissedEvent = GitHubNode &
  GitHubUniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHubActor>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** Identifies the optional message associated with the 'review_dismissed' event. */
    dismissalMessage?: Maybe<Scalars["String"]>;
    /** Identifies the optional message associated with the event, rendered to HTML. */
    dismissalMessageHTML?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Identifies the message associated with the 'review_dismissed' event. */
    message: Scalars["String"];
    /** The message associated with the event, rendered to HTML. */
    messageHtml: Scalars["GitHubHTML"];
    /** Identifies the previous state of the review with the 'review_dismissed' event. */
    previousReviewState: GitHubPullRequestReviewState;
    /** PullRequest referenced by event. */
    pullRequest: GitHubPullRequest;
    /** Identifies the commit which caused the review to become stale. */
    pullRequestCommit?: Maybe<GitHubPullRequestCommit>;
    /** The HTTP path for this review dismissed event. */
    resourcePath: Scalars["GitHubURI"];
    /** Identifies the review associated with the 'review_dismissed' event. */
    review?: Maybe<GitHubPullRequestReview>;
    /** The HTTP URL for this review dismissed event. */
    url: Scalars["GitHubURI"];
  };

/** A request for a user to review a pull request. */
export type GitHubReviewRequest = GitHubNode & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Identifies the pull request associated with this review request. */
  pullRequest: GitHubPullRequest;
  /** The reviewer that is requested. */
  requestedReviewer?: Maybe<GitHubRequestedReviewer>;
};

/** The connection type for ReviewRequest. */
export type GitHubReviewRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubReviewRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubReviewRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents an 'review_requested' event on a given pull request. */
export type GitHubReviewRequestedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
  /** Identifies the reviewer whose review was requested. */
  requestedReviewer?: Maybe<GitHubRequestedReviewer>;
};

/** An edge in a connection. */
export type GitHubReviewRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubReviewRequest>;
};

/** Represents an 'review_request_removed' event on a given pull request. */
export type GitHubReviewRequestRemovedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHubPullRequest;
  /** Identifies the reviewer whose review request was removed. */
  requestedReviewer?: Maybe<GitHubRequestedReviewer>;
};

/** The results of a search. */
export type GitHubSearchResultItem =
  | GitHubIssue
  | GitHubPullRequest
  | GitHubRepository
  | GitHubUser
  | GitHubOrganization
  | GitHubMarketplaceListing;

/** A list of results that matched against a search query. */
export type GitHubSearchResultItemConnection = {
  /** The number of pieces of code that matched the search query. */
  codeCount: Scalars["Int"];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubSearchResultItemEdge>>>;
  /** The number of issues that matched the search query. */
  issueCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubSearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** The number of repositories that matched the search query. */
  repositoryCount: Scalars["Int"];
  /** The number of users that matched the search query. */
  userCount: Scalars["Int"];
  /** The number of wiki pages that matched the search query. */
  wikiCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubSearchResultItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubSearchResultItem>;
  /** Text matches on the result found. */
  textMatches?: Maybe<Array<Maybe<GitHubTextMatch>>>;
};

/** Represents the individual results of a search. */
export enum GitHubSearchType {
  /** Returns results matching issues in repositories. */
  Issue = "ISSUE",
  /** Returns results matching repositories. */
  Repository = "REPOSITORY",
  /** Returns results matching users and organizations on GitHub. */
  User = "USER"
}

/** A GitHub Security Advisory */
export type GitHubSecurityAdvisory = GitHubNode & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** This is a long plaintext description of the advisory */
  description: Scalars["String"];
  /** The GitHub Security Advisory ID */
  ghsaId: Scalars["String"];
  id: Scalars["ID"];
  /** A list of identifiers for this advisory */
  identifiers: Array<GitHubSecurityAdvisoryIdentifier>;
  /** When the advisory was published */
  publishedAt: Scalars["GitHubDateTime"];
  /** A list of references for this advisory */
  references: Array<GitHubSecurityAdvisoryReference>;
  /** The severity of the advisory */
  severity: GitHubSecurityAdvisorySeverity;
  /** A short plaintext summary of the advisory */
  summary: Scalars["String"];
  /** When the advisory was last updated */
  updatedAt: Scalars["GitHubDateTime"];
  /** Vulnerabilities associated with this Advisory */
  vulnerabilities: GitHubSecurityVulnerabilityConnection;
  /** When the advisory was withdrawn, if it has been withdrawn */
  withdrawnAt?: Maybe<Scalars["GitHubDateTime"]>;
};

/** A GitHub Security Advisory */
export type GitHubSecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHubSecurityVulnerabilityOrder>;
  ecosystem?: Maybe<GitHubSecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars["String"]>;
  severities?: Maybe<Array<GitHubSecurityAdvisorySeverity>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for SecurityAdvisory. */
export type GitHubSecurityAdvisoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubSecurityAdvisoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubSecurityAdvisory>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** The possible ecosystems of a security vulnerability's package. */
export enum GitHubSecurityAdvisoryEcosystem {
  /** Ruby gems hosted at RubyGems.org */
  Rubygems = "RUBYGEMS",
  /** JavaScript packages hosted at npmjs.com */
  Npm = "NPM",
  /** Python packages hosted at PyPI.org */
  Pip = "PIP",
  /** Java artifacts hosted at the Maven central repository */
  Maven = "MAVEN",
  /** .NET packages hosted at the NuGet Gallery */
  Nuget = "NUGET"
}

/** An edge in a connection. */
export type GitHubSecurityAdvisoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubSecurityAdvisory>;
};

/** A GitHub Security Advisory Identifier */
export type GitHubSecurityAdvisoryIdentifier = {
  /** The identifier type, e.g. GHSA, CVE */
  type: Scalars["String"];
  /** The identifier */
  value: Scalars["String"];
};

/** An advisory identifier to filter results on. */
export type GitHubSecurityAdvisoryIdentifierFilter = {
  /** The identifier type. */
  type: GitHubSecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: Scalars["String"];
};

/** Identifier formats available for advisories. */
export enum GitHubSecurityAdvisoryIdentifierType {
  /** Common Vulnerabilities and Exposures Identifier. */
  Cve = "CVE",
  /** GitHub Security Advisory ID. */
  Ghsa = "GHSA"
}

/** Ordering options for security advisory connections */
export type GitHubSecurityAdvisoryOrder = {
  /** The field to order security advisories by. */
  field: GitHubSecurityAdvisoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which security advisory connections can be ordered. */
export enum GitHubSecurityAdvisoryOrderField {
  /** Order advisories by publication time */
  PublishedAt = "PUBLISHED_AT",
  /** Order advisories by update time */
  UpdatedAt = "UPDATED_AT"
}

/** An individual package */
export type GitHubSecurityAdvisoryPackage = {
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  ecosystem: GitHubSecurityAdvisoryEcosystem;
  /** The package name */
  name: Scalars["String"];
};

/** An individual package version */
export type GitHubSecurityAdvisoryPackageVersion = {
  /** The package name or version */
  identifier: Scalars["String"];
};

/** A GitHub Security Advisory Reference */
export type GitHubSecurityAdvisoryReference = {
  /** A publicly accessible reference */
  url: Scalars["GitHubURI"];
};

/** Severity of the vulnerability. */
export enum GitHubSecurityAdvisorySeverity {
  /** Low. */
  Low = "LOW",
  /** Moderate. */
  Moderate = "MODERATE",
  /** High. */
  High = "HIGH",
  /** Critical. */
  Critical = "CRITICAL"
}

/** An individual vulnerability within an Advisory */
export type GitHubSecurityVulnerability = {
  /** The Advisory associated with this Vulnerability */
  advisory: GitHubSecurityAdvisory;
  /** The first version containing a fix for the vulnerability */
  firstPatchedVersion?: Maybe<GitHubSecurityAdvisoryPackageVersion>;
  /** A description of the vulnerable package */
  package: GitHubSecurityAdvisoryPackage;
  /** The severity of the vulnerability within this package */
  severity: GitHubSecurityAdvisorySeverity;
  /** When the vulnerability was last updated */
  updatedAt: Scalars["GitHubDateTime"];
  /** A string that describes the vulnerable package versions.
   * This string follows a basic syntax with a few forms.
   * + `= 0.2.0` denotes a single vulnerable version.
   * + `<= 1.0.8` denotes a version range up to and including the specified version
   * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
   * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
   * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
   */
  vulnerableVersionRange: Scalars["String"];
};

/** The connection type for SecurityVulnerability. */
export type GitHubSecurityVulnerabilityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubSecurityVulnerabilityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubSecurityVulnerability>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubSecurityVulnerabilityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubSecurityVulnerability>;
};

/** Ordering options for security vulnerability connections */
export type GitHubSecurityVulnerabilityOrder = {
  /** The field to order security vulnerabilities by. */
  field: GitHubSecurityVulnerabilityOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which security vulnerability connections can be ordered. */
export enum GitHubSecurityVulnerabilityOrderField {
  /** Order vulnerability by update time */
  UpdatedAt = "UPDATED_AT"
}

/** Represents an S/MIME signature on a Commit or Tag. */
export type GitHubSmimeSignature = GitHubGitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHubUser>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHubGitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** The connection type for User. */
export type GitHubStargazerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubStargazerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user that's starred a repository. */
export type GitHubStargazerEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHubUser;
  /** Identifies when the item was starred. */
  starredAt: Scalars["GitHubDateTime"];
};

/** Ways in which star connections can be ordered. */
export type GitHubStarOrder = {
  /** The field in which to order nodes by. */
  field: GitHubStarOrderField;
  /** The direction in which to order nodes. */
  direction: GitHubOrderDirection;
};

/** Properties by which star connections can be ordered. */
export enum GitHubStarOrderField {
  /** Allows ordering a list of stars by when they were created. */
  StarredAt = "STARRED_AT"
}

/** Things that can be starred. */
export type GitHubStarrable = {
  id: Scalars["ID"];
  /** A list of users who have starred this starrable. */
  stargazers: GitHubStargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars["Boolean"];
};

/** Things that can be starred. */
export type GitHubStarrableStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubStarOrder>;
};

/** The connection type for Repository. */
export type GitHubStarredRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubStarredRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRepository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a starred repository. */
export type GitHubStarredRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHubRepository;
  /** Identifies when the item was starred. */
  starredAt: Scalars["GitHubDateTime"];
};

/** Represents a commit status. */
export type GitHubStatus = GitHubNode & {
  /** The commit this status is attached to. */
  commit?: Maybe<GitHubCommit>;
  /** Looks up an individual status context by context name. */
  context?: Maybe<GitHubStatusContext>;
  /** The individual status contexts for this commit. */
  contexts: Array<GitHubStatusContext>;
  id: Scalars["ID"];
  /** The combined commit status. */
  state: GitHubStatusState;
};

/** Represents a commit status. */
export type GitHubStatusContextArgs = {
  name: Scalars["String"];
};

/** Represents an individual commit status context */
export type GitHubStatusContext = GitHubNode & {
  /** This commit this status context is attached to. */
  commit?: Maybe<GitHubCommit>;
  /** The name of this status context. */
  context: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The actor who created this status context. */
  creator?: Maybe<GitHubActor>;
  /** The description for this status context. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The state of this status context. */
  state: GitHubStatusState;
  /** The URL for this status context. */
  targetUrl?: Maybe<Scalars["GitHubURI"]>;
};

/** The possible commit status states. */
export enum GitHubStatusState {
  /** Status is expected. */
  Expected = "EXPECTED",
  /** Status is errored. */
  Error = "ERROR",
  /** Status is failing. */
  Failure = "FAILURE",
  /** Status is pending. */
  Pending = "PENDING",
  /** Status is successful. */
  Success = "SUCCESS"
}

/** Autogenerated input type of SubmitPullRequestReview */
export type GitHubSubmitPullRequestReviewInput = {
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId: Scalars["ID"];
  /** The event to send to the Pull Request Review. */
  event: GitHubPullRequestReviewEvent;
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of SubmitPullRequestReview */
export type GitHubSubmitPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The submitted pull request review. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
};

/** Entities that can be subscribed to for web and email notifications. */
export type GitHubSubscribable = {
  id: Scalars["ID"];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars["Boolean"];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHubSubscriptionState>;
};

/** Represents a 'subscribed' event on a given `Subscribable`. */
export type GitHubSubscribedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Object referenced by event. */
  subscribable: GitHubSubscribable;
};

/** The possible states of a subscription. */
export enum GitHubSubscriptionState {
  /** The User is only notified when participating or @mentioned. */
  Unsubscribed = "UNSUBSCRIBED",
  /** The User is notified of all conversations. */
  Subscribed = "SUBSCRIBED",
  /** The User is never notified. */
  Ignored = "IGNORED"
}

/** A suggestion to review a pull request based on a user's commit history and review comments. */
export type GitHubSuggestedReviewer = {
  /** Is this suggestion based on past commits? */
  isAuthor: Scalars["Boolean"];
  /** Is this suggestion based on past review comments? */
  isCommenter: Scalars["Boolean"];
  /** Identifies the user suggested to review the pull request. */
  reviewer: GitHubUser;
};

/** Represents a Git tag. */
export type GitHubTag = GitHubNode &
  GitHubGitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHubURI"];
    id: Scalars["ID"];
    /** The Git tag message. */
    message?: Maybe<Scalars["String"]>;
    /** The Git tag name. */
    name: Scalars["String"];
    /** The Git object ID */
    oid: Scalars["GitHubGitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHubRepository;
    /** Details about the tag author. */
    tagger?: Maybe<GitHubGitActor>;
    /** The Git object the tag points to. */
    target: GitHubGitObject;
  };

/** A team of users in an organization. */
export type GitHubTeam = GitHubNode &
  GitHubSubscribable &
  GitHubMemberStatusable & {
    /** A list of teams that are ancestors of this team. */
    ancestors: GitHubTeamConnection;
    /** A URL pointing to the team's avatar. */
    avatarUrl?: Maybe<Scalars["GitHubURI"]>;
    /** List of child teams belonging to this team */
    childTeams: GitHubTeamConnection;
    /** The slug corresponding to the organization and team. */
    combinedSlug: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** The description of the team. */
    description?: Maybe<Scalars["String"]>;
    /** The HTTP path for editing this team */
    editTeamResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for editing this team */
    editTeamUrl: Scalars["GitHubURI"];
    id: Scalars["ID"];
    /** A list of pending invitations for users to this team */
    invitations?: Maybe<GitHubOrganizationInvitationConnection>;
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: GitHubUserStatusConnection;
    /** A list of users who are members of this team. */
    members: GitHubTeamMemberConnection;
    /** The HTTP path for the team' members */
    membersResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for the team' members */
    membersUrl: Scalars["GitHubURI"];
    /** The name of the team. */
    name: Scalars["String"];
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["GitHubURI"];
    /** The organization that owns this team. */
    organization: GitHubOrganization;
    /** The parent team of the team. */
    parentTeam?: Maybe<GitHubTeam>;
    /** The level of privacy the team has. */
    privacy: GitHubTeamPrivacy;
    /** A list of repositories this team has access to. */
    repositories: GitHubTeamRepositoryConnection;
    /** The HTTP path for this team's repositories */
    repositoriesResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this team's repositories */
    repositoriesUrl: Scalars["GitHubURI"];
    /** The HTTP path for this team */
    resourcePath: Scalars["GitHubURI"];
    /** The slug corresponding to the team. */
    slug: Scalars["String"];
    /** The HTTP path for this team's teams */
    teamsResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this team's teams */
    teamsUrl: Scalars["GitHubURI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this team */
    url: Scalars["GitHubURI"];
    /** Team is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHubSubscriptionState>;
  };

/** A team of users in an organization. */
export type GitHubTeamAncestorsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHubTeamAvatarUrlArgs = {
  size: Scalars["Int"];
};

/** A team of users in an organization. */
export type GitHubTeamChildTeamsArgs = {
  orderBy?: Maybe<GitHubTeamOrder>;
  userLogins?: Maybe<Array<Scalars["String"]>>;
  immediateOnly: Scalars["Boolean"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHubTeamInvitationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHubTeamMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubUserStatusOrder>;
};

/** A team of users in an organization. */
export type GitHubTeamMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
  membership: GitHubTeamMembershipType;
  role?: Maybe<GitHubTeamMemberRole>;
  orderBy?: Maybe<GitHubTeamMemberOrder>;
};

/** A team of users in an organization. */
export type GitHubTeamRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubTeamRepositoryOrder>;
};

/** The connection type for Team. */
export type GitHubTeamConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubTeamEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubTeam>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubTeamEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubTeam>;
};

/** The connection type for User. */
export type GitHubTeamMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubTeamMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user who is a member of a team. */
export type GitHubTeamMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The HTTP path to the organization's member access page. */
  memberAccessResourcePath: Scalars["GitHubURI"];
  /** The HTTP URL to the organization's member access page. */
  memberAccessUrl: Scalars["GitHubURI"];
  node: GitHubUser;
  /** The role the member has on the team. */
  role: GitHubTeamMemberRole;
};

/** Ordering options for team member connections */
export type GitHubTeamMemberOrder = {
  /** The field to order team members by. */
  field: GitHubTeamMemberOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which team member connections can be ordered. */
export enum GitHubTeamMemberOrderField {
  /** Order team members by login */
  Login = "LOGIN",
  /** Order team members by creation time */
  CreatedAt = "CREATED_AT"
}

/** The possible team member roles; either 'maintainer' or 'member'. */
export enum GitHubTeamMemberRole {
  /** A team maintainer has permission to add and remove team members. */
  Maintainer = "MAINTAINER",
  /** A team member has no administrative permissions on the team. */
  Member = "MEMBER"
}

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum GitHubTeamMembershipType {
  /** Includes only immediate members of the team. */
  Immediate = "IMMEDIATE",
  /** Includes only child team members for the team. */
  ChildTeam = "CHILD_TEAM",
  /** Includes immediate and child team members for the team. */
  All = "ALL"
}

/** Ways in which team connections can be ordered. */
export type GitHubTeamOrder = {
  /** The field in which to order nodes by. */
  field: GitHubTeamOrderField;
  /** The direction in which to order nodes. */
  direction: GitHubOrderDirection;
};

/** Properties by which team connections can be ordered. */
export enum GitHubTeamOrderField {
  /** Allows ordering a list of teams by name. */
  Name = "NAME"
}

/** The possible team privacy values. */
export enum GitHubTeamPrivacy {
  /** A secret team can only be seen by its members. */
  Secret = "SECRET",
  /** A visible team can be seen and @mentioned by every member of the organization. */
  Visible = "VISIBLE"
}

/** The connection type for Repository. */
export type GitHubTeamRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubTeamRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubRepository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a team repository. */
export type GitHubTeamRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHubRepository;
  /** The permission level the team has on the repository */
  permission: GitHubRepositoryPermission;
};

/** Ordering options for team repository connections */
export type GitHubTeamRepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHubTeamRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which team repository connections can be ordered. */
export enum GitHubTeamRepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by permission */
  Permission = "PERMISSION",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS"
}

/** The role of a user on a team. */
export enum GitHubTeamRole {
  /** User has admin rights on the team. */
  Admin = "ADMIN",
  /** User is a member of the team. */
  Member = "MEMBER"
}

/** A text match within a search result. */
export type GitHubTextMatch = {
  /** The specific text fragment within the property matched on. */
  fragment: Scalars["String"];
  /** Highlights within the matched fragment. */
  highlights: Array<GitHubTextMatchHighlight>;
  /** The property matched on. */
  property: Scalars["String"];
};

/** Represents a single highlight in a search result match. */
export type GitHubTextMatchHighlight = {
  /** The indice in the fragment where the matched text begins. */
  beginIndice: Scalars["Int"];
  /** The indice in the fragment where the matched text ends. */
  endIndice: Scalars["Int"];
  /** The text matched. */
  text: Scalars["String"];
};

/** A topic aggregates entities that are related to a subject. */
export type GitHubTopic = GitHubNode &
  GitHubStarrable & {
    id: Scalars["ID"];
    /** The topic's name. */
    name: Scalars["String"];
    /** A list of related topics, including aliases of this topic, sorted with the most relevant
     * first. Returns up to 10 Topics.
     */
    relatedTopics: Array<GitHubTopic>;
    /** A list of users who have starred this starrable. */
    stargazers: GitHubStargazerConnection;
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
  };

/** A topic aggregates entities that are related to a subject. */
export type GitHubTopicRelatedTopicsArgs = {
  first: Scalars["Int"];
};

/** A topic aggregates entities that are related to a subject. */
export type GitHubTopicStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHubStarOrder>;
};

/** The connection type for Topic. */
export type GitHubTopicConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubTopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubTopic>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubTopicEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubTopic>;
};

/** Reason that the suggested topic is declined. */
export enum GitHubTopicSuggestionDeclineReason {
  /** The suggested topic is not relevant to the repository. */
  NotRelevant = "NOT_RELEVANT",
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  TooSpecific = "TOO_SPECIFIC",
  /** The viewer does not like the suggested topic. */
  PersonalPreference = "PERSONAL_PREFERENCE",
  /** The suggested topic is too general for the repository. */
  TooGeneral = "TOO_GENERAL"
}

/** Represents a 'transferred' event on a given issue or pull request. */
export type GitHubTransferredEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** The repository this came from */
  fromRepository?: Maybe<GitHubRepository>;
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHubIssue;
};

/** Represents a Git tree. */
export type GitHubTree = GitHubNode &
  GitHubGitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHubURI"];
    /** A list of tree entries. */
    entries?: Maybe<Array<GitHubTreeEntry>>;
    id: Scalars["ID"];
    /** The Git object ID */
    oid: Scalars["GitHubGitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHubRepository;
  };

/** Represents a Git tree entry. */
export type GitHubTreeEntry = {
  /** Entry file mode. */
  mode: Scalars["Int"];
  /** Entry file name. */
  name: Scalars["String"];
  /** Entry file object. */
  object?: Maybe<GitHubGitObject>;
  /** Entry file Git object ID. */
  oid: Scalars["GitHubGitObjectID"];
  /** The Repository the tree entry belongs to */
  repository: GitHubRepository;
  /** Entry file type. */
  type: Scalars["String"];
};

/** Represents an 'unassigned' event on any assignable object. */
export type GitHubUnassignedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHubAssignable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the subject (user) who was unassigned. */
  user?: Maybe<GitHubUser>;
};

/** Represents a type that can be retrieved by a URL. */
export type GitHubUniformResourceLocatable = {
  /** The HTML path to this resource. */
  resourcePath: Scalars["GitHubURI"];
  /** The URL to this resource. */
  url: Scalars["GitHubURI"];
};

/** Represents an unknown signature on a Commit or Tag. */
export type GitHubUnknownSignature = GitHubGitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHubUser>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHubGitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** Represents an 'unlabeled' event on a given issue or pull request. */
export type GitHubUnlabeledEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the label associated with the 'unlabeled' event. */
  label: GitHubLabel;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHubLabelable;
};

/** Represents an 'unlocked' event on a given issue or pull request. */
export type GitHubUnlockedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Object that was unlocked. */
  lockable: GitHubLockable;
};

/** Autogenerated input type of UnlockLockable */
export type GitHubUnlockLockableInput = {
  /** ID of the issue or pull request to be unlocked. */
  lockableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnlockLockable */
export type GitHubUnlockLockablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was unlocked. */
  unlockedRecord?: Maybe<GitHubLockable>;
};

/** Autogenerated input type of UnmarkIssueAsDuplicate */
export type GitHubUnmarkIssueAsDuplicateInput = {
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: Scalars["ID"];
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnmarkIssueAsDuplicate */
export type GitHubUnmarkIssueAsDuplicatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue or pull request that was marked as a duplicate. */
  duplicate?: Maybe<GitHubIssueOrPullRequest>;
};

/** Autogenerated input type of UnminimizeComment */
export type GitHubUnminimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of UnpinIssue */
export type GitHubUnpinIssueInput = {
  /** The ID of the issue to be unpinned */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents an 'unpinned' event on a given issue or pull request. */
export type GitHubUnpinnedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHubIssue;
};

/** Autogenerated input type of UnresolveReviewThread */
export type GitHubUnresolveReviewThreadInput = {
  /** The ID of the thread to unresolve */
  threadId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnresolveReviewThread */
export type GitHubUnresolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The thread to resolve. */
  thread?: Maybe<GitHubPullRequestReviewThread>;
};

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export type GitHubUnsubscribedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** Object referenced by event. */
  subscribable: GitHubSubscribable;
};

/** Entities that can be updated. */
export type GitHubUpdatable = {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars["Boolean"];
};

/** Comments that can be updated. */
export type GitHubUpdatableComment = {
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHubCommentCannotUpdateReason>;
};

/** Autogenerated input type of UpdateBranchProtectionRule */
export type GitHubUpdateBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: Scalars["ID"];
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<Scalars["String"]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateBranchProtectionRule */
export type GitHubUpdateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHubBranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of UpdateIssueComment */
export type GitHubUpdateIssueCommentInput = {
  /** The ID of the IssueComment to modify. */
  id: Scalars["ID"];
  /** The updated text of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateIssueComment */
export type GitHubUpdateIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated comment. */
  issueComment?: Maybe<GitHubIssueComment>;
};

/** Autogenerated input type of UpdateIssue */
export type GitHubUpdateIssueInput = {
  /** The ID of the Issue to modify. */
  id: Scalars["ID"];
  /** The title for the issue. */
  title?: Maybe<Scalars["String"]>;
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>;
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>;
  /** The desired issue state. */
  state?: Maybe<GitHubIssueState>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateIssue */
export type GitHubUpdateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue. */
  issue?: Maybe<GitHubIssue>;
};

/** Autogenerated input type of UpdateProjectCard */
export type GitHubUpdateProjectCardInput = {
  /** The ProjectCard ID to update. */
  projectCardId: Scalars["ID"];
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<Scalars["Boolean"]>;
  /** The note of ProjectCard. */
  note?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProjectCard */
export type GitHubUpdateProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHubProjectCard>;
};

/** Autogenerated input type of UpdateProjectColumn */
export type GitHubUpdateProjectColumnInput = {
  /** The ProjectColumn ID to update. */
  projectColumnId: Scalars["ID"];
  /** The name of project column. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProjectColumn */
export type GitHubUpdateProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated project column. */
  projectColumn?: Maybe<GitHubProjectColumn>;
};

/** Autogenerated input type of UpdateProject */
export type GitHubUpdateProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars["ID"];
  /** The name of project. */
  name?: Maybe<Scalars["String"]>;
  /** The description of project. */
  body?: Maybe<Scalars["String"]>;
  /** Whether the project is open or closed. */
  state?: Maybe<GitHubProjectState>;
  /** Whether the project is public or not. */
  public?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProject */
export type GitHubUpdateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated project. */
  project?: Maybe<GitHubProject>;
};

/** Autogenerated input type of UpdatePullRequest */
export type GitHubUpdatePullRequestInput = {
  /** The Node ID of the pull request. */
  pullRequestId: Scalars["ID"];
  /** The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository.
   */
  baseRefName?: Maybe<Scalars["String"]>;
  /** The title of the pull request. */
  title?: Maybe<Scalars["String"]>;
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequest */
export type GitHubUpdatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated pull request. */
  pullRequest?: Maybe<GitHubPullRequest>;
};

/** Autogenerated input type of UpdatePullRequestReviewComment */
export type GitHubUpdatePullRequestReviewCommentInput = {
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: Scalars["ID"];
  /** The text of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequestReviewComment */
export type GitHubUpdatePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated comment. */
  pullRequestReviewComment?: Maybe<GitHubPullRequestReviewComment>;
};

/** Autogenerated input type of UpdatePullRequestReview */
export type GitHubUpdatePullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The contents of the pull request review body. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequestReview */
export type GitHubUpdatePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated pull request review. */
  pullRequestReview?: Maybe<GitHubPullRequestReview>;
};

/** Autogenerated input type of UpdateSubscription */
export type GitHubUpdateSubscriptionInput = {
  /** The Node ID of the subscribable object to modify. */
  subscribableId: Scalars["ID"];
  /** The new state of the subscription. */
  state: GitHubSubscriptionState;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateSubscription */
export type GitHubUpdateSubscriptionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The input subscribable entity. */
  subscribable?: Maybe<GitHubSubscribable>;
};

/** Autogenerated input type of UpdateTopics */
export type GitHubUpdateTopicsInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** An array of topic names. */
  topicNames: Array<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateTopics */
export type GitHubUpdateTopicsPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Names of the provided topics that are not valid. */
  invalidTopicNames?: Maybe<Array<Scalars["String"]>>;
  /** The updated repository. */
  repository?: Maybe<GitHubRepository>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUser = GitHubNode &
  GitHubActor &
  GitHubRegistryPackageOwner &
  GitHubRegistryPackageSearch &
  GitHubProjectOwner &
  GitHubRepositoryOwner &
  GitHubUniformResourceLocatable &
  GitHubProfileOwner & {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"];
    /** A URL pointing to the user's public avatar. */
    avatarUrl: Scalars["GitHubURI"];
    /** The user's public profile bio. */
    bio?: Maybe<Scalars["String"]>;
    /** The user's public profile bio as HTML. */
    bioHTML: Scalars["GitHubHTML"];
    /** A list of commit comments made by this user. */
    commitComments: GitHubCommitCommentConnection;
    /** The user's public profile company. */
    company?: Maybe<Scalars["String"]>;
    /** The user's public profile company as HTML. */
    companyHTML: Scalars["GitHubHTML"];
    /** The collection of contributions this user has made to different repositories. */
    contributionsCollection: GitHubContributionsCollection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHubDateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The user's publicly visible profile email. */
    email: Scalars["String"];
    /** A list of users the given user is followed by. */
    followers: GitHubFollowerConnection;
    /** A list of users the given user is following. */
    following: GitHubFollowingConnection;
    /** Find gist by repo name. */
    gist?: Maybe<GitHubGist>;
    /** A list of gist comments made by this user. */
    gistComments: GitHubGistCommentConnection;
    /** A list of the Gists the user has created. */
    gists: GitHubGistConnection;
    id: Scalars["ID"];
    /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
    isBountyHunter: Scalars["Boolean"];
    /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
    isCampusExpert: Scalars["Boolean"];
    /** Whether or not this user is a GitHub Developer Program member. */
    isDeveloperProgramMember: Scalars["Boolean"];
    /** Whether or not this user is a GitHub employee. */
    isEmployee: Scalars["Boolean"];
    /** Whether or not the user has marked themselves as for hire. */
    isHireable: Scalars["Boolean"];
    /** Whether or not this user is a site administrator. */
    isSiteAdmin: Scalars["Boolean"];
    /** Whether or not this user is the viewing user. */
    isViewer: Scalars["Boolean"];
    /** A list of issue comments made by this user. */
    issueComments: GitHubIssueCommentConnection;
    /** A list of issues associated with this user. */
    issues: GitHubIssueConnection;
    /** Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: GitHubProfileItemShowcase;
    /** The user's public profile location. */
    location?: Maybe<Scalars["String"]>;
    /** The username used to login. */
    login: Scalars["String"];
    /** The user's public profile name. */
    name?: Maybe<Scalars["String"]>;
    /** Find an organization by its login that the user belongs to. */
    organization?: Maybe<GitHubOrganization>;
    /** A list of organizations the user belongs to. */
    organizations: GitHubOrganizationConnection;
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: GitHubPinnableItemConnection;
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: GitHubPinnableItemConnection;
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"];
    /** A list of repositories this user has pinned to their profile */
    pinnedRepositories: GitHubRepositoryConnection;
    /** Find project by number. */
    project?: Maybe<GitHubProject>;
    /** A list of projects under the owner. */
    projects: GitHubProjectConnection;
    /** The HTTP path listing user's projects */
    projectsResourcePath: Scalars["GitHubURI"];
    /** The HTTP URL listing user's projects */
    projectsUrl: Scalars["GitHubURI"];
    /** A list of public keys associated with this user. */
    publicKeys: GitHubPublicKeyConnection;
    /** A list of pull requests associated with this user. */
    pullRequests: GitHubPullRequestConnection;
    /** A list of repositories that the user owns. */
    repositories: GitHubRepositoryConnection;
    /** A list of repositories that the user recently contributed to. */
    repositoriesContributedTo: GitHubRepositoryConnection;
    /** Find Repository. */
    repository?: Maybe<GitHubRepository>;
    /** The HTTP path for this user */
    resourcePath: Scalars["GitHubURI"];
    /** Repositories the user has starred. */
    starredRepositories: GitHubStarredRepositoryConnection;
    /** The user's description of what they're currently doing. */
    status?: Maybe<GitHubUserStatus>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHubDateTime"];
    /** The HTTP URL for this user */
    url: Scalars["GitHubURI"];
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Whether or not the viewer is able to follow the user. */
    viewerCanFollow: Scalars["Boolean"];
    /** Whether or not this user is followed by the viewer. */
    viewerIsFollowing: Scalars["Boolean"];
    /** A list of repositories the given user is watching. */
    watching: GitHubRepositoryConnection;
    /** A URL pointing to the user's public website/blog. */
    websiteUrl?: Maybe<Scalars["GitHubURI"]>;
  };

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserAnyPinnableItemsArgs = {
  type?: Maybe<GitHubPinnableItemType>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars["ID"]>;
  from?: Maybe<Scalars["GitHubDateTime"]>;
  to?: Maybe<Scalars["GitHubDateTime"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserFollowersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserFollowingArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserGistArgs = {
  name: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserGistCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserGistsArgs = {
  privacy?: Maybe<GitHubGistPrivacy>;
  orderBy?: Maybe<GitHubGistOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserIssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserIssuesArgs = {
  orderBy?: Maybe<GitHubIssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHubIssueState>>;
  filterBy?: Maybe<GitHubIssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserOrganizationArgs = {
  login: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserPinnableItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserPinnedItemsArgs = {
  types?: Maybe<Array<GitHubPinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserProjectArgs = {
  number: Scalars["Int"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserProjectsArgs = {
  orderBy?: Maybe<GitHubProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHubProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserPublicKeysArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserPullRequestsArgs = {
  states?: Maybe<Array<GitHubPullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHubIssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserRepositoriesArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserRepositoriesContributedToArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  includeUserRepositories?: Maybe<Scalars["Boolean"]>;
  contributionTypes?: Maybe<Array<Maybe<GitHubRepositoryContributionType>>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserRepositoryArgs = {
  name: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserStarredRepositoriesArgs = {
  ownedByViewer?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<GitHubStarOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHubUserWatchingArgs = {
  privacy?: Maybe<GitHubRepositoryPrivacy>;
  orderBy?: Maybe<GitHubRepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHubRepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The possible durations that a user can be blocked for. */
export enum GitHubUserBlockDuration {
  /** The user was blocked for 1 day */
  OneDay = "ONE_DAY",
  /** The user was blocked for 3 days */
  ThreeDays = "THREE_DAYS",
  /** The user was blocked for 7 days */
  OneWeek = "ONE_WEEK",
  /** The user was blocked for 30 days */
  OneMonth = "ONE_MONTH",
  /** The user was blocked permanently */
  Permanent = "PERMANENT"
}

/** Represents a 'user_blocked' event on a given user. */
export type GitHubUserBlockedEvent = GitHubNode & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHubActor>;
  /** Number of days that the user was blocked for. */
  blockDuration: GitHubUserBlockDuration;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  id: Scalars["ID"];
  /** The user who was blocked. */
  subject?: Maybe<GitHubUser>;
};

/** The connection type for User. */
export type GitHubUserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUser>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edit on user content */
export type GitHubUserContentEdit = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** Identifies the date and time when the object was deleted. */
  deletedAt?: Maybe<Scalars["GitHubDateTime"]>;
  /** The actor who deleted this content */
  deletedBy?: Maybe<GitHubActor>;
  /** A summary of the changes for this edit */
  diff?: Maybe<Scalars["String"]>;
  /** When this content was edited */
  editedAt: Scalars["GitHubDateTime"];
  /** The actor who edited this content */
  editor?: Maybe<GitHubActor>;
  id: Scalars["ID"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
};

/** A list of edits to content. */
export type GitHubUserContentEditConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubUserContentEditEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUserContentEdit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubUserContentEditEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubUserContentEdit>;
};

/** Represents a user. */
export type GitHubUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubUser>;
};

/** The user's description of what they're currently doing. */
export type GitHubUserStatus = GitHubNode & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHubDateTime"];
  /** An emoji summarizing the user's status. */
  emoji?: Maybe<Scalars["String"]>;
  /** ID of the object. */
  id: Scalars["ID"];
  /** Whether this status indicates the user is not fully available on GitHub. */
  indicatesLimitedAvailability: Scalars["Boolean"];
  /** A brief message describing what the user is doing. */
  message?: Maybe<Scalars["String"]>;
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  organization?: Maybe<GitHubOrganization>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHubDateTime"];
  /** The user who has this status. */
  user: GitHubUser;
};

/** The connection type for UserStatus. */
export type GitHubUserStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHubUserStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHubUserStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHubPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHubUserStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHubUserStatus>;
};

/** Ordering options for user status connections. */
export type GitHubUserStatusOrder = {
  /** The field to order user statuses by. */
  field: GitHubUserStatusOrderField;
  /** The ordering direction. */
  direction: GitHubOrderDirection;
};

/** Properties by which user status connections can be ordered. */
export enum GitHubUserStatusOrderField {
  /** Order user statuses by when they were updated. */
  UpdatedAt = "UPDATED_AT"
}

export type Mutation = {
  updateBoard?: Maybe<Board>;
  deleteBoard?: Maybe<Board>;
  createColumn: Column;
  updateColumn?: Maybe<Column>;
  deleteColumn?: Maybe<Column>;
  signIn: SignInPayload;
  signOut: Scalars["Boolean"];
  createBoard: Board;
};

export type MutationUpdateBoardArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};

export type MutationDeleteBoardArgs = {
  where: BoardWhereUniqueInput;
};

export type MutationCreateColumnArgs = {
  data: ColumnCreateInput;
};

export type MutationUpdateColumnArgs = {
  data: ColumnUpdateInput;
  where: ColumnWhereUniqueInput;
};

export type MutationDeleteColumnArgs = {
  where: ColumnWhereUniqueInput;
};

export type MutationSignInArgs = {
  gitHubCode: Scalars["String"];
};

export type MutationCreateBoardArgs = {
  data: BoardCreateInput;
};

export type Query = {
  board?: Maybe<Board>;
  isSignedIn: Scalars["Boolean"];
  signedInUser: User;
  /** Perform a search across resources. */
  search: GitHubSearchResultItemConnection;
  /** The currently authenticated user. */
  viewer: GitHubUser;
};

export type QueryBoardArgs = {
  where: BoardWhereUniqueInput;
};

export type QuerySearchArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query: Scalars["String"];
  type: GitHubSearchType;
};

export type SignInPayload = {
  token: Scalars["String"];
};

export type User = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  gitHubId: Scalars["ID"];
  boards?: Maybe<Array<Board>>;
};

export type UserBoardsArgs = {
  where?: Maybe<BoardWhereInput>;
  orderBy?: Maybe<BoardOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserCreateOneWithoutBoardsInput = {
  create?: Maybe<UserCreateWithoutBoardsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutBoardsInput = {
  gitHubId: Scalars["ID"];
};

export type UserUpdateOneRequiredWithoutBoardsInput = {
  create?: Maybe<UserCreateWithoutBoardsInput>;
  update?: Maybe<UserUpdateWithoutBoardsDataInput>;
  upsert?: Maybe<UserUpsertWithoutBoardsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutBoardsDataInput = {
  gitHubId?: Maybe<Scalars["ID"]>;
};

export type UserUpsertWithoutBoardsInput = {
  update: UserUpdateWithoutBoardsDataInput;
  create: UserCreateWithoutBoardsInput;
};

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  gitHubId?: Maybe<Scalars["ID"]>;
  gitHubId_not?: Maybe<Scalars["ID"]>;
  gitHubId_in?: Maybe<Array<Scalars["ID"]>>;
  gitHubId_not_in?: Maybe<Array<Scalars["ID"]>>;
  gitHubId_lt?: Maybe<Scalars["ID"]>;
  gitHubId_lte?: Maybe<Scalars["ID"]>;
  gitHubId_gt?: Maybe<Scalars["ID"]>;
  gitHubId_gte?: Maybe<Scalars["ID"]>;
  gitHubId_contains?: Maybe<Scalars["ID"]>;
  gitHubId_not_contains?: Maybe<Scalars["ID"]>;
  gitHubId_starts_with?: Maybe<Scalars["ID"]>;
  gitHubId_not_starts_with?: Maybe<Scalars["ID"]>;
  gitHubId_ends_with?: Maybe<Scalars["ID"]>;
  gitHubId_not_ends_with?: Maybe<Scalars["ID"]>;
  boards_every?: Maybe<BoardWhereInput>;
  boards_some?: Maybe<BoardWhereInput>;
  boards_none?: Maybe<BoardWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  gitHubId?: Maybe<Scalars["ID"]>;
};
export type CreateBoardMutationVariables = {
  name: Scalars["String"];
  query: Scalars["String"];
};

export type CreateBoardMutation = { __typename?: "Mutation" } & {
  createBoard: { __typename?: "Board" } & Pick<Board, "id" | "name" | "query">;
};

export type CreateColumnMutationVariables = {
  boardId: Scalars["ID"];
  name: Scalars["String"];
  query: Scalars["String"];
};

export type CreateColumnMutation = { __typename?: "Mutation" } & {
  createColumn: { __typename?: "Column" } & Pick<
    Column,
    "id" | "name" | "query"
  >;
};

export type DeleteBoardMutationVariables = {
  id: Scalars["ID"];
};

export type DeleteBoardMutation = { __typename?: "Mutation" } & {
  deleteBoard: Maybe<{ __typename?: "Board" } & Pick<Board, "id">>;
};

export type DeleteColumnMutationVariables = {
  id: Scalars["ID"];
};

export type DeleteColumnMutation = { __typename?: "Mutation" } & {
  deleteColumn: Maybe<{ __typename?: "Column" } & Pick<Column, "id">>;
};

export type GetBoardQueryVariables = {
  id: Scalars["ID"];
};

export type GetBoardQuery = { __typename?: "Query" } & {
  board: Maybe<
    { __typename?: "Board" } & Pick<Board, "id" | "name" | "query"> & {
        columns: Maybe<
          Array<
            { __typename?: "Column" } & Pick<Column, "id" | "name" | "query">
          >
        >;
      }
  >;
};

export type GetBoardsQueryVariables = {};

export type GetBoardsQuery = { __typename?: "Query" } & {
  signedInUser: { __typename?: "User" } & {
    boards: Maybe<
      Array<{ __typename?: "Board" } & Pick<Board, "id" | "name" | "query">>
    >;
  };
};

export type GetIsSignedInQueryVariables = {};

export type GetIsSignedInQuery = { __typename?: "Query" } & Pick<
  Query,
  "isSignedIn"
>;

export type GetViewerQueryVariables = {};

export type GetViewerQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "GitHubUser" } & Pick<
    GitHubUser,
    "login" | "name" | "avatarUrl"
  >;
};

export type SearchGitHubQueryVariables = {
  query: Scalars["String"];
  endCursor?: Maybe<Scalars["String"]>;
};

export type SearchGitHubQuery = { __typename?: "Query" } & {
  search: { __typename?: "GitHubSearchResultItemConnection" } & Pick<
    GitHubSearchResultItemConnection,
    "issueCount"
  > & {
      pageInfo: { __typename?: "GitHubPageInfo" } & Pick<
        GitHubPageInfo,
        "endCursor" | "hasNextPage"
      >;
      issues: Maybe<
        Array<
          Maybe<

              | ({ __typename?: "GitHubIssue" } & Pick<
                  GitHubIssue,
                  "title" | "url"
                > & {
                    repository: { __typename?: "GitHubRepository" } & Pick<
                      GitHubRepository,
                      "nameWithOwner" | "url"
                    >;
                    author: Maybe<
                      {
                        __typename?:
                          | "GitHubUser"
                          | "GitHubOrganization"
                          | "GitHubBot";
                      } & Pick<GitHubActor, "login" | "url">
                    >;
                    labels: Maybe<
                      { __typename?: "GitHubLabelConnection" } & {
                        nodes: Maybe<
                          Array<
                            Maybe<
                              { __typename?: "GitHubLabel" } & Pick<
                                GitHubLabel,
                                "name" | "color"
                              >
                            >
                          >
                        >;
                      }
                    >;
                  })
              | ({ __typename?: "GitHubPullRequest" } & Pick<
                  GitHubPullRequest,
                  "title" | "url"
                > & {
                    repository: { __typename?: "GitHubRepository" } & Pick<
                      GitHubRepository,
                      "nameWithOwner" | "url"
                    >;
                    author: Maybe<
                      {
                        __typename?:
                          | "GitHubUser"
                          | "GitHubOrganization"
                          | "GitHubBot";
                      } & Pick<GitHubActor, "login" | "url">
                    >;
                    labels: Maybe<
                      { __typename?: "GitHubLabelConnection" } & {
                        nodes: Maybe<
                          Array<
                            Maybe<
                              { __typename?: "GitHubLabel" } & Pick<
                                GitHubLabel,
                                "name" | "color"
                              >
                            >
                          >
                        >;
                      }
                    >;
                  })
          >
        >
      >;
    };
};

export type SignInMutationVariables = {
  gitHubCode: Scalars["String"];
};

export type SignInMutation = { __typename?: "Mutation" } & {
  signIn: { __typename?: "SignInPayload" } & Pick<SignInPayload, "token">;
};

export type SignOutMutationVariables = {};

export type SignOutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "signOut"
>;

export type UpdateBoardMutationVariables = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type UpdateBoardMutation = { __typename?: "Mutation" } & {
  updateBoard: Maybe<
    { __typename?: "Board" } & Pick<Board, "id" | "name" | "query">
  >;
};

export type UpdateColumnMutationVariables = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
};

export type UpdateColumnMutation = { __typename?: "Mutation" } & {
  updateColumn: Maybe<
    { __typename?: "Column" } & Pick<Column, "id" | "name" | "query">
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const CreateBoardDocument = gql`
  mutation createBoard($name: String!, $query: String!) {
    createBoard(data: { name: $name, query: $query }) {
      id
      name
      query
    }
  }
`;
export type CreateBoardMutationFn = ReactApollo.MutationFn<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;

export const CreateBoardComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        CreateBoardMutation,
        CreateBoardMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: CreateBoardMutationVariables }
) => (
  <ReactApollo.Mutation<CreateBoardMutation, CreateBoardMutationVariables>
    mutation={CreateBoardDocument}
    {...props}
  />
);

export type CreateBoardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateBoardMutation, CreateBoardMutationVariables>
> &
  TChildProps;
export function withCreateBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateBoardMutation,
    CreateBoardMutationVariables,
    CreateBoardProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateBoardMutation,
    CreateBoardMutationVariables,
    CreateBoardProps<TChildProps>
  >(CreateBoardDocument, {
    alias: "withCreateBoard",
    ...operationOptions
  });
}
export const CreateColumnDocument = gql`
  mutation createColumn($boardId: ID!, $name: String!, $query: String!) {
    createColumn(
      data: { board: { connect: { id: $boardId } }, name: $name, query: $query }
    ) {
      id
      name
      query
    }
  }
`;
export type CreateColumnMutationFn = ReactApollo.MutationFn<
  CreateColumnMutation,
  CreateColumnMutationVariables
>;

export const CreateColumnComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        CreateColumnMutation,
        CreateColumnMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: CreateColumnMutationVariables }
) => (
  <ReactApollo.Mutation<CreateColumnMutation, CreateColumnMutationVariables>
    mutation={CreateColumnDocument}
    {...props}
  />
);

export type CreateColumnProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateColumnMutation, CreateColumnMutationVariables>
> &
  TChildProps;
export function withCreateColumn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateColumnMutation,
    CreateColumnMutationVariables,
    CreateColumnProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateColumnMutation,
    CreateColumnMutationVariables,
    CreateColumnProps<TChildProps>
  >(CreateColumnDocument, {
    alias: "withCreateColumn",
    ...operationOptions
  });
}
export const DeleteBoardDocument = gql`
  mutation deleteBoard($id: ID!) {
    deleteBoard(where: { id: $id }) {
      id
    }
  }
`;
export type DeleteBoardMutationFn = ReactApollo.MutationFn<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>;

export const DeleteBoardComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        DeleteBoardMutation,
        DeleteBoardMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: DeleteBoardMutationVariables }
) => (
  <ReactApollo.Mutation<DeleteBoardMutation, DeleteBoardMutationVariables>
    mutation={DeleteBoardDocument}
    {...props}
  />
);

export type DeleteBoardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeleteBoardMutation, DeleteBoardMutationVariables>
> &
  TChildProps;
export function withDeleteBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeleteBoardMutation,
    DeleteBoardMutationVariables,
    DeleteBoardProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteBoardMutation,
    DeleteBoardMutationVariables,
    DeleteBoardProps<TChildProps>
  >(DeleteBoardDocument, {
    alias: "withDeleteBoard",
    ...operationOptions
  });
}
export const DeleteColumnDocument = gql`
  mutation deleteColumn($id: ID!) {
    deleteColumn(where: { id: $id }) {
      id
    }
  }
`;
export type DeleteColumnMutationFn = ReactApollo.MutationFn<
  DeleteColumnMutation,
  DeleteColumnMutationVariables
>;

export const DeleteColumnComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        DeleteColumnMutation,
        DeleteColumnMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: DeleteColumnMutationVariables }
) => (
  <ReactApollo.Mutation<DeleteColumnMutation, DeleteColumnMutationVariables>
    mutation={DeleteColumnDocument}
    {...props}
  />
);

export type DeleteColumnProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeleteColumnMutation, DeleteColumnMutationVariables>
> &
  TChildProps;
export function withDeleteColumn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeleteColumnMutation,
    DeleteColumnMutationVariables,
    DeleteColumnProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteColumnMutation,
    DeleteColumnMutationVariables,
    DeleteColumnProps<TChildProps>
  >(DeleteColumnDocument, {
    alias: "withDeleteColumn",
    ...operationOptions
  });
}
export const GetBoardDocument = gql`
  query getBoard($id: ID!) {
    board(where: { id: $id }) {
      id
      name
      query
      columns {
        id
        name
        query
      }
    }
  }
`;

export const GetBoardComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<GetBoardQuery, GetBoardQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: GetBoardQueryVariables }
) => (
  <ReactApollo.Query<GetBoardQuery, GetBoardQueryVariables>
    query={GetBoardDocument}
    {...props}
  />
);

export type GetBoardProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetBoardQuery, GetBoardQueryVariables>
> &
  TChildProps;
export function withGetBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetBoardQuery,
    GetBoardQueryVariables,
    GetBoardProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetBoardQuery,
    GetBoardQueryVariables,
    GetBoardProps<TChildProps>
  >(GetBoardDocument, {
    alias: "withGetBoard",
    ...operationOptions
  });
}
export const GetBoardsDocument = gql`
  query getBoards {
    signedInUser {
      boards(orderBy: createdAt_DESC) {
        id
        name
        query
      }
    }
  }
`;

export const GetBoardsComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<GetBoardsQuery, GetBoardsQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: GetBoardsQueryVariables }
) => (
  <ReactApollo.Query<GetBoardsQuery, GetBoardsQueryVariables>
    query={GetBoardsDocument}
    {...props}
  />
);

export type GetBoardsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetBoardsQuery, GetBoardsQueryVariables>
> &
  TChildProps;
export function withGetBoards<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetBoardsQuery,
    GetBoardsQueryVariables,
    GetBoardsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetBoardsQuery,
    GetBoardsQueryVariables,
    GetBoardsProps<TChildProps>
  >(GetBoardsDocument, {
    alias: "withGetBoards",
    ...operationOptions
  });
}
export const GetIsSignedInDocument = gql`
  query getIsSignedIn {
    isSignedIn
  }
`;

export const GetIsSignedInComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<GetIsSignedInQuery, GetIsSignedInQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: GetIsSignedInQueryVariables }
) => (
  <ReactApollo.Query<GetIsSignedInQuery, GetIsSignedInQueryVariables>
    query={GetIsSignedInDocument}
    {...props}
  />
);

export type GetIsSignedInProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetIsSignedInQuery, GetIsSignedInQueryVariables>
> &
  TChildProps;
export function withGetIsSignedIn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetIsSignedInQuery,
    GetIsSignedInQueryVariables,
    GetIsSignedInProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetIsSignedInQuery,
    GetIsSignedInQueryVariables,
    GetIsSignedInProps<TChildProps>
  >(GetIsSignedInDocument, {
    alias: "withGetIsSignedIn",
    ...operationOptions
  });
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

export const GetViewerComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<GetViewerQuery, GetViewerQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: GetViewerQueryVariables }
) => (
  <ReactApollo.Query<GetViewerQuery, GetViewerQueryVariables>
    query={GetViewerDocument}
    {...props}
  />
);

export type GetViewerProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetViewerQuery, GetViewerQueryVariables>
> &
  TChildProps;
export function withGetViewer<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetViewerQuery,
    GetViewerQueryVariables,
    GetViewerProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetViewerQuery,
    GetViewerQueryVariables,
    GetViewerProps<TChildProps>
  >(GetViewerDocument, {
    alias: "withGetViewer",
    ...operationOptions
  });
}
export const SearchGitHubDocument = gql`
  query searchGitHub($query: String!, $endCursor: String) {
    search(first: 10, type: ISSUE, query: $query, after: $endCursor) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
      issues: nodes {
        ... on GitHubIssue {
          title
          url
          repository {
            nameWithOwner
            url
          }
          author {
            login
            url
          }
          labels(first: 10) {
            nodes {
              name
              color
            }
          }
        }
        ... on GitHubPullRequest {
          title
          url
          repository {
            nameWithOwner
            url
          }
          author {
            login
            url
          }
          labels(first: 10) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const SearchGitHubComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<SearchGitHubQuery, SearchGitHubQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: SearchGitHubQueryVariables }
) => (
  <ReactApollo.Query<SearchGitHubQuery, SearchGitHubQueryVariables>
    query={SearchGitHubDocument}
    {...props}
  />
);

export type SearchGitHubProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SearchGitHubQuery, SearchGitHubQueryVariables>
> &
  TChildProps;
export function withSearchGitHub<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SearchGitHubQuery,
    SearchGitHubQueryVariables,
    SearchGitHubProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    SearchGitHubQuery,
    SearchGitHubQueryVariables,
    SearchGitHubProps<TChildProps>
  >(SearchGitHubDocument, {
    alias: "withSearchGitHub",
    ...operationOptions
  });
}
export const SignInDocument = gql`
  mutation signIn($gitHubCode: String!) {
    signIn(gitHubCode: $gitHubCode) {
      token
    }
  }
`;
export type SignInMutationFn = ReactApollo.MutationFn<
  SignInMutation,
  SignInMutationVariables
>;

export const SignInComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<SignInMutation, SignInMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: SignInMutationVariables }
) => (
  <ReactApollo.Mutation<SignInMutation, SignInMutationVariables>
    mutation={SignInDocument}
    {...props}
  />
);

export type SignInProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignInMutation, SignInMutationVariables>
> &
  TChildProps;
export function withSignIn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignInMutation,
    SignInMutationVariables,
    SignInProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignInMutation,
    SignInMutationVariables,
    SignInProps<TChildProps>
  >(SignInDocument, {
    alias: "withSignIn",
    ...operationOptions
  });
}
export const SignOutDocument = gql`
  mutation signOut {
    signOut
  }
`;
export type SignOutMutationFn = ReactApollo.MutationFn<
  SignOutMutation,
  SignOutMutationVariables
>;

export const SignOutComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<SignOutMutation, SignOutMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: SignOutMutationVariables }
) => (
  <ReactApollo.Mutation<SignOutMutation, SignOutMutationVariables>
    mutation={SignOutDocument}
    {...props}
  />
);

export type SignOutProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignOutMutation, SignOutMutationVariables>
> &
  TChildProps;
export function withSignOut<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignOutMutation,
    SignOutMutationVariables,
    SignOutProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignOutMutation,
    SignOutMutationVariables,
    SignOutProps<TChildProps>
  >(SignOutDocument, {
    alias: "withSignOut",
    ...operationOptions
  });
}
export const UpdateBoardDocument = gql`
  mutation updateBoard($id: ID!, $name: String, $query: String) {
    updateBoard(where: { id: $id }, data: { name: $name, query: $query }) {
      id
      name
      query
    }
  }
`;
export type UpdateBoardMutationFn = ReactApollo.MutationFn<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;

export const UpdateBoardComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        UpdateBoardMutation,
        UpdateBoardMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: UpdateBoardMutationVariables }
) => (
  <ReactApollo.Mutation<UpdateBoardMutation, UpdateBoardMutationVariables>
    mutation={UpdateBoardDocument}
    {...props}
  />
);

export type UpdateBoardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdateBoardMutation, UpdateBoardMutationVariables>
> &
  TChildProps;
export function withUpdateBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateBoardMutation,
    UpdateBoardMutationVariables,
    UpdateBoardProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateBoardMutation,
    UpdateBoardMutationVariables,
    UpdateBoardProps<TChildProps>
  >(UpdateBoardDocument, {
    alias: "withUpdateBoard",
    ...operationOptions
  });
}
export const UpdateColumnDocument = gql`
  mutation updateColumn($id: ID!, $name: String, $query: String) {
    updateColumn(where: { id: $id }, data: { name: $name, query: $query }) {
      id
      name
      query
    }
  }
`;
export type UpdateColumnMutationFn = ReactApollo.MutationFn<
  UpdateColumnMutation,
  UpdateColumnMutationVariables
>;

export const UpdateColumnComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        UpdateColumnMutation,
        UpdateColumnMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: UpdateColumnMutationVariables }
) => (
  <ReactApollo.Mutation<UpdateColumnMutation, UpdateColumnMutationVariables>
    mutation={UpdateColumnDocument}
    {...props}
  />
);

export type UpdateColumnProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdateColumnMutation, UpdateColumnMutationVariables>
> &
  TChildProps;
export function withUpdateColumn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateColumnMutation,
    UpdateColumnMutationVariables,
    UpdateColumnProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateColumnMutation,
    UpdateColumnMutationVariables,
    UpdateColumnProps<TChildProps>
  >(UpdateColumnDocument, {
    alias: "withUpdateColumn",
    ...operationOptions
  });
}
