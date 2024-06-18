import { gql } from "graphql-request";

export const GET_ALL_ITEMS = gql`
  query GET_ALL_ITEMS {
    items {
      id
      title
      description {
        markdown
      }
      price
      quantity
      colors {
        hex
      }
      sizes
      images {
        width
        height
        url
      }
    }
  }
`;

export const GET_SINGLE_ITEM = gql`
  query GET_SINGLE_ITEM($id: ID!) {
    items(where: { id: $id }) {
      id
      title
      description {
        markdown
      }
      price
      quantity
      colors {
        hex
      }
      sizes
      images {
        width
        height
        url
      }
    }
  }
`;
