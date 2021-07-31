import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faQuestionCircle, faStarAndCrescent, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
const StyledHeader = styled.div`
  font-family: "Press Start 2P", sans-serif;
  text-align: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;
export default function Header() {

  const themeContext = useContext(ThemeContext);

  const toggleTheme = ()=>{
    const nextThemeKey = themeContext.themeKey === 'light' ? 'dark' : 'light';
    themeContext.setThemeKey(nextThemeKey)
  }
  
  return (
    <StyledHeader>
      <h1>Y-Li</h1>
      <h4>Yasir Al-Baldawi</h4>
      <ActionsContainer>
        <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
        <FontAwesomeIcon
          role='button'
          icon={themeContext.themeKey === 'light'? faMoon : faSun}
          size="2x"
          onClick={toggleTheme}
        />
      </ActionsContainer>

    </StyledHeader>
  );
}
