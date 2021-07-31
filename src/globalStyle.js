import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: "Quicksand", sans-serif;
  }
  a {
    color: inherit;
  }
  svg[role="button"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;

export const themes = {
  light: {
    textColor: "black",
    backgroundColor: "white",
  },
  dark: {
    textColor: "white",
    backgroundColor: "black",
  },
};
