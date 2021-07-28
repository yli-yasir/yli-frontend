import Page from "../components/Page";
import marked from 'marked'
import { useAsync } from 'react-use'
import styled from 'styled-components';
import useSearchParams from '../hooks/useSeachParams';
import { useParams } from "react-router-dom";
import { getREADMELink } from "../utills";
const ContentContainer = styled.div`
    & img {
    max-width:100%;
    }
`

export default function ProjectDetails(props) {

    const {repoName,defaultBranch} = useParams();

    const { value, loading, error } = useAsync(async () => {
        const response = await fetch(getREADMELink(repoName,defaultBranch));
        const result = await response.text();
        return result
    });

    return (
        // Content is already purified
        <Page >
            {value && <ContentContainer dangerouslySetInnerHTML={{ __html: marked(value) }}></ContentContainer>}
        </ Page>
    )
}