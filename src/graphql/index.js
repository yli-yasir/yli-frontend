import { ApolloClient, InMemoryCache } from "@apollo/client";

import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    User: {
         fields: {
           repositories:relayStylePagination()
         }
      },
    },
});

const githubApolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache
});

export default githubApolloClient;
