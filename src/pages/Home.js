import Card from "../components/Card";
import { GET_REPOSITORIES } from "../graphql/operations";
import Page from "../components/Page";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  const repos = data?.viewer.repositories.nodes;

  return (
    <Page>
      {repos &&
        repos.map((repo) => {
          const topics = repo.repositoryTopics.nodes.map(({ topic }) => topic.name);
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