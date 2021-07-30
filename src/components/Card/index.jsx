import styled from 'styled-components';
import PropTypes from 'prop-types';
import {css} from 'styled-components';
import {getRepoTitle} from '../../utills';
import { Link } from 'react-router-dom';
import Anchor from '../Anchor'
const borders = css`
border: 2px solid ${({ theme }) => theme.mode === 'dark' ? 'white' : 'black'};
border-radius: 8px;
`

const StyledCard = styled.div`
${borders}
padding: 8px;
margin: 8px;
`;


const TopicContainer = styled.span`
${borders}
padding:4px;
margin:4px;
display: inline-block;
`;

const DateContainer = styled.span`
display:block;
width:200px;
text-align: right;
margin-left: auto;
`;

function Card(props) {    

    return <StyledCard className={props.className}>
        <Link to={props.link}><h3>{getRepoTitle(props.title)}</h3></Link>
        <p>{props.description}</p>
        {props.topics?.map((topic) => <TopicContainer key={topic}>{topic}</TopicContainer>)}
        <DateContainer>{props.date?.toLocaleString()}</DateContainer>
    </StyledCard>
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.instanceOf(Date),
};

export default Card;