import loadingImg from './loading.gif';
import styled from 'styled-components';

const StatusIndicator = styled.img`
    width:40%;
    height:40%;
    margin:24px auto;
`
export default function LoadingPresenter({loading,error,children}){
    return (
        <>
        {loading && <StatusIndicator src={loadingImg} alt="loading"/> }
        {error && <StatusIndicator src={loadingImg} alt="loading"/>}
        {!loading && !error && children}
        </>
    )

}