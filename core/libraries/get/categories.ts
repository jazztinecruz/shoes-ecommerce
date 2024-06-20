import { getClient } from "@core/clients/apollo";
import { GET_CATEGORIES, GET_CATEGORY } from "@hygraph/queries/categories";

const getCategories = {
  multiple: async () => await multiple(),
  single: async (id: string) => await single(id),
};

export default getCategories;

const multiple = async () => {
  const client = getClient();
  const response = await client.query({
    query: GET_CATEGORIES,
  });

  const categories = response.data.categories;
  return { categories };
};

const single = async (id: string) => {
  const client = getClient();
  const response = await client.query({
    query: GET_CATEGORY,
    variables: { id },
  });

  const category = response.data.category;
  return { category };
};
