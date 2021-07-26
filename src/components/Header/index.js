import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt,faYoutube } from '@fortawesome/free-brands-svg-icons'

const StyledHeader = styled.div`
    font-family: 'Press Start 2P', sans-serif;
    text-align: center;
`

const ActionsContainer = styled.div`
display: flex;
justify-content: space-around;
padding:16px;
`;
export default function Header() {
    return (
        <StyledHeader>
            <h1>Y-Li</h1>
            <h4>Yasir Al-Baldawi</h4>
            <ActionsContainer>
                <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
                <FontAwesomeIcon icon={faSun} size="2x" />
            </ActionsContainer>
        </StyledHeader>
    )
}