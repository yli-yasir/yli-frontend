import styled from "styled-components";

const darkThemeColor = `#03DAC5;`;
const lightThemeColor = `#dc004d;`;

const Anchor = styled.a`
color: ${(props) =>
  props.theme?.mode === "dark" ? darkThemeColor : lightThemeColor}
text-decoration: none;
&:hover{
    text-decoration: underline;
}
`;

export default Anchor;