import { ApolloWrapper } from "./apollo";
import QueryProvider from "./query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>
      <QueryProvider>{children}</QueryProvider>;
    </ApolloWrapper>
  );
};

export default Providers;
