import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faQuestionCircle,
  faMoon,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const toggleTheme = () => {
    const nextThemeKey = themeContext.themeKey === "light" ? "dark" : "light";
    themeContext.setThemeKey(nextThemeKey);
  };

  return (
    <StyledHeader>
      <h1>
        <Link to="/">Y-Li</Link>
      </h1>
      <h4>Yasir Al-Baldawi</h4>
      <ActionsContainer>
        <FontAwesomeIcon
          role="button"
          icon={faArrowAltCircleLeft}
          size="2x"
          onClick={() => history.goBack()}
        />

        <a href="https://github.com/yli-yasir">
          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        </a>

        <a href="https://www.youtube.com/channel/UCx_slW-WOgcElccYYJnLt1Q">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

        <Link to="/about">
          <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
        </Link>

        <FontAwesomeIcon
          role="button"
          icon={themeContext.themeKey === "light" ? faMoon : faSun}
          size="2x"
          onClick={toggleTheme}
        />
      </ActionsContainer>
    </StyledHeader>
  );
}
