import Page from "../components/Page";
import marked from "marked";
import { useAsync } from "react-use";
import styled from "styled-components";
import useSearchParams from "../hooks/useSeachParams";
import { useParams } from "react-router-dom";
import { getREADMELink, replaceRelativeLinks } from "../utills";
import LoadingPresenter from "../components/LoadingPresenter";
const ContentContainer = styled.div`
  & img {
    max-width: 100%;
  }
`;

export default function ProjectDetails(props) {
  const { repoName, defaultBranch } = useParams();

  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(getREADMELink(repoName, defaultBranch));
    let markdown = await response.text();
    return replaceRelativeLinks(repoName,defaultBranch,markdown)
  });

  return (
    // Content is already purified
    <Page>
      <LoadingPresenter loading={loading} error={error}>
        {value && (
          <ContentContainer
            dangerouslySetInnerHTML={{ __html: marked(value) }}
          ></ContentContainer>
        )}
      </LoadingPresenter>
    </Page>
  );
}
