export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

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
