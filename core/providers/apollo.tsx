"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

// server apollo client is different from client apollo client
// this is a way to create a client for client components
// by making an apollo wrapper that uses the ApolloNextAppProvider
// and returns the ApolloClient
// we can now query in client components with the use of useSuspenseQuery from apollo client
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxk1jypa021007w4qaitldj7/master",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
