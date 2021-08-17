import loadingImg from "./loading.gif";
import styled from "styled-components";

const StatusIndicator = styled.img`
  width: 40%;
  height: 40%;
  margin: 24px auto;
`;

export function LoadingIndicator() {
  return <StatusIndicator src={loadingImg} alt="loading" />;
}
export default function LoadingPresenter({ loading, error, children }) {
  return (
    <>
      {children}
      {loading && <LoadingIndicator />}
      {error &&  !loading && <p>Something went wrong</p>}
    </>
  );
}
