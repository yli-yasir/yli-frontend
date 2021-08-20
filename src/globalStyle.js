import { createGlobalStyle,css } from "styled-components";

export const borders = css`
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 8px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: "Quicksand", sans-serif;
  }
  pre {
    overflow:auto;
    padding:16px;
    ${borders}
  }
  * {
    box-sizing:border-box;
  }
  a {
    color: inherit;
  }
  svg[role="button"] {
    cursor: pointer;
  }
  p {
    text-align: justify;
  }
  h1 > a {
    text-decoration:none;
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
