import { gql } from "@codegen/gql";

export const GET_SHOES = gql(`
  query GET_SHOES {
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
      categories {
      ... on Category {
        id
        label
      }
    }
    }
  }
`);

export const GET_SHOE = gql(`
  query GET_SHOE($id: ID!) {
    shoe(where: { id: $id }) {
      id
      title
      description {
        html
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
      categories {
      ... on Category {
        id
        label
      }
    }
    }
  }
`);
