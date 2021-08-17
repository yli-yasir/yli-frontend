import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int!, $after: String) {
    viewer {
      repositories(
        first: $first
        orderBy: { field: UPDATED_AT, direction: DESC }
        after: $after
      ) {
        edges {
          node {
            name
            description
            updatedAt
            defaultBranchRef {
              name
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
