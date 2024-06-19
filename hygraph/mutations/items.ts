import { gql } from "@codegen/gql";

export const UPDATE_SINGLE_SHOE = gql(`
  mutation UPDATE_SINGLE_SHOE($id: ID!, $data: ShoeUpdateInput!) {
    updateShoe(where: { id: $id }, data: $data) {
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
      sizes {
      id
      name
      quantity
      isAvailable
    }
      images {
        width
        height
        url
      }
    }
  }
`);
