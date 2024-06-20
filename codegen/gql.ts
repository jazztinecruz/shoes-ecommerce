/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UPDATE_SINGLE_SHOE($id: ID!, $data: ShoeUpdateInput!) {\n    updateShoe(where: { id: $id }, data: $data) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n  }\n": types.Update_Single_ShoeDocument,
    "\n  query GET_CATEGORIES {\n    categories {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n        id\n        name\n        quantity\n        isAvailable\n      }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n": types.Get_CategoriesDocument,
    "\n  query GET_CATEGORY ($id: ID!) {\n    category (where: {id: $id}) {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n": types.Get_CategoryDocument,
    "\n  query GET_SHOES {\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n": types.Get_ShoesDocument,
    "\n  query GET_SHOE($id: ID!) {\n    shoe(where: { id: $id }) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n": types.Get_ShoeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UPDATE_SINGLE_SHOE($id: ID!, $data: ShoeUpdateInput!) {\n    updateShoe(where: { id: $id }, data: $data) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UPDATE_SINGLE_SHOE($id: ID!, $data: ShoeUpdateInput!) {\n    updateShoe(where: { id: $id }, data: $data) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_CATEGORIES {\n    categories {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n        id\n        name\n        quantity\n        isAvailable\n      }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n"): (typeof documents)["\n  query GET_CATEGORIES {\n    categories {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n        id\n        name\n        quantity\n        isAvailable\n      }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_CATEGORY ($id: ID!) {\n    category (where: {id: $id}) {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n"): (typeof documents)["\n  query GET_CATEGORY ($id: ID!) {\n    category (where: {id: $id}) {\n    id\n    label\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_SHOES {\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n"): (typeof documents)["\n  query GET_SHOES {\n    shoes {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_SHOE($id: ID!) {\n    shoe(where: { id: $id }) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n"): (typeof documents)["\n  query GET_SHOE($id: ID!) {\n    shoe(where: { id: $id }) {\n      id\n      title\n      description {\n        markdown\n      }\n      price\n      quantity\n      colors {\n        hex\n      }\n      sizes {\n      id\n      name\n      quantity\n      isAvailable\n    }\n      images {\n        width\n        height\n        url\n      }\n      categories {\n      ... on Category {\n        id\n        label\n      }\n    }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;