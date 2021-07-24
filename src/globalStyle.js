import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
color: ${({ theme }) => (theme?.mode === "dark" ? "white" : "black")};
font-family:'Quicksand', sans-serif;
}
`;

export default GlobalStyle;

export const themes = {
  light: {
    mode: "light",
  },
  dark: {
    mode: "dark",
  },
};
