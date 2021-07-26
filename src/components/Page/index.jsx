import Header from "../Header";
import styled from "styled-components";

const StyledPage = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 960px) {
    width: 60%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
`;

export default function Page({children}){
  return <StyledPage>
    <Header/>
    {children}
  </StyledPage>

}