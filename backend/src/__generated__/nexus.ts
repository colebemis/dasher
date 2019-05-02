/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoardCreateInput: { // input type
    columns?: NexusGenInputs['ColumnCreateManyWithoutBoardInput'] | null; // ColumnCreateManyWithoutBoardInput
    name: string; // String!
    query: string; // String!
  }
  BoardCreateOneWithoutColumnsInput: { // input type
    connect?: NexusGenInputs['BoardWhereUniqueInput'] | null; // BoardWhereUniqueInput
    create?: NexusGenInputs['BoardCreateWithoutColumnsInput'] | null; // BoardCreateWithoutColumnsInput
  }
  BoardCreateWithoutColumnsInput: { // input type
    name: string; // String!
    owner: NexusGenInputs['UserCreateOneWithoutBoardsInput']; // UserCreateOneWithoutBoardsInput!
    query: string; // String!
  }
  BoardUpdateInput: { // input type
    columns?: NexusGenInputs['ColumnUpdateManyWithoutBoardInput'] | null; // ColumnUpdateManyWithoutBoardInput
    name?: string | null; // String
    owner?: NexusGenInputs['UserUpdateOneRequiredWithoutBoardsInput'] | null; // UserUpdateOneRequiredWithoutBoardsInput
    query?: string | null; // String
  }
  BoardUpdateOneRequiredWithoutColumnsInput: { // input type
    connect?: NexusGenInputs['BoardWhereUniqueInput'] | null; // BoardWhereUniqueInput
    create?: NexusGenInputs['BoardCreateWithoutColumnsInput'] | null; // BoardCreateWithoutColumnsInput
    update?: NexusGenInputs['BoardUpdateWithoutColumnsDataInput'] | null; // BoardUpdateWithoutColumnsDataInput
    upsert?: NexusGenInputs['BoardUpsertWithoutColumnsInput'] | null; // BoardUpsertWithoutColumnsInput
  }
  BoardUpdateWithoutColumnsDataInput: { // input type
    name?: string | null; // String
    owner?: NexusGenInputs['UserUpdateOneRequiredWithoutBoardsInput'] | null; // UserUpdateOneRequiredWithoutBoardsInput
    query?: string | null; // String
  }
  BoardUpsertWithoutColumnsInput: { // input type
    create: NexusGenInputs['BoardCreateWithoutColumnsInput']; // BoardCreateWithoutColumnsInput!
    update: NexusGenInputs['BoardUpdateWithoutColumnsDataInput']; // BoardUpdateWithoutColumnsDataInput!
  }
  BoardWhereInput: { // input type
    AND?: NexusGenInputs['BoardWhereInput'][] | null; // [BoardWhereInput!]
    columns_every?: NexusGenInputs['ColumnWhereInput'] | null; // ColumnWhereInput
    columns_none?: NexusGenInputs['ColumnWhereInput'] | null; // ColumnWhereInput
    columns_some?: NexusGenInputs['ColumnWhereInput'] | null; // ColumnWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['BoardWhereInput'][] | null; // [BoardWhereInput!]
    OR?: NexusGenInputs['BoardWhereInput'][] | null; // [BoardWhereInput!]
    owner?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    query?: string | null; // String
    query_contains?: string | null; // String
    query_ends_with?: string | null; // String
    query_gt?: string | null; // String
    query_gte?: string | null; // String
    query_in?: string[] | null; // [String!]
    query_lt?: string | null; // String
    query_lte?: string | null; // String
    query_not?: string | null; // String
    query_not_contains?: string | null; // String
    query_not_ends_with?: string | null; // String
    query_not_in?: string[] | null; // [String!]
    query_not_starts_with?: string | null; // String
    query_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  BoardWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ColumnCreateInput: { // input type
    board: NexusGenInputs['BoardCreateOneWithoutColumnsInput']; // BoardCreateOneWithoutColumnsInput!
    index: number; // Int!
    name: string; // String!
    query: string; // String!
  }
  ColumnCreateManyWithoutBoardInput: { // input type
    connect?: NexusGenInputs['ColumnWhereUniqueInput'][] | null; // [ColumnWhereUniqueInput!]
    create?: NexusGenInputs['ColumnCreateWithoutBoardInput'][] | null; // [ColumnCreateWithoutBoardInput!]
  }
  ColumnCreateWithoutBoardInput: { // input type
    index: number; // Int!
    name: string; // String!
    query: string; // String!
  }
  ColumnScalarWhereInput: { // input type
    AND?: NexusGenInputs['ColumnScalarWhereInput'][] | null; // [ColumnScalarWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    index?: number | null; // Int
    index_gt?: number | null; // Int
    index_gte?: number | null; // Int
    index_in?: number[] | null; // [Int!]
    index_lt?: number | null; // Int
    index_lte?: number | null; // Int
    index_not?: number | null; // Int
    index_not_in?: number[] | null; // [Int!]
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ColumnScalarWhereInput'][] | null; // [ColumnScalarWhereInput!]
    OR?: NexusGenInputs['ColumnScalarWhereInput'][] | null; // [ColumnScalarWhereInput!]
    query?: string | null; // String
    query_contains?: string | null; // String
    query_ends_with?: string | null; // String
    query_gt?: string | null; // String
    query_gte?: string | null; // String
    query_in?: string[] | null; // [String!]
    query_lt?: string | null; // String
    query_lte?: string | null; // String
    query_not?: string | null; // String
    query_not_contains?: string | null; // String
    query_not_ends_with?: string | null; // String
    query_not_in?: string[] | null; // [String!]
    query_not_starts_with?: string | null; // String
    query_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  ColumnUpdateInput: { // input type
    board?: NexusGenInputs['BoardUpdateOneRequiredWithoutColumnsInput'] | null; // BoardUpdateOneRequiredWithoutColumnsInput
    index?: number | null; // Int
    name?: string | null; // String
    query?: string | null; // String
  }
  ColumnUpdateManyDataInput: { // input type
    index?: number | null; // Int
    name?: string | null; // String
    query?: string | null; // String
  }
  ColumnUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['ColumnUpdateManyDataInput']; // ColumnUpdateManyDataInput!
    where: NexusGenInputs['ColumnScalarWhereInput']; // ColumnScalarWhereInput!
  }
  ColumnUpdateManyWithoutBoardInput: { // input type
    connect?: NexusGenInputs['ColumnWhereUniqueInput'][] | null; // [ColumnWhereUniqueInput!]
    create?: NexusGenInputs['ColumnCreateWithoutBoardInput'][] | null; // [ColumnCreateWithoutBoardInput!]
    delete?: NexusGenInputs['ColumnWhereUniqueInput'][] | null; // [ColumnWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ColumnScalarWhereInput'][] | null; // [ColumnScalarWhereInput!]
    disconnect?: NexusGenInputs['ColumnWhereUniqueInput'][] | null; // [ColumnWhereUniqueInput!]
    set?: NexusGenInputs['ColumnWhereUniqueInput'][] | null; // [ColumnWhereUniqueInput!]
    update?: NexusGenInputs['ColumnUpdateWithWhereUniqueWithoutBoardInput'][] | null; // [ColumnUpdateWithWhereUniqueWithoutBoardInput!]
    updateMany?: NexusGenInputs['ColumnUpdateManyWithWhereNestedInput'][] | null; // [ColumnUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['ColumnUpsertWithWhereUniqueWithoutBoardInput'][] | null; // [ColumnUpsertWithWhereUniqueWithoutBoardInput!]
  }
  ColumnUpdateWithWhereUniqueWithoutBoardInput: { // input type
    data: NexusGenInputs['ColumnUpdateWithoutBoardDataInput']; // ColumnUpdateWithoutBoardDataInput!
    where: NexusGenInputs['ColumnWhereUniqueInput']; // ColumnWhereUniqueInput!
  }
  ColumnUpdateWithoutBoardDataInput: { // input type
    index?: number | null; // Int
    name?: string | null; // String
    query?: string | null; // String
  }
  ColumnUpsertWithWhereUniqueWithoutBoardInput: { // input type
    create: NexusGenInputs['ColumnCreateWithoutBoardInput']; // ColumnCreateWithoutBoardInput!
    update: NexusGenInputs['ColumnUpdateWithoutBoardDataInput']; // ColumnUpdateWithoutBoardDataInput!
    where: NexusGenInputs['ColumnWhereUniqueInput']; // ColumnWhereUniqueInput!
  }
  ColumnWhereInput: { // input type
    AND?: NexusGenInputs['ColumnWhereInput'][] | null; // [ColumnWhereInput!]
    board?: NexusGenInputs['BoardWhereInput'] | null; // BoardWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    index?: number | null; // Int
    index_gt?: number | null; // Int
    index_gte?: number | null; // Int
    index_in?: number[] | null; // [Int!]
    index_lt?: number | null; // Int
    index_lte?: number | null; // Int
    index_not?: number | null; // Int
    index_not_in?: number[] | null; // [Int!]
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ColumnWhereInput'][] | null; // [ColumnWhereInput!]
    OR?: NexusGenInputs['ColumnWhereInput'][] | null; // [ColumnWhereInput!]
    query?: string | null; // String
    query_contains?: string | null; // String
    query_ends_with?: string | null; // String
    query_gt?: string | null; // String
    query_gte?: string | null; // String
    query_in?: string[] | null; // [String!]
    query_lt?: string | null; // String
    query_lte?: string | null; // String
    query_not?: string | null; // String
    query_not_contains?: string | null; // String
    query_not_ends_with?: string | null; // String
    query_not_in?: string[] | null; // [String!]
    query_not_starts_with?: string | null; // String
    query_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  ColumnWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateOneWithoutBoardsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutBoardsInput'] | null; // UserCreateWithoutBoardsInput
  }
  UserCreateWithoutBoardsInput: { // input type
    gitHubId: string; // ID!
  }
  UserUpdateOneRequiredWithoutBoardsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutBoardsInput'] | null; // UserCreateWithoutBoardsInput
    update?: NexusGenInputs['UserUpdateWithoutBoardsDataInput'] | null; // UserUpdateWithoutBoardsDataInput
    upsert?: NexusGenInputs['UserUpsertWithoutBoardsInput'] | null; // UserUpsertWithoutBoardsInput
  }
  UserUpdateWithoutBoardsDataInput: { // input type
    gitHubId?: string | null; // ID
  }
  UserUpsertWithoutBoardsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutBoardsInput']; // UserCreateWithoutBoardsInput!
    update: NexusGenInputs['UserUpdateWithoutBoardsDataInput']; // UserUpdateWithoutBoardsDataInput!
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    boards_every?: NexusGenInputs['BoardWhereInput'] | null; // BoardWhereInput
    boards_none?: NexusGenInputs['BoardWhereInput'] | null; // BoardWhereInput
    boards_some?: NexusGenInputs['BoardWhereInput'] | null; // BoardWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    gitHubId?: string | null; // ID
    gitHubId_contains?: string | null; // ID
    gitHubId_ends_with?: string | null; // ID
    gitHubId_gt?: string | null; // ID
    gitHubId_gte?: string | null; // ID
    gitHubId_in?: string[] | null; // [ID!]
    gitHubId_lt?: string | null; // ID
    gitHubId_lte?: string | null; // ID
    gitHubId_not?: string | null; // ID
    gitHubId_not_contains?: string | null; // ID
    gitHubId_not_ends_with?: string | null; // ID
    gitHubId_not_in?: string[] | null; // [ID!]
    gitHubId_not_starts_with?: string | null; // ID
    gitHubId_starts_with?: string | null; // ID
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereUniqueInput: { // input type
    gitHubId?: string | null; // ID
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  BoardOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "query_ASC" | "query_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ColumnOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "index_ASC" | "index_DESC" | "name_ASC" | "name_DESC" | "query_ASC" | "query_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  Board: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    query: string; // String!
    updatedAt: any; // DateTime!
  }
  Column: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    index: number; // Int!
    name: string; // String!
    query: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: {};
  Query: {};
  SignInPayload: { // root type
    token: string; // String!
  }
  User: { // root type
    createdAt: any; // DateTime!
    gitHubId: string; // ID!
    id: string; // ID!
    updatedAt: any; // DateTime!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BoardCreateInput: NexusGenInputs['BoardCreateInput'];
  BoardCreateOneWithoutColumnsInput: NexusGenInputs['BoardCreateOneWithoutColumnsInput'];
  BoardCreateWithoutColumnsInput: NexusGenInputs['BoardCreateWithoutColumnsInput'];
  BoardUpdateInput: NexusGenInputs['BoardUpdateInput'];
  BoardUpdateOneRequiredWithoutColumnsInput: NexusGenInputs['BoardUpdateOneRequiredWithoutColumnsInput'];
  BoardUpdateWithoutColumnsDataInput: NexusGenInputs['BoardUpdateWithoutColumnsDataInput'];
  BoardUpsertWithoutColumnsInput: NexusGenInputs['BoardUpsertWithoutColumnsInput'];
  BoardWhereInput: NexusGenInputs['BoardWhereInput'];
  BoardWhereUniqueInput: NexusGenInputs['BoardWhereUniqueInput'];
  ColumnCreateInput: NexusGenInputs['ColumnCreateInput'];
  ColumnCreateManyWithoutBoardInput: NexusGenInputs['ColumnCreateManyWithoutBoardInput'];
  ColumnCreateWithoutBoardInput: NexusGenInputs['ColumnCreateWithoutBoardInput'];
  ColumnScalarWhereInput: NexusGenInputs['ColumnScalarWhereInput'];
  ColumnUpdateInput: NexusGenInputs['ColumnUpdateInput'];
  ColumnUpdateManyDataInput: NexusGenInputs['ColumnUpdateManyDataInput'];
  ColumnUpdateManyWithWhereNestedInput: NexusGenInputs['ColumnUpdateManyWithWhereNestedInput'];
  ColumnUpdateManyWithoutBoardInput: NexusGenInputs['ColumnUpdateManyWithoutBoardInput'];
  ColumnUpdateWithWhereUniqueWithoutBoardInput: NexusGenInputs['ColumnUpdateWithWhereUniqueWithoutBoardInput'];
  ColumnUpdateWithoutBoardDataInput: NexusGenInputs['ColumnUpdateWithoutBoardDataInput'];
  ColumnUpsertWithWhereUniqueWithoutBoardInput: NexusGenInputs['ColumnUpsertWithWhereUniqueWithoutBoardInput'];
  ColumnWhereInput: NexusGenInputs['ColumnWhereInput'];
  ColumnWhereUniqueInput: NexusGenInputs['ColumnWhereUniqueInput'];
  UserCreateOneWithoutBoardsInput: NexusGenInputs['UserCreateOneWithoutBoardsInput'];
  UserCreateWithoutBoardsInput: NexusGenInputs['UserCreateWithoutBoardsInput'];
  UserUpdateOneRequiredWithoutBoardsInput: NexusGenInputs['UserUpdateOneRequiredWithoutBoardsInput'];
  UserUpdateWithoutBoardsDataInput: NexusGenInputs['UserUpdateWithoutBoardsDataInput'];
  UserUpsertWithoutBoardsInput: NexusGenInputs['UserUpsertWithoutBoardsInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  BoardOrderByInput: NexusGenEnums['BoardOrderByInput'];
  ColumnOrderByInput: NexusGenEnums['ColumnOrderByInput'];
}

export interface NexusGenFieldTypes {
  Board: { // field return type
    columns: NexusGenRootTypes['Column'][] | null; // [Column!]
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    owner: NexusGenRootTypes['User']; // User!
    query: string; // String!
    updatedAt: any; // DateTime!
  }
  Column: { // field return type
    board: NexusGenRootTypes['Board']; // Board!
    createdAt: any; // DateTime!
    id: string; // ID!
    index: number; // Int!
    name: string; // String!
    query: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createBoard: NexusGenRootTypes['Board']; // Board!
    createColumn: NexusGenRootTypes['Column']; // Column!
    deleteBoard: NexusGenRootTypes['Board'] | null; // Board
    deleteColumn: NexusGenRootTypes['Column'] | null; // Column
    signIn: NexusGenRootTypes['SignInPayload']; // SignInPayload!
    signOut: boolean; // Boolean!
    updateBoard: NexusGenRootTypes['Board'] | null; // Board
    updateColumn: NexusGenRootTypes['Column'] | null; // Column
  }
  Query: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    isSignedIn: boolean; // Boolean!
    signedInUser: NexusGenRootTypes['User']; // User!
  }
  SignInPayload: { // field return type
    token: string; // String!
  }
  User: { // field return type
    boards: NexusGenRootTypes['Board'][] | null; // [Board!]
    createdAt: any; // DateTime!
    gitHubId: string; // ID!
    id: string; // ID!
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Board: {
    columns: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ColumnOrderByInput'] | null; // ColumnOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ColumnWhereInput'] | null; // ColumnWhereInput
    }
  }
  Mutation: {
    createBoard: { // args
      data: NexusGenInputs['BoardCreateInput']; // BoardCreateInput!
    }
    createColumn: { // args
      data: NexusGenInputs['ColumnCreateInput']; // ColumnCreateInput!
    }
    deleteBoard: { // args
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
    deleteColumn: { // args
      where: NexusGenInputs['ColumnWhereUniqueInput']; // ColumnWhereUniqueInput!
    }
    signIn: { // args
      gitHubCode: string; // String!
    }
    updateBoard: { // args
      data: NexusGenInputs['BoardUpdateInput']; // BoardUpdateInput!
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
    updateColumn: { // args
      data: NexusGenInputs['ColumnUpdateInput']; // ColumnUpdateInput!
      where: NexusGenInputs['ColumnWhereUniqueInput']; // ColumnWhereUniqueInput!
    }
  }
  Query: {
    board: { // args
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
  }
  User: {
    boards: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['BoardOrderByInput'] | null; // BoardOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['BoardWhereInput'] | null; // BoardWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Board" | "Column" | "Mutation" | "Query" | "SignInPayload" | "User";

export type NexusGenInputNames = "BoardCreateInput" | "BoardCreateOneWithoutColumnsInput" | "BoardCreateWithoutColumnsInput" | "BoardUpdateInput" | "BoardUpdateOneRequiredWithoutColumnsInput" | "BoardUpdateWithoutColumnsDataInput" | "BoardUpsertWithoutColumnsInput" | "BoardWhereInput" | "BoardWhereUniqueInput" | "ColumnCreateInput" | "ColumnCreateManyWithoutBoardInput" | "ColumnCreateWithoutBoardInput" | "ColumnScalarWhereInput" | "ColumnUpdateInput" | "ColumnUpdateManyDataInput" | "ColumnUpdateManyWithWhereNestedInput" | "ColumnUpdateManyWithoutBoardInput" | "ColumnUpdateWithWhereUniqueWithoutBoardInput" | "ColumnUpdateWithoutBoardDataInput" | "ColumnUpsertWithWhereUniqueWithoutBoardInput" | "ColumnWhereInput" | "ColumnWhereUniqueInput" | "UserCreateOneWithoutBoardsInput" | "UserCreateWithoutBoardsInput" | "UserUpdateOneRequiredWithoutBoardsInput" | "UserUpdateWithoutBoardsDataInput" | "UserUpsertWithoutBoardsInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "BoardOrderByInput" | "ColumnOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}