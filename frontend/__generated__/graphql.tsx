export type Maybe<T> = T | null;

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

  githubId?: Maybe<string>;

  githubId_not?: Maybe<string>;

  githubId_in?: Maybe<string[]>;

  githubId_not_in?: Maybe<string[]>;

  githubId_lt?: Maybe<string>;

  githubId_lte?: Maybe<string>;

  githubId_gt?: Maybe<string>;

  githubId_gte?: Maybe<string>;

  githubId_contains?: Maybe<string>;

  githubId_not_contains?: Maybe<string>;

  githubId_starts_with?: Maybe<string>;

  githubId_not_starts_with?: Maybe<string>;

  githubId_ends_with?: Maybe<string>;

  githubId_not_ends_with?: Maybe<string>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface BoardWhereUniqueInput {
  id?: Maybe<string>;
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

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  GithubIdAsc = "githubId_ASC",
  GithubIdDesc = "githubId_DESC"
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

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

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

  name: Maybe<string>;

  query: Maybe<string>;

  columns: Maybe<GetBoardColumns[]>;
};

export type GetBoardColumns = {
  __typename?: "Column";

  id: string;

  index: number;

  name: Maybe<string>;

  query: Maybe<string>;
};

export type SignInVariables = {
  githubCode: string;
};

export type SignInMutation = {
  __typename?: "Mutation";

  signIn: boolean;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

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
export const SignInDocument = gql`
  mutation signIn($githubCode: String!) {
    signIn(githubCode: $githubCode)
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
