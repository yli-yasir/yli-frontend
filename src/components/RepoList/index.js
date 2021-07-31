import Card from "../Card";
import { GET_REPOSITORIES } from "../../graphql/operations";
import Page from "../Page";
import { useQuery } from "@apollo/client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Zoom from "../Zoom";
import { Link } from "react-router-dom";
import { makeProjectLink } from "../../utills";
import styled from "styled-components";
import LoadingPresenter from "../LoadingPresenter";


export default function RepoList() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  const repos = data?.viewer.repositories.nodes;

  return (
    <LoadingPresenter loading={loading} error={error}>
    <TransitionGroup appear={true}>
      {repos &&
        repos.map((repo,index) => {
          const topics = repo.repositoryTopics.nodes.map(
            ({ topic }) => topic.name
          );
          return (
            <Zoom timeout={(index+1)*500} key={repo.name}>
              <Card
                title={repo.name}
                link={makeProjectLink(repo.name, repo.defaultBranchRef.name)}
                description={repo.description}
                date={new Date(repo.updatedAt)}
                topics={topics}
              />
            </Zoom>
          );
        })}
    </TransitionGroup>
    </LoadingPresenter>
  );
}
