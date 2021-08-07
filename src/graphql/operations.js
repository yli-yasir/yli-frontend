import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query GetRepositories($first: Int!) { 
  viewer { 
    repositories(first: $first,orderBy: {field: UPDATED_AT, direction: DESC} ){
      nodes {
          name
        	description
          updatedAt
          defaultBranchRef {
            name
          }
        	repositoryTopics(first:10){
            nodes {
              topic{
                name
              }
            }
          }
          }
        }
      }
    }
`;