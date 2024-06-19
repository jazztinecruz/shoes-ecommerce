import { gql } from "@apollo/client";

export const UPDATE_SINGLE_ITEM = gql`
  mutation UPDATE_SINGLE_ITEM($id: ID!, $data: ItemUpdateInput!) {
    updateItem(where: { id: $id }, data: $data) {
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
