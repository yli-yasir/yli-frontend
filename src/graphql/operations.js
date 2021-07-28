import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query GetRepositories { 
  viewer { 
    repositories(first: 100,orderBy: {field: UPDATED_AT, direction: DESC} ){
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