import { gql } from "@codegen/gql";

export const GET_CATEGORIES = gql(`
  query GET_CATEGORIES {
    categories {
    id
    label
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
  }
`);

export const GET_CATEGORY = gql(`
  query GET_CATEGORY ($id: ID!) {
    category (where: {id: $id}) {
    id
    label
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
  }
`);
