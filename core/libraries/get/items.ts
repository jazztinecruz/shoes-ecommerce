import { getClient } from "@core/clients/apollo";
import { GET_ALL_SHOES, GET_SINGLE_SHOE } from "@hygraph/queries";

const getItems = {
  multiple: async () => await multiple(),
  single: async (id: string) => await single(id),
};

export default getItems;

const multiple = async () => {
  const client = getClient();
  const response = await client.query({
    query: GET_ALL_SHOES,
  });

  const shoes = response.data.shoes;
  return { shoes };
};

const single = async (id: string) => {
  const client = getClient();
  const response = await client.query({
    query: GET_SINGLE_SHOE,
    variables: { id },
  });

  const shoe = response.data.shoes[0];
  return { shoe };
};
