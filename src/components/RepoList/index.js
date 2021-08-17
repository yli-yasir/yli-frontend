import Card from "../Card";
import { GET_REPOSITORIES } from "../../graphql/operations";
import { useQuery } from "@apollo/client";
import { TransitionGroup } from "react-transition-group";
import Zoom from "../Zoom";
import { makeProjectLink } from "../../utills";
import LoadingPresenter from "../LoadingPresenter";
import {InView} from "react-intersection-observer";

export default function RepoList() {

  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { first: 5 },
    notifyOnNetworkStatusChange:true
  });

  const repos = data?.viewer.repositories.edges.map(edge=>edge.node);
  
  function requestFetchMore(){
    const pageInfo = data?.viewer.repositories.pageInfo;

    if (pageInfo?.hasNextPage){
      fetchMore({
        variables: { after: pageInfo.endCursor,first: 5 },
      })
    }
  }

  console.log(loading);

  return (
    <LoadingPresenter loading={loading} error={error}>
      <TransitionGroup appear={true}>
        {repos &&
          repos.map((repo, index) => {
            const topics = repo.repositoryTopics.nodes.map(
              ({ topic }) => topic.name
            );
            return (
              <Zoom timeout={(index + 1) * 500} key={repo.name}>
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
      <InView onChange={(visible)=> visible && requestFetchMore()}/>

    </LoadingPresenter>
  );
}
