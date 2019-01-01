export type Maybe<T> = T | null;

export interface BoardWhereUniqueInput {
  id?: Maybe<string>;
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

  name: string;

  query: string;
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
