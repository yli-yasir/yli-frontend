import Card from "../Card";
import { GET_REPOSITORIES } from "../../graphql/operations";
import Page from "../Page";
import { useQuery } from "@apollo/client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Zoom from "../Zoom";

export default function RepoList() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  const repos = data?.viewer.repositories.nodes;

  return (
      <TransitionGroup>
        {repos &&
          repos.map((repo) => {
            const topics = repo.repositoryTopics.nodes.map(({ topic }) => topic.name);
            return (
                <Zoom timeout={500} key={repo.name}>
                <Card
                  title={repo.name}
                  description={repo.description}
                  date={new Date(repo.updatedAt)}
                  topics={topics}

                />
                </Zoom>
            );
          })}
      </TransitionGroup>
  );
}