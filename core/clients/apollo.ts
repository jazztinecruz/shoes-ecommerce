import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

// registerApolloClient makes sure that the ApolloClient instance is created only once
// and is reused across requests.
// we can use the getClient function in any server components to fetch data

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.HYGRAPH_API_ENDPOINT,
    }),
  });
});
