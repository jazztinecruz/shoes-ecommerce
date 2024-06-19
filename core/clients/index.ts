import prismaClient from "./prisma";
import queryClient from "./query";

const clients = {
  query: queryClient,
  prisma: prismaClient,
};

export default clients;
