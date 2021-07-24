import { useQuery } from "@apollo/client";
import Card from "./components/Card";
import { GET_REPOSITORIES } from "./graphql/operations";
import GlobalStyle from "./globalStyle";
import Page from "./components/Page";
function App() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  const repos = data?.viewer.repositories.nodes;

  return (
    <Page>
      <GlobalStyle></GlobalStyle>
      {repos &&
        
        repos.map((repo) => {
          const topics = repo.repositoryTopics.nodes.map(({topic})=>topic.name); 
          return (
            <Card
              key={repo.name}
              title={repo.name}
              description={repo.description}
              date={new Date(repo.updatedAt)}
              topics={topics}
              
            />
          );
        })}
    </Page>
  );
}

export default App;
