import { gql } from "@codegen/gql";

export const GET_ALL_SHOES = gql(`
  query GET_ALL_SHOES {
    shoes {
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

export const GET_SINGLE_SHOE = gql(`
  query GET_SINGLE_SHOE($id: ID!) {
    shoes(where: { id: $id }) {
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
