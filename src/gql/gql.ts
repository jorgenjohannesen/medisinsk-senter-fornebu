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
    "\n  query allPost($language: String!) {\n    allPost {\n      _id\n      title\n      slug {\n        current\n      }\n      excerpt\n      mainImage {\n        asset {\n          url\n        }\n      }\n    }\n  }\n": types.AllPostDocument,
    "\n  query allEmployee($language: String!) {\n    allEmployee(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n": types.AllEmployeeDocument,
    "\n  query allNews($language: String!) {\n    allNews(where: { language: { eq: $language } }) {\n      _id\n      title\n      previewRaw\n      bodyRaw\n    }\n  }\n": types.AllNewsDocument,
    "\n  query contactInformation($language: String!) {\n    allContactInformation(where: { language: { eq: $language } }) {\n      _id\n      address\n      phone\n      openingHours\n    }\n  }\n": types.ContactInformationDocument,
    "\n  query allService($language: String!) {\n    allService(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n    }\n  }\n": types.AllServiceDocument,
    "\n  query prices {\n    allPrices {\n      _id\n      pricePdf {\n        asset {\n          url\n        }\n      }\n    }\n  }\n": types.PricesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allPost($language: String!) {\n    allPost {\n      _id\n      title\n      slug {\n        current\n      }\n      excerpt\n      mainImage {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allPost($language: String!) {\n    allPost {\n      _id\n      title\n      slug {\n        current\n      }\n      excerpt\n      mainImage {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allEmployee($language: String!) {\n    allEmployee(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allEmployee($language: String!) {\n    allEmployee(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allNews($language: String!) {\n    allNews(where: { language: { eq: $language } }) {\n      _id\n      title\n      previewRaw\n      bodyRaw\n    }\n  }\n"): (typeof documents)["\n  query allNews($language: String!) {\n    allNews(where: { language: { eq: $language } }) {\n      _id\n      title\n      previewRaw\n      bodyRaw\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query contactInformation($language: String!) {\n    allContactInformation(where: { language: { eq: $language } }) {\n      _id\n      address\n      phone\n      openingHours\n    }\n  }\n"): (typeof documents)["\n  query contactInformation($language: String!) {\n    allContactInformation(where: { language: { eq: $language } }) {\n      _id\n      address\n      phone\n      openingHours\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allService($language: String!) {\n    allService(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n    }\n  }\n"): (typeof documents)["\n  query allService($language: String!) {\n    allService(where: { language: { eq: $language } }) {\n      _id\n      name\n      descriptionRaw\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query prices {\n    allPrices {\n      _id\n      pricePdf {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query prices {\n    allPrices {\n      _id\n      pricePdf {\n        asset {\n          url\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;