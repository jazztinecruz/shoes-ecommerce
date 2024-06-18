import apolloClient from "./apollo";
import prismaClient from "./prisma";
import queryClient from "./query";

const clients = {
  query: queryClient,
  prisma: prismaClient,
  apollo: apolloClient,
};

export default clients;
