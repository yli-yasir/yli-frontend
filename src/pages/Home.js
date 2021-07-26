import Card from "../components/Card";
import { GET_REPOSITORIES } from "../graphql/operations";
import Page from "../components/Page";
import { useQuery } from "@apollo/client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &.card-enter {
    opacity: 0;

  }
  &.card-enter-active {
  opacity: 1;
  transition: opacity 1000ms ease-in;
  }

  &.card-exit {
    opacity: 1;

  }

  &.card-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in;
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  const repos = data?.viewer.repositories.nodes;

  return (
    <Page>
      <TransitionGroup>
        {repos &&
          repos.map((repo) => {
            const topics = repo.repositoryTopics.nodes.map(({ topic }) => topic.name);
            return (
              <CSSTransition timeout={10000} classNames="card" key={repo.name}>
                <StyledCard
                  title={repo.name}
                  description={repo.description}
                  date={new Date(repo.updatedAt)}
                  topics={topics}

                />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </Page>
  );
}