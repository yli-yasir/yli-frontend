import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";


const githubApolloClient = new ApolloClient({
    uri: 'http://localhost:3000/github/graphql',
    cache: new InMemoryCache()
  });

export default githubApolloClient;