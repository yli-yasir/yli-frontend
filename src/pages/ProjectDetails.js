import Page from "../components/Page";
import marked from 'marked'
import { useAsync } from 'react-use'
import styled from 'styled-components';

const ContentContainer = styled.div`
    & img {
    max-width:100%;
    }
`

export default function ProjectDetails() {
    const { value, loading, error } = useAsync(async () => {
        const response = await fetch("https://raw.githubusercontent.com/yli-yasir/health-m-showcase/main/README.md");
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