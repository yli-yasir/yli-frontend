import styled from 'styled-components';
import PropTypes from 'prop-types';
import {css} from 'styled-components';
import {getRepoTitle} from '../../utills';
const borders = css`border: 2px solid ${({ theme }) => theme.mode === 'dark' ? 'white' : 'black'};`

const StyledCard = styled.div`
${borders}
padding: 8px;
margin: 8px;
`;

const Topic = styled.span`
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
        <h3>{getRepoTitle(props.title)}</h3>
        <p>{props.description}</p>
        {props.topics?.map((topic) => <Topic key={topic}>{topic}</Topic>)}
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