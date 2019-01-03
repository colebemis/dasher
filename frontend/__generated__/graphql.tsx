export type Maybe<T> = T | null;

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

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type DateTime = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type GetBoardVariables = {
  id?: Maybe<string>;
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

export type GetUsersVariables = {};

export type GetUsersQuery = {
  __typename?: "Query";

  users: GetUsersUsers[];
};

export type GetUsersUsers = {
  __typename?: "User";

  id: string;

  name: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const GetBoardDocument = gql`
  query getBoard($id: ID) {
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
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;
export class GetUsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUsersQuery, GetUsersVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUsersQuery, GetUsersVariables>
        query={GetUsersDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetUsersProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUsersQuery, GetUsersVariables>
> &
  TChildProps;
export function GetUsersHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUsersQuery,
        GetUsersVariables,
        GetUsersProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUsersQuery,
    GetUsersVariables,
    GetUsersProps<TChildProps>
  >(GetUsersDocument, operationOptions);
}
