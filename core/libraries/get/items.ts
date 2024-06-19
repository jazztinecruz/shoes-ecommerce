import { GET_ALL_ITEMS, GET_SINGLE_ITEM } from "@core/queries/items";
import { gql } from "@apollo/client";
import { getClient } from "@core/clients/apollo";

const getItems = {
  multiple: async () => await multiple(),
  single: async (id: string) => await single(id),
};

export default getItems;

const multiple = async () => {
  const client = getClient();
  const response = await client.query({
    query: GET_ALL_ITEMS,
  });

  const items = response.data.items;
  const loading = response.loading;
  const error = response.error;

  return { items, loading, error };
};

const single = async (id: string) => {
  const client = getClient();
  const response = await client.query({
    query: GET_SINGLE_ITEM,
    variables: { id },
  });

  const item = response.data.items[0];
  const loading = response.loading;
  const error = response.error;

  return { item, loading, error };
};
