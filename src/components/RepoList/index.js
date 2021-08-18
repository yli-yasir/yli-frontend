import Card from "../Card";
import { GET_REPOSITORIES } from "../../graphql/operations";
import { useQuery } from "@apollo/client";
import { TransitionGroup } from "react-transition-group";
import Zoom from "../Zoom";
import { makeProjectLink } from "../../utills";
import LoadingPresenter from "../LoadingPresenter";
import { useInView } from "react-intersection-observer";

export default function RepoList() {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { first: 5 },
    notifyOnNetworkStatusChange: true,
  });

  const { inView, ref } = useInView();

  const repos = data?.viewer.repositories.edges.map((edge) => edge.node);
  const pageInfo = data?.viewer.repositories.pageInfo;

  function requestFetchMore() {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: { after: pageInfo.endCursor, first: 5 },
      });
    }
  }

  return (
    <>
      <LoadingPresenter loading={loading} error={error}>
        <TransitionGroup appear={true}>
          {repos &&
            repos.map((repo, index) => {
              const topics = repo.repositoryTopics.nodes.map(
                ({ topic }) => topic.name
              );
              return (
                <Zoom timeout={(index + 1) * 250} key={repo.name}>
                  <Card
                    title={repo.name}
                    link={makeProjectLink(
                      repo.name,
                      repo.defaultBranchRef.name
                    )}
                    description={repo.description}
                    date={new Date(repo.updatedAt)}
                    topics={topics}
                  />
                </Zoom>
              );
            })}
        </TransitionGroup>
      </LoadingPresenter>
      <div ref={ref}></div>
      {!loading && inView && pageInfo?.hasNextPage && requestFetchMore()}
    </>
  );
}
