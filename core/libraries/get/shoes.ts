import { getClient } from "@core/clients/apollo";
import { GET_SHOES, GET_SHOE } from "@hygraph/queries";

const getShoes = {
  multiple: async () => await multiple(),
  single: async (id: string) => await single(id),
};

export default getShoes;

const multiple = async () => {
  const client = getClient();
  const response = await client.query({
    query: GET_SHOES,
  });

  const shoes = response.data.shoes;
  return { shoes };
};

const single = async (id: string) => {
  const client = getClient();
  const response = await client.query({
    query: GET_SHOE,
    variables: { id },
  });

  const shoe = response.data.shoe;
  return { shoe };
};
